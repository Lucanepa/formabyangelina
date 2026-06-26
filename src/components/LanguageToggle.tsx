import { Button } from '@/components/ui/button'
import { useI18n } from '@/i18n'

export function LanguageToggle() {
  const { lang, toggleLang, t } = useI18n()
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t('actions.toggleLanguage')}
      onClick={toggleLang}
      className="font-medium uppercase tabular-nums"
    >
      {lang === 'de' ? 'EN' : 'DE'}
    </Button>
  )
}
