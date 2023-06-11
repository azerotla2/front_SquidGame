export function GallerryWithDescription(){
    return(
        <div>
        <div className="head-gallery">
            <h2 className="waiting-head">Вас ждут</h2>
            <h3 className="waiting-description">Специальные загадки и 6 заданий в точности повторяющие оригинальный сюжет сериала "Игра в кальмара"</h3>
        </div>
        <div className="gallery-with-description">
            <div class="container-all">
                <div class="image-and-description">
                    <img className="image-for-description" src="./images/prof-animator.jpg" alt=""></img>
                        <span class="title">Профессиональный аниматор</span>
                    <span class="text">Будьте на чеку, никто не знает что можно ожидать от человека в маске</span>
                </div>
                <div class="image-and-description">
                    <img className="image-for-description" src="./images/lanch-zone.jpg" alt=""></img>
                        <span class="title">Просторная банкетная зона</span>
                    <span class="text">Вы можете принести с собой любые продукты и перекусить после игры.
                        Наша компания предоставляет всю одноразовую посуду</span>
                </div>
                <div class="image-and-description">
                    <img className="image-for-description" src="./images/display-brawl.jpg" alt=""></img>
                        <span class="title">Развлекательные программы</span>
                    <span class="text">Если вам хочется продлить праздник. Вы можете выбрать дополнительную программу после квеста</span>
                </div>
                <div class="image-and-description">
                    <img className="image-for-description" src="./images/body-about-computer.jpg" alt=""></img>
                        <span class="title">Современная локация</span>
                    <span class="text">Вы будете испытывать чувство, что вы уже видели это раньше, но нужно быть внимательным. Тайные проходы скрывают много важного</span>
                </div>
            </div> 
        </div>
        </div>
    )
}