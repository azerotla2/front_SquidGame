import '../styles/AboutContainer.css'

export function AboutContainer(){
    return(
        <div className="about-container">
            <div className="about-description-container">
                <div className="icon-and-advantage">
                    <img className="icon-advantage" src='../icons-png/icon-humans.png' alt='иконка'></img>
                    <div className="header-and-description">
                        <h3 className="head-advantage">Количество участников</h3>
                        <p className="description-of-advantage">Соберите команду <span className="pink-text">от 2 до 8 игроков</span></p>
                    </div>
                </div>     
                <div className="icon-and-advantage">
                    <img className="icon-advantage" src='../icons-png/icon-age.png' alt='иконка'></img>
                    <div className="header-and-description">
                        <h3 className="head-advantage">Возраст</h3>
                        <p className="description-of-advantage">Минимальный возраст <span className="pink-text">от 7 лет</span>, но адаптивный сценарий сделает интересную игру, для участников любого возраста</p>
                    </div>
                </div>
                <div className="icon-and-advantage">
                    <img className="icon-advantage" src='../icons-png/icon-clock.png' alt='иконка'></img>
                    <div className="header-and-description">
                        <h3 className="head-advantage">Продолжительность</h3>
                        <p className="description-of-advantage">Экшн-квест длится <span className="pink-text">60 минут</span>, но вы можете продлить ваш праздник на банкетной зоне или с развлекательной программой</p>
                    </div>
                </div>
                <div className="icon-and-advantage">
                    <img className="icon-advantage" src='../icons-png/icon-door.png' alt='иконка'></img>
                    <div className="header-and-description">
                        <h3 className="head-advantage">Никаких посторонних</h3>
                        <div className="description-of-advantage">На протяжении всей игры в пространстве будете находится <span className="pink-text">только вы и ваши гости</span></div>
                    </div>
                </div>
            </div>
            <div className="block-img">
                <img className="photo-security" src='../images/security.webp' alt='фото охранника'></img>
            </div>
        </div>
    )
}