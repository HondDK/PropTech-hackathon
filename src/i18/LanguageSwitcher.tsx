import React from "react";
import {useTranslation} from "react-i18next";
import MainButton from "../components/UI/MainButton";

const LanguageSwitcher = () => {
    const {i18n, t} = useTranslation();

    const handleChangeLanguage = (language:string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={"language_btn"}>
            <MainButton onClick={() => handleChangeLanguage("kz")}>{t('kz')}</MainButton>
            <MainButton onClick={() => handleChangeLanguage("ru")}>{t('ru')}</MainButton>
            <MainButton onClick={() => handleChangeLanguage("en")}>{t('en')}</MainButton>
        </div>
    );
};

export default LanguageSwitcher;
