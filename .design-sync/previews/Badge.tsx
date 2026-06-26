import { Badge } from 'forma-ui'

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="brand">Member</Badge>
    <Badge variant="success">Confirmed</Badge>
    <Badge variant="warning">Pending</Badge>
    <Badge variant="destructive">Cancelled</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
)
