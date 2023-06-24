import '../styles/GalleryWithDescription.css'

export function GallerryWithDescription(){
    return(
        <div>
        <div className="head-gallery">
            <h2 className="waiting-head">Вас ждут</h2>
            <h3 className="waiting-description">Специальные загадки и 6 заданий в точности повторяющие оригинальный сюжет сериала "Игра в кальмара"</h3>
        </div>
        <div className="gallery-with-description">
            <div className="image-and-description">
                <img className="image-for-description" src="../images/description/prof-animator.webp" alt=""></img>
                    <span className="title">Профессиональный аниматор</span>
                <span class="text">Будьте на чеку, никто не знает что можно ожидать от человека в маске</span>
            </div>
            <div className="image-and-description">
                <img className="image-for-description" src="../images/description/lanch-zone.webp" alt=""></img>
                    <span className="title">Просторная банкетная зона</span>
                <span className="text">Вы можете принести с собой любые продукты и перекусить после игры.
                    Наша компания предоставляет всю одноразовую посуду</span>
            </div>
            <div className="image-and-description">
                <img className="image-for-description" src="../images/description/display-brawl.webp" alt=""></img>
                    <span className="title">Развлекательные программы</span>
                <span className="text">Если вам хочется продлить праздник. Вы можете выбрать дополнительную программу после квеста</span>
            </div>
            <div className="image-and-description">
                <img className="image-for-description" src="../images/description/body-about-computer.webp" alt=""></img>
                    <span className="title">Современная локация</span>
                <span className="text">Вы будете испытывать чувство, что вы уже видели это раньше, но нужно быть внимательным. Тайные проходы скрывают много важного</span>
            </div>
        </div>
        </div>
    )
}