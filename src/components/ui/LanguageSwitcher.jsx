import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export default function LanguageSwitcher({ className }) {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={cn("glass rounded-full p-1 flex items-center bg-black/20", className)}>
            <button
                onClick={() => changeLanguage('en')}
                className={cn(
                    "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                    i18n.language === 'en'
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-muted-foreground hover:text-white"
                )}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('uz')}
                className={cn(
                    "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                    i18n.language === 'uz'
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-muted-foreground hover:text-white"
                )}
            >
                UZ
            </button>
        </div>
    );
}
