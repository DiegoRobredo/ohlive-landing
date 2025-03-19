import { ReactNode } from "react"

interface Props {
  readonly children: ReactNode,
  readonly sectionId: string
}

export default function SectionContainer({ children, sectionId }: Props) {
  return (
    <section id={sectionId} className="max-w-6xl">
      {children}
    </section>
  )
};