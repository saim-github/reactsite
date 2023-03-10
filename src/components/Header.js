function Header() {
    return (
        <header className="titlebar bg-lb" id="titlebar">
            <ul className="m0 p0">
                <li><a href="#home"><i className="fa fa-home"></i></a></li>
                <li className="titletext">Welcome to the WorkSite</li>
                <li><a href="#search"><i className="fa fa-search"></i></a></li>
            </ul>
        </header>
    );
}

export default Header;