interface TitleProps {
    Title: string;
}


export const Title = ({ Title }: TitleProps) => {
    // Centered title text in the header box.
    return (
        <>
            <p className="text-3xl sm:text-4xl md:text-6xl text-[#3B2A22] dark:text-[#C7BD8D] font-bold text-center absolute top-1/4 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Limelight] px-4">
                {Title}
            </p>

        </>
    )
}