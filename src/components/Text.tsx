interface TextProps {
    text: string;
}


export const Text = ({ text }: TextProps) => {
    // Centered subtitle text in the header box.
    return (
        <>
            <p className="text-sm sm:text-base md:text-xl text-[#695E48] dark:text-[#C7BD8D] font-bold text-center font-[Linden_Hill] max-w-88 sm:max-w-120 md:max-w-xl px-4 md:absolute md:top-3/4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                {text}
            </p>

        </>
    )
}