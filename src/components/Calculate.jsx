import {useState} from "react";
import '../styles/Calculate.css'

export function Calculate(){

    const ab = event =>{
        let phoneInputs = document.querySelectorAll('input[data-tel-input]');

        let getInputsNumberValue = function(input){
            return input.value.replace(/\D/g, "");
        }
        
        let onPhoneInput = function(e){
            let input = e.target,
                inputNumbersValue = getInputsNumberValue(input);
            let formattedInputValue = "";
            console.log("inputValue", inputNumbersValue);
            let selectionStart = input.selectionStart;

            if(!inputNumbersValue){
                return input.value = "";
            }

            if(input.value.length != selectionStart){
                console.log("red");
                if (e.data && /\D/g.test(e.data)){
                    input.value = inputNumbersValue;
                }
                return;
            }

            if(["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1){
                //Russia
                if (inputNumbersValue[0] == "9"){
                    inputNumbersValue = "7" + inputNumbersValue;
                }
                let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
                formattedInputValue = firstSymbols + " ";

                if (inputNumbersValue.length > 1){
                    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
                }
                if (inputNumbersValue.length >= 5 ){
                    formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
                }

                if (inputNumbersValue.length >= 8){
                    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
                }

                if (inputNumbersValue.length >= 10){
                    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
                }
            } else {
                //not Russian
                formattedInputValue = "+" + inputNumbersValue;
            }
            input.value = formattedInputValue;
        }

        for (let i=0; i<phoneInputs.length; i++){
            let input = phoneInputs[i];
            input.addEventListener("input", onPhoneInput);
        }

    };

    const [countPlayer, setCountPlayer] = useState(3500);
    const [priceZone, setIsZone] = useState(0);
    const [priceProgram, setProgram] = useState(0);

return(
<div> 
    <h2 className="calculate-head">Вы можете расчитать стоимость вашей игры</h2>
    <div className="calculate-container">
        <h3 className='head-for-select'>Пожалуйста, укажите количество участников</h3>
        <p className='description-for-select'>2 – 4 участника = 3500 руб + 700 руб за каждого дополнительного</p>
        <select className="select1" onChange={e => setCountPlayer(+e.target.value)}>
            <option value="3500" selected>Команда от 2 до 4 игроков</option>
            <option value="4200">Команда из 5 игроков</option>
            <option value="4900">Команда из 6 игроков</option>
            <option value="5600">Команда из 7 игроков</option>
            <option value="6300">Команда из 8 игроков</option>
        </select>
        <h3 className='head-for-select'>Нужна ли вам банкетная зона?</h3>
        <p className='description-for-select'>1000 руб / 45 мин</p>
        <select className="old-select" onChange={e => setIsZone(+e.target.value)}>
            <option value="0" selected>Нет, достаточно игры</option>
            <option value="1000">Да, мы хотим остаться в банкетной зоне после квеста</option>
        </select>
        <h3 className='head-for-select'>Нужна ли вам дополнительная программа с аниматором?</h3>
        <p className='description-for-select'>2000 руб / 45 мин</p>
        <select className="old-select" onChange={e => setProgram(+e.target.value)}>
            <option value="0" selected>Нет, нам хватит игры</option>
            <option value="2000">Да, мы хотим узнать про дополнительную программу</option>
        </select>
        <div className="container-name-phone">
            <div>
                <h3>Ваше имя</h3>
                <input className='input-field' type='text'></input>
            </div>
            <div>
            <h3>Телефон</h3>
            <input className="input-field" data-tel-input type="tel" onChange={ab}/>
            </div>   
        </div>
        <h3 className='head-sum'>Стоимость вашего мероприятия составляет</h3>
        <h2 className="sum">{countPlayer+priceProgram+priceZone} рублей</h2>
        <div className='container-for-button'>
            <button class="button-calc-price">Узнать свободное время</button>
        </div>
    </div>
</div>
)
}