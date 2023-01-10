import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h2 id="nav-title"><Link to="/">MANAGEMENT SYS.</Link></h2>
                <input className="side-menu" type="checkbox" id="side-menu"/>
                <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
                <nav>
                    <ul className="menu">
                        <li className="item"><a href="emp/emp.html">emp</a></li>
                        <li className="item"><a href="dept/dept.html">dept</a></li>
                        <li className="item"><a href="dept-emp/dept-emp.html">emp-dept</a></li>
                        <li className="item"><a href="agency/agency.html">agency</a></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;