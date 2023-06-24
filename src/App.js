import './App.css';
import './styles/AboutContainer.css';
import {useState} from "react";
import './normalize.css';
import { GallerryWithDescription } from "./components/GalleryWithDescription";
import { AboutContainer } from "./components/AboutContainer";
import { MainBlock } from "./components/MainBlock";
import { HeaderContainer } from "./components/HeaderContainer";
import { Calculate } from './components/Calculate';
import { Gallery } from './components/Gallery';


function App() {

    // function pop() {
    //     <div id="popup" className='popup'>
    //         <div className='popup-body'>
    //             <div className='popup-content'>
    //                 <a href="##" className='popup-close'>X</a>
    //                 <img src="./images/display-brawl.jpg"></img>
    //             </div>
    //         </div>
    //     </div>
    // }

    return (
        <div className="container">
            <HeaderContainer />
           
            <MainBlock />
            <div className="about-background">
                <AboutContainer />
                <GallerryWithDescription />
                <Calculate /> 
                <Gallery />
                <center><a href="https://omsk.mir-kvestov.ru/quests/ohota-v-temnote-igra-v-kalmara" target="_blank">
    <img src="https://omsk.mir-kvestov.ru/widgets/7439/img" width="210" alt="Отзывы на Квест в реальности Игра в кальмара (Охота в темноте)" title="Отзывы на Квест в реальности Игра в кальмара (Охота в темноте)"/>
</a></center>
            </div>
        </div>
    );
}

export default App;
