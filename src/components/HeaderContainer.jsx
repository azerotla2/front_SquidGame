export function HeaderContainer(){
    return(
        <header className="header">
        <div className="container-header">
            <nav className="nav">
                <ul className="logo-game_name">
                    <a className="logo">
                        <img className="logo-img" src="./logo.png" alt="логотип"></img>
                    </a>
                    <button className="select-kvest" onClick="#">
                        <span>
                            Игра в кальмара
                        </span>
                    </button>
                </ul>
                <ul className="menu">
                    <li className="menu-item">
                        <a className="menu-link"
                        href="#">Об игре</a>    
                    </li>
                    <li className="menu-item">
                        <a className="menu-link"
                        href="#">Фото</a>    
                    </li>
                    <li className="menu-item">
                        <a className="menu-link"
                        href="#">Контакты</a>    
                    </li>
                </ul>
                <button className="reserve-game" onClick="#">
                    Забронировать игру
                </button>
            </nav>
        </div>
    </header>
    )
}