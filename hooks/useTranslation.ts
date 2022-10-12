import { useState } from 'react';
import * as translations from '../translations'

const getNestedTranslation = (language, keys) => {
    return keys.reduce((obj, key) => {
        return obj?.[key]
    }, translations[language]);
}

const useTranslation = () => {
    const [language, setLanguage] = useState('en');
    const fallbackLanguage = 'en';

    const translate = key => {
        const keys = key.split(".")

        return (
            getNestedTranslation(language, keys) ??
            getNestedTranslation(fallbackLanguage, keys) ??
            key
        );
    }

    return {
        language,
        setLanguage,
        t: translate,
    };
};

export default useTranslation;