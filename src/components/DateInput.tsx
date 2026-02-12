

type DateInputProps = {
    value: string;
    onChange: (value: string) => void;
    onValidDate?: (day: number, month: number) => void;
    headingText?: string;
    descriptionText?: string;
    inputPlaceholder?: string;
    inputPattern?: string;
    inputMode?: "numeric" | "text" | "decimal" | "tel" | "search" | "email" | "url";
    formatValue?: (raw: string) => string;
    isValidValue?: (value: string) => boolean;
    layout?: "flow" | "absolute";
};

export const DateInput = ({
    value,
    onChange,
    onValidDate,
    headingText = "ON:",
    descriptionText = "What happened on this day - Here you can enter a specific date to get only events that happened on this date",
    inputPlaceholder = "DD-MM",
    inputPattern = "^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])$",
    inputMode = "numeric",
    formatValue,
    isValidValue,
    layout = "absolute",
}: DateInputProps) => {
    const formatDDMM = (raw: string) => {
        const digits = raw.replace(/\D/g, "").slice(0, 4);
        if (digits.length <= 2) return digits;
        return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    };

    const isValidDDMM = (v: string) =>
        /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])$/.test(v);

    // Apply the optional formatter/validator or fallback to DD-MM behavior.
    const handleChange = (raw: string) => {
        const formatter = formatValue ?? formatDDMM;
        const validator = isValidValue ?? isValidDDMM;
        const next = formatter(raw);
        onChange(next);

        if (validator(next) && onValidDate) {
            const [day, month] = next.split("-").map(Number);
            onValidDate(day, month);
        }
    };

    const isFlow = layout === "flow"
    const inputWrapperClass = isFlow
        ? "flex flex-wrap items-baseline justify-center gap-3 md:flex-nowrap md:items-center"
        : "flex flex-wrap items-baseline justify-center gap-3 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-25 md:gap-4"
    const descriptionClass = isFlow
        ? "text-base sm:text-xl md:text-3xl font-normal text-[#695E48] dark:text-[#C7BD8D] font-['Linden_Hill'] max-w-[90%] sm:max-w-[70%] text-center px-4"
        : "text-base sm:text-xl md:text-3xl font-normal text-[#695E48] dark:text-[#C7BD8D] font-['Linden_Hill'] max-w-[90%] sm:max-w-[70%] text-center px-4 md:absolute md:top-3/4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"

    return (
        <>
            <div className={inputWrapperClass}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl text-[#1F1F1F] dark:text-[#C7BD8D] font-normal font-['Limelight']">{headingText}</h1>
                <input
                    type="text"
                    inputMode={inputMode}
                    placeholder={inputPlaceholder}
                    pattern={inputPattern}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className={`w-32 sm:w-40 ${isFlow ? "md:w-90" : "md:w-full"} text-4xl sm:text-6xl md:text-8xl font-normal font-['Limelight'] underline text-[#1F1F1F] dark:text-[#C7BD8D] bg-transparent border-none focus:outline-none placeholder:text-[#695E48] dark:placeholder:text-[#C7BD8D]/70`}
                />
            </div>
            <p className={descriptionClass}>
                {descriptionText}
            </p>
        </>
    )
}