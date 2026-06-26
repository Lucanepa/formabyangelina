# Forma by Angelina — Warm Clay UI

A shadcn-style React primitive set, themed in **Warm Clay** (grounded, body-led, recovery feel). Every component is a real, importable React component on `window.FormaUI`; style your own layout with the Tailwind utility classes below. Build calm, spacious, on-brand UI — booking flows, schedules, session cards.

## Setup & wrapping
- **Import** components from `window.FormaUI` (e.g. `FormaUI.Button`, `FormaUI.Card`). Compound components expose their parts on the same global: `Card`+`CardHeader`+`CardTitle`+`CardDescription`+`CardContent`+`CardFooter`; `Dialog`+`DialogTrigger`+`DialogContent`+…; same pattern for `AlertDialog`, `Drawer`, `Sheet`, `Popover`, `DropdownMenu`, `Select`, `Command`. Always compose Root → Trigger → Content.
- **Tooltips** need a provider: wrap the tree (or the tooltip) in `<TooltipProvider>`, then `Tooltip`+`TooltipTrigger`+`TooltipContent`.
- **No theme provider is required** — tokens live in `:root`. For **dark mode**, put `class="dark"` on an ancestor; every token flips to a warm-espresso scheme automatically.
- **Font**: Inter ships with the system (`font-sans`). Don't import another font.

## Styling idiom — semantic token utilities
Style with these classes (NOT raw hex). They map to the Warm Clay palette and auto-adapt to dark mode:

| Utility (bg-/text-/border-) | Role | Colour |
|---|---|---|
| `background` / `foreground` | page surface · body text | cream `#F6F1E9` · espresso `#38312B` |
| `card` / `card-foreground` | cards, panels | warm white · espresso |
| `primary` / `primary-foreground` | primary actions, CTAs | **clay `#C2674A`** · cream |
| `secondary` / `secondary-foreground` | secondary surfaces/buttons | sand `#E0D2BF` · espresso |
| `muted` / `muted-foreground` | muted fills · secondary text | warm tint · stone |
| `accent` / `accent-foreground` | hover / selected states | **soft sage `#7E8C6A`** |
| `destructive` | errors, destructive actions | red |
| `border` / `input` | borders · field outlines | warm sand |
| `ring` | focus ring | clay |

Examples: `bg-primary text-primary-foreground`, `bg-card border border-border`, `text-muted-foreground`, `hover:bg-accent`, `focus-visible:ring-ring`.

**Brand scales** (for accents beyond the semantic roles): `bg-brand-{50…950}` (clay), `bg-sand-{50…900}` (warm neutral), `bg-sage-{50…900}` (grounding green) — with `text-*` and `border-*` variants.

**Radius is soft** by design: `rounded-lg` ≈ 0.75rem; prefer `rounded-lg`/`rounded-xl` on cards and surfaces for the grounded, calm feel. Use generous spacing.

## Where the truth lives
Read **`styles.css`** for the full token + utility set, and each component's **`<Name>.prompt.md`** (usage) and **`<Name>.d.ts`** (props) before composing it.

## Idiomatic example — a booking card
```tsx
const { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } = window.FormaUI

export default function SessionCard() {
  return (
    <Card className="w-80 rounded-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Reformer flow</CardTitle>
          <Badge variant="success">2 spots left</Badge>
        </div>
        <CardDescription>Tuesday · 09:00 — Studio A</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        A grounded, body-led hour focused on alignment, breath and slow control.
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Book a session</Button>
        <Button variant="outline">Details</Button>
      </CardFooter>
    </Card>
  )
}
```
