function Header() {
    const headerStyle = {
        backgroundColor: '#000',
        color: '#fff',
        float: 'left',
        width: "100%"
    }

    return (
        <header style={headerStyle} className="header" id="header">
            <div className="menuitems">
                <nav className="navitem">
                    <ul className="navlistitems">
                        <li>Menu1</li>
                        <li>Menu2</li>
                        <li>Menu3</li>
                    </ul>
                </nav>
            </div>
            <div className="titletext">
                <span>Welcome Here</span>
            </div>
            <div className="sideitems">
                <span className="searchbar">Search</span>
                <span className="login">Login/Sign up</span>
            </div>
        </header>
    );
}

export default Header;