interface TitleProps {
    Title: string;
}


export const Title = ({ Title }: TitleProps) => {
    // Centered title text in the header box.
    return (
        <>
            <p className="text-3xl sm:text-4xl md:text-6xl text-[#695E48] dark:text-[#C7BD8D] font-bold text-center font-[Limelight] px-4 md:absolute md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                {Title}
            </p>

        </>
    )
}