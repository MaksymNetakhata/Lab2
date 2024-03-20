import { useState } from 'react';
import '../index.css'
const Stats = ({sum}) => {
    
    return(
        <>
        <div className="font-[500] text-[15px] mt-[8px] ">На 35 морських дронів. Втопимо флот рашці разом!</div>
        <div className="flex flex-row bg-white rounded-[16px] justify-center mb-[12px] mt-[12px]">
            <div className="flex flex-row pl-[20px] pr-[20px] text-left border border-solid border-gray-300 border-r-[1px] border-l-[0px] border-t-[0px] border-b-[0px] font-[500] text-[16px] mt-[12px] mb-[12px] leading-6">
                <img src="https://send.monobank.ua/img/collected.svg" className="w-[24px] h-[24px] mr-[16px] mt-[12px]" />
                <div className="">
                    <div className="font-[400] text-[14px] text-[#808080]">Накопичено</div>
                    <div className="stats-data-value">{sum}&nbsp;₴</div>
                </div>
            </div>
            <div className="flex flex-row pl-[20px] pr-[20px] text-left font-[500] text-[16px] mt-[12px] mb-[12px] leading-6">
                <img src="https://send.monobank.ua/img/target.svg" className="w-[24px] h-[24px] mr-[16px] mt-[12px]" />
                <div className="stats-data-text-container">
                    <div className="font-[400] text-[14px] text-[#808080]">Ціль</div>
                    <div className="stats-data-value">8&nbsp;500&nbsp;000&nbsp;₴</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Stats;