import { Moon, Sun } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useT } from '@/i18n'

export function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const t = useT()
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t('actions.toggleTheme')}
      onClick={onToggle}
    >
      {dark ? <Sun className="size-4" weight="bold" /> : <Moon className="size-4" weight="bold" />}
    </Button>
  )
}
