import Avatar from './Avatar'
import Stats from './Stats'
import '../index.css'

const FirstHalf = ({sum}) => {
    return (
        <>
        <img src="https://send.monobank.ua/img/logo_short.svg" alt="monoLogo" className='mt-[42px] mx-auto mb-[24px]'/>
        <div className="w-auto mt-[80px] relative mb-[20px]">
            <Avatar />
        </div>
        <div className="font-[500] text-[14px] leading-4">
        <span>monobank, UNITED24, Стерненко та Лаченков</span>
        </div>
        <div className="font-[900] text-[22px]">
        <span>Морський бій. Твій хід</span>
        </div>
        <div className="mt-[4px] flex flex-col items-center">
        <Stats sum={sum}/>
        </div>
        </>
    )
}

export default FirstHalf;