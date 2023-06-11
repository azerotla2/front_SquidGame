import './App.css';
import {useState} from "react";
import './normalize.css';
import { GallerryWithDescription } from "./components/GalleryWithDescription";
import { AboutContainer } from "./components/AboutContainer";
import { MainBlock } from "./components/MainBlock";
import { HeaderContainer } from "./components/HeaderContainer";
import Cleave from 'cleave.js';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'



function App() {

    // constructor(props, context) {
    //     super(props, context);
    //     this.onCreditCardChange = this.onCreditCardChange.bind(this);
    //     this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
    // }


    // onCreditCardChange(event) {
    //     // formatted pretty value
    //     console.log(event.target.value);

    //     // raw value
    //     console.log(event.target.rawValue);
    // }

    // onCreditCardFocus(event) {
    //     // update some state
    // }

    const [countPlayer, setCountPlayer] = useState(3500);
    const [priceZone, setIsZone] = useState(0);
    const [priceProgram, setProgram] = useState(0);
    const [phoneValue, setPhoneValue] = useState();

    return (
        <div className="container">
            <HeaderContainer />
            <MainBlock />
            <div className="about-background">
                <AboutContainer />
                <GallerryWithDescription />
                <h2 className="calculate-head">Вы можете расчитать стоимость вашей игры</h2>
                <div className="calculate-container">
                    <h3 className='head-for-select'>Пожалуйста, укажите количество участников</h3>
                    <p className='description-for-select'>2 – 4 участника = 3500 руб, 700 руб за каждого последующего</p>
                    <select class="select1" onChange={e => setCountPlayer(+e.target.value)}>
                        <option value="3500" selected>Команда от 2 до 4 игроков</option>
                        <option value="4200">Команда из 5 игроков</option>
                        <option value="4900">Команда из 6 игроков</option>
                        <option value="5600">Команда из 7 игроков</option>
                        <option value="6300">Команда из 8 игроков</option>
                    </select>
                    <h3 className='head-for-select'>Нужна ли вам банкетная зона?</h3>
                    <p className='description-for-select'>1000 руб / 45 мин</p>
                    <select class="old-select" onChange={e => setIsZone(+e.target.value)}>
                        <option value="0" selected>Нет, достаточно игры</option>
                        <option value="1000">Да, мы хотим остаться в банкетной зоне после квеста</option>
                    </select>
                    <h3 className='head-for-select'>Нужна ли вам дополнительная программа с аниматором?</h3>
                    <p className='description-for-select'>2000 руб / 45 мин</p>
                    <select class="old-select" onChange={e => setProgram(+e.target.value)}>
                        <option value="0" selected>Нет, нам хватит игры</option>
                        <option value="2000">Да, мы хотим узнать про дополнительную программу</option>
                    </select>
                    <h3>Имя</h3>
                    <input className='inputName' type='text'></input>
                    <h3>Телефон</h3>
                    {/* <PhoneInput
                    className='phone'
                    defaultCountry='RU'
                    placeholder='(999) 999-99-99'
                    value={phoneValue}
                    limitMaxLength='11'
                    onChange={setPhoneValue}/> */}
                    <Cleave placeholder="Enter your credit card number"
                        options={{creditCard: true}} />
                    <input class="input-phone" type="text"/>   
                    <h3 className='head-sum'>Стоимость вашего мероприятия составляет</h3>
                    <h2 className="sum">{countPlayer+priceProgram+priceZone} рублей</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
