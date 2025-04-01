import { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
  readonly sectionId: string;
  readonly className?: string;
}

export default function SectionContainer({
  children,
  sectionId,
  className = ""
}: Props) {
  return (
    <section id={sectionId} className={`max-w-6xl p-6 mt-16 ${className}`}>
      {children}
    </section>
  );
}
