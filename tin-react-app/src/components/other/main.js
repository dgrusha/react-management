import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";


function MainPage() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <main>
            <h2>{t('main-page.content')}</h2>
            <p>Lorem ipsum text should be here</p>
            <br/>
            <button className="btn2" onClick={() => handleLanguageChange('pl')}>PL</button>
            <button className="btn2" onClick={() => handleLanguageChange('en')}>EN</button>
        </main>
    );
}

export default MainPage;