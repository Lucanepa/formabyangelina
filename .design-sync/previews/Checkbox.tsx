import { Checkbox, Label } from 'forma-ui'

export const WithLabel = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <Checkbox id="reminders" defaultChecked />
      <Label htmlFor="reminders">Send me session reminders</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="waitlist" />
      <Label htmlFor="waitlist">Add me to the waitlist</Label>
    </div>
  </div>
)
