import '../index.css';

const Avatar = () => {
    return(
        <>
        <div className="relative flex items-center justify-center">
            <img src="https://send.monobank.ua/img/jar_bg.png" alt="jarBackground" className='w-[215px] h-[215px]'/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img className="h-[203px] w-[155px]" src="https://send.monobank.ua/img/jar/uah_50.png"/> 
                <div className="absolute top-[26px] left-[13px]">
                    <img src="https://send.monobank.ua/img/jar/grid.png" className="grid" />
                    <div className="absolute left-[16px] bottom-[147px] font-bold text-[10px] text-[#8e5b5b]">8&nbsp;500&nbsp;000</div>
                    <div className="absolute left-[5px] bottom-[83px] font-bold text-[10px] text-[#8e5b5b]">4&nbsp;250&nbsp;000</div>
                    <div className="absolute left-[8px] bottom-[8px] font-bold text-[10px] text-[#8e5b5b]">0</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Avatar;