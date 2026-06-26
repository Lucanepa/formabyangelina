import { Toggle } from 'forma-ui'

export const Default = () => (
  <div className="flex items-center gap-2">
    <Toggle aria-label="Bold" className="font-semibold">B</Toggle>
    <Toggle aria-label="Italic" defaultPressed className="italic">I</Toggle>
    <Toggle aria-label="Underline" className="underline">U</Toggle>
  </div>
)
