import Link from "next/link";
export function NextChapter({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <section className="container next-chapter">
      <p className="eyebrow">{label}</p>
      <Link href={href}>
        <h2>{title}</h2>
        <span className="chapter-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <p className="mono muted">NEXT CHAPTER / START A CONVERSATION</p>
    </section>
  );
}
