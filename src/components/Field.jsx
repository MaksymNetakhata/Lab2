import "../index.css";
import FirstHalf from './FirstHalf';
import SecondHalf from './SecondHalf';
import Footer from './Footer';
import { useState } from 'react';

export function Field() {
    const [sum, setSum] = useState(0);
    return (
        <div className="h-screen w-screen flex items-center justify-center">
        <div className="min-w-[990px] flex flex-col min-h-[680px]">
            <div className="rounded-3xl overflow-hidden flex flex-row min-h-[680px] mb-[16px] mt-[16px]">
                <div className='flex flex-col text-center w-1/2 bg-slate-100'>
                <FirstHalf sum ={sum}/>
                </div>
                <div className='flex flex-col w-1/2 bg-white justify-center items-center'>
                    <SecondHalf sum={sum} setSum={setSum}/>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <Footer></Footer>
            </div>
        </div>
        </div>
    )
}