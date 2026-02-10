interface TextProps {
    text: string;
}


export const Text = ({ text }: TextProps) => {
    // Centered subtitle text in the header box.
    return (
        <>
            <p className="text-sm sm:text-base md:text-xl text-[#C7BD8D] font-bold text-center absolute top-2/3 sm:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Linden_Hill] max-w-88 sm:max-w-120 md:max-w-xl px-4">
                {text}
            </p>

        </>
    )
}