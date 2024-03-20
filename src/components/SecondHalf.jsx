import React, { useState } from 'react';
import '../index.css'

const SecondHalf = ({sum, setSum}) => {
    const [amount, setAmount] = useState(0);
    const [opacity, setOpacity] = useState(0.4);
    const [color, setColor] = useState('black');
    const [error, setError] = useState('');

    const sumUp = () => {
        setSum(prevSum => prevSum + parseFloat(amount));
    };
    const handleClick = (x) => {
        const newValue = parseFloat(amount) + x;
        setAmount(newValue);
        setOpacity(1);
        setColor('black');
        setError('');
    };
    const handleContentEditableInput = (event) => {
        const inputText = event.target.textContent;
        const filteredText = inputText.replace(/\D/g, '');
        event.target.textContent = filteredText;
        setAmount(filteredText);

        const inputValue = parseInt(event.target.textContent);
        if (inputValue < 10) {
            setColor('#b30953');
            setOpacity(0.5);
            setError('Сума повинна бути від 10 ₴ до 29 999 ₴');
        } else {
            setColor('black');
            setOpacity(1);
            setError('');
        }

    };
    const styles = { 
        color: color,
        opacity: opacity
     };

    return(
        <>
        <div className="relative p-6 rounded-3xl w-[394px] mb-[32px] mt-[42px]">
            <div className="flex flex-row font-[600] text-center text-[14px] justify-center mb-[12px]">
                Сума поповнення
                <img src="https://send.monobank.ua/img/money.png" className="w-[16px] h-[16px] mb-[-3px] ml-[5px]" />
            </div>
            <div className='money-input-container'>
                <div className="justify-center font-[700] text-[48px] text-center flex pt-[20px] pb-[20px] opacity-0.4" style={styles}>
                    <div className="money-input-contenteditable" contentEditable="true" inputMode="decimal" onInput={handleContentEditableInput}>{amount}</div>
                    <div className="money-input-trailing">&nbsp;₴</div>
                </div>
                <div className="mt-[12px] mb-[18px] ml-[16px] mr-[16px] font-[400] text-[12px] text-[#808080] text-center">{error}</div>
                <div className="flex flex-row  w-full">
                    <div className="border border-solid border-gray-300 rounded-[16px] ml-[8px] mr-[8px] min-h-[40px] flex flex-1 flex-col justify-center items-center cursor-pointer
                    " onClick={() => handleClick(100)}>
                        <div className="font-[500] text-[16px] leading-6" id="oneHundred">+100&nbsp;₴</div>
                    </div>
                    <div className="border border-solid border-gray-300 rounded-[16px] ml-[8px] mr-[8px] min-h-[40px] flex flex-1 flex-col justify-center items-center" id="fiveHundred" onClick={() => handleClick(500)}>
                        <div className="font-[500] text-[16px] leading-6">+500&nbsp;₴</div>
                    </div>
                    <div className="border border-solid border-gray-300 rounded-[16px] ml-[8px] mr-[8px] min-h-[40px] flex flex-1 flex-col justify-center items-center" id="oneThousand" onClick={() => handleClick(1000)}>
                        <div className="font-[500] text-[16px] leading-6">+1000&nbsp;₴</div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className=''>
            <input type="text" className='w-[340px] h-[58px] mb-[16px] leading-6 border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px]' autoComplete='cc-name' placeholder="Ваше ім'я (необов'язково)"/>
        </div>
        <div className=''>
            <input type="text" className='w-[340px] h-[58px] mb-[16px] leading-6 border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px]' autoComplete='cc-name' placeholder="Коментар (необов'язково)"/>
        </div>
        <div className="bg-black w-[340px] h-[48px] mb-[16px] cursor-pointer rounded-[8px] flex items-center justify-center" onClick={() => sumUp()}>
            <img src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay" className="monopay-logo"/>
        </div>

        <div className="bg-black w-[340px] h-[48px] mb-[16px] cursor-pointer rounded-[8px] flex items-center justify-center" onClick={() => sumUp()}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" className="w-14 h-7"/>
        </div>
        <div className="w-[340px] h-[75px]">
            <div className="w-[340px] h-[1px] mt-[16px] mb-[8px] border border-solid border-gray-300 border-t-[0px]"></div>
            <div className="flex flex-row justify-center">
                <img src="https://send.monobank.ua/img/card.svg" alt="card logo"/>
                <div className="font-[600] text-[14px] p-[8px] cursor-pointer text-[#e85e5b] leading-6">Оплатити карткою</div>
            </div>
        </div>

        </>
    )
}

export default SecondHalf;