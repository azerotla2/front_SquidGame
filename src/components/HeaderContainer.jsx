import '../styles/Header.css'
import '../styles/Gallery.css'

export function HeaderContainer(){
    return(
        <div className="header">
            <nav className="nav">
                <ul className="logo-game_name">
                    <a className="logo">
                        <img className="logo-img" src="../icons-png/logo.png" alt="логотип"></img>
                    </a>
                    <button className="select-kvest">
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
                        href="#popup">Фото</a>    
                    </li>
                    <li className="menu-item">
                        <a className="menu-link"
                        href="#">Контакты</a>    
                    </li>
                </ul>
                <button className="reserve-game">
                    Забронировать игру
                </button>
            </nav>
    </div>
    )
}