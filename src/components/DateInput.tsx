

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

    return (
        <>
            <div className="absolute top-1/2 left-1/2 flex items-baseline gap-3 transform -translate-x-1/2 -translate-y-25 sm:gap-4">
                <h1 className="text-4xl sm:text-6xl md:text-8xl text-[#C7BD8D] font-normal font-['Limelight']">{headingText}</h1>
                <input
                    type="text"
                    inputMode={inputMode}
                    placeholder={inputPlaceholder}
                    pattern={inputPattern}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className="w-full text-4xl sm:text-6xl md:text-8xl font-normal font-['Limelight'] underline text-[#C7BD8D] bg-transparent border-none focus:outline-none"
                />
            </div>
            <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base sm:text-xl md:text-3xl font-normal text-[#C7BD8D] font-['Linden_Hill'] max-w-[90%] sm:max-w-[70%] text-center px-4">
                {descriptionText}
            </p>
        </>
    )
}