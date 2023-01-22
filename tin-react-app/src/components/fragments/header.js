import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function Header() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lng) => {
        console.log(lng)
        i18n.changeLanguage(lng)
    }

    const changeTheme = () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let switchToTheme = currentTheme === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }


    return (
        <header>
            <h2 id="nav-title"><Link to="/">MANAGEMENT SYS.</Link></h2>
                <input className="side-menu" type="checkbox" id="side-menu"/>
                <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
                <nav>
                    <ul className="menu">
                        <li className="item"><Link to="emp">{t('nav.employees')}</Link></li>
                        <li className="item"><Link to="dept">{t('nav.departments')}</Link></li>
                        <li className="item"><Link to="deptEmp">{t('nav.emp-dept')}</Link></li>
                        <li className="item"><Link to="agency">{t('nav.agency')}</Link></li>
                        <li className="item"><Link to="login">Login</Link></li>
                        <li className="item"><button className="btn" onClick={changeTheme}>ColorChange</button></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;