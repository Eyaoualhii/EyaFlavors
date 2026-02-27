import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { useState, useRef, useEffect } from 'react';

const languages = [
    { code: 'en', name: 'English', flag: 'emojione:flag-for-united-kingdom' },
    { code: 'fr', name: 'Français', flag: 'emojione:flag-for-france' },
    { code: 'ar', name: 'العربية', flag: 'emojione:flag-for-tunisia' }
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border hover:border-brand-accent transition-all text-[10px] font-bold tracking-widest uppercase text-brand-dark"
            >
                <Icon icon={currentLanguage.flag} width={16} />
                <span>{currentLanguage.code}</span>
                <Icon icon="lucide:chevron-down" width={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-brand-border shadow-xl rounded-lg py-2 min-w-[140px] z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center justify-between px-4 py-2 text-xs hover:bg-brand-grayBg transition-colors ${i18n.language === lang.code ? 'text-brand-accent font-bold' : 'text-brand-dark'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon icon={lang.flag} width={16} />
                                <span>{lang.name}</span>
                            </div>
                            {i18n.language === lang.code && <Icon icon="lucide:check" width={12} />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
