import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'forma-ui'

export const Default = () => (
  <Card className="w-80">
    <CardHeader>
      <CardTitle>Reformer session</CardTitle>
      <CardDescription>Tuesday · 09:00 — Studio A</CardDescription>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">
      A grounded, body-led hour focused on alignment, breath and slow control.
    </CardContent>
    <CardFooter>
      <Button>Book a session</Button>
    </CardFooter>
  </Card>
)
