import Hero from '../assets/img/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg'

export const Header = () => {

    return (

        <div className="relative">
            <img
                className="w-full h-60 sm:h-70 md:h-200 bg-zinc-800/20"
                src={Hero}
                alt="Picture with black and white Pictures"
            />
            <div className="absolute top-0 left-0 border-t-48 border-r-48 border-t-[#C7BD8D] border-r-transparent md:border-t-90 md:border-r-90" />
            <div className="absolute top-0 right-0 border-t-48 border-l-48 border-t-[#C7BD8D] border-l-transparent md:border-t-90 md:border-l-90" />
        </div>

    )
}