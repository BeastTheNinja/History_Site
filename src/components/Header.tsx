import Hero from '../assets/img/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg'

export const Header = () => {

    return (

        <>
            <div
                className='
            relative'
            >
                <img
                    className='
                w-full 
                h-200 
                bg-zinc-800/20 '
                    src={Hero}
                    alt="Picture with black and white Pictures"
                />
            </div>
            <div
                className="
                absolute 
                top-0 
                left-0 
                border-t-90 
                border-r-90 
                border-t-[#C7BD8D] 
                border-r-transparent">

            </div>
            <div
                className='
                absolute 
                top-0 
                right-0 
                border-t-90 
                border-l-90 
                border-t-[#C7BD8D] 
                border-l-transparent'
            >
            </div>
        </>

    )
}