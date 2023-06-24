import "../styles/Gallery.css"

export function Gallery(){
    return(
        <section className='gallery'>
        <div className="gallery-list">
            <a href="../images/gallery/gallery1.webp" className='gallery-item'>
                <div className='gallery-item-hover'>Посмотреть</div>
                <img src="../images/gallery/gallery1.webp"></img>
            </a>
            <a href="../images/gallery/gallery2.webp" className='gallery-item'>
                <div className='gallery-item-hover'>Посмотреть</div>
                <img src="../images/gallery/gallery2.webp"></img>
            </a>
            <a href="../images/gallery/gallery3.webp" className='gallery-item'>
                <div className='gallery-item-hover'>Посмотреть</div>
                <img src="../images/gallery/gallery3.webp"></img>
            </a>
            <a href="../images/gallery/gallery4.webp" className='gallery-item'>
                <div className='gallery-item-hover'>Посмотреть</div>
                <img src="../images/gallery/gallery4.webp"></img>
            </a>
            <a href="../images/gallery/gallery5.webp" className='gallery-item'>
                <div className='gallery-item-hover'>Посмотреть</div>
                <img src="../images/gallery/gallery5.webp"></img>
            </a>
            <a href="../images/gallery/gallery6.webp" className='gallery-item'>
                <div className='gallery-item-hover'>Посмотреть</div>
                <img src="../images/gallery/gallery6.webp"></img>
            </a>
        </div>
        <div id="popup" className='popup'>
                    <a href='##' className='popup-area'></a>
                    <div className='popup-body'>
                        <div className='popup-content'>
                            <a href="##" className='popup-close'>X</a>
                            <img src="../images/gallery/gallery1.webp" className="img-gal"></img>
                        </div>
                    </div>
                </div>
    </section>
    )
}