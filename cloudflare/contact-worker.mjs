const SITE_ORIGIN = "https://yagyachauhan.me";
const INBOX = "yagya@quantumreach.tech";
const SENDER = "contact-form@yagyachauhan.me";
const MAX_BODY_BYTES = 16 * 1024;
const EMAIL_ADDRESS = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const FIELD_LIMITS = { name: 100, email: 200, company: 150, brief: 1500, budget: 40, timeline: 40, website: 200 };

function respond(status, error, headers = {}) {
  return Response.json(error ? { error } : { ok: true }, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

async function readBody(request) {
  const bytes = new Uint8Array(MAX_BODY_BYTES);
  const reader = request.body.getReader();
  let length = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return JSON.parse(new TextDecoder().decode(bytes.subarray(0, length)));
    if (length + value.byteLength > bytes.byteLength) {
      await reader.cancel();
      return undefined;
    }
    bytes.set(value, length);
    length += value.byteLength;
  }
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.origin !== SITE_ORIGIN || url.pathname !== "/api/contact") {
      return respond(404, "Endpoint not found.");
    }
    if (request.method !== "POST") {
      return respond(405, "Use the contact form to send a brief.", { Allow: "POST" });
    }
    if (request.headers.get("Origin") !== SITE_ORIGIN) {
      return respond(403, "Please submit from the contact page.");
    }
    if (request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
      return respond(415, "Please submit from the contact page with JavaScript enabled.");
    }
    if (Number(request.headers.get("Content-Length")) > MAX_BODY_BYTES) {
      return respond(413, "Your brief is too large.");
    }

    let input;
    try {
      input = await readBody(request);
    } catch {
      return respond(400, "The submission could not be read.");
    }
    if (input === undefined) return respond(413, "Your brief is too large.");
    if (input === null || typeof input !== "object" || Array.isArray(input)) {
      return respond(400, "The submission could not be read.");
    }

    const fields = {};
    for (const [key, limit] of Object.entries(FIELD_LIMITS)) {
      const value = input[key] ?? "";
      if (typeof value !== "string" || value.length > limit) {
        return respond(400, "Please check the form fields and try again.");
      }
      fields[key] = value.trim();
    }
    const { name, email, company, brief, budget, timeline, website } = fields;
    if (!name || !EMAIL_ADDRESS.test(email) || !brief) {
      return respond(400, "Enter your name, a valid email address, and a project brief.");
    }
    if (website) return respond(400, "The submission could not be accepted.");

    try {
      const { success } = await env.CONTACT_LIMIT.limit({
        key: request.headers.get("CF-Connecting-IP") ?? "unknown",
      });
      if (!success) {
        return respond(429, "Too many submissions. Please try again in a minute.", { "Retry-After": "60" });
      }

      const { messageId } = await env.CONTACT_EMAIL.send({
        to: INBOX,
        from: { email: SENDER, name: "Yagya Chauhan website" },
        replyTo: email,
        subject: "New project brief from yagyachauhan.me",
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          `Budget: ${budget || "Not provided"}`,
          `Timeline: ${timeline || "Not provided"}`,
          "",
          "Project brief",
          brief,
        ].join("\n"),
      });
      if (!messageId) throw new Error("Email Service returned no message ID");
      return respond(200);
    } catch (error) {
      console.error("Contact submission failed", error?.code ?? error?.name ?? "unknown");
      return respond(503, "Email delivery is temporarily unavailable. Please try again later.");
    }
  },
};

export default worker;
