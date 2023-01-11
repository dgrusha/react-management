import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h2 id="nav-title"><Link to="/">MANAGEMENT SYS.</Link></h2>
                <input className="side-menu" type="checkbox" id="side-menu"/>
                <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
                <nav>
                    <ul className="menu">
                        <li className="item"><Link to="emp">emp</Link></li>
                        <li className="item"><Link to="dept">dept</Link></li>
                        <li className="item"><Link to="deptEmp">emp-dept</Link></li>
                        <li className="item"><Link to="agency">agency</Link></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;