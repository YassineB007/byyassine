/**
 * Visual rhythm between sections — purely decorative.
 */
export function SectionDivider() {
  return (
    <div className="section-flair" aria-hidden>
      <span className="section-flair__line section-flair__line--l" />
      <span className="section-flair__dot section-flair__dot--indigo" />
      <span className="section-flair__glyph">///</span>
      <span className="section-flair__dot section-flair__dot--cyan" />
      <span className="section-flair__line section-flair__line--r" />
    </div>
  );
}
