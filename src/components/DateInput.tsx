

type DateInputProps = {
    value: string;
    onChange: (value: string) => void;
    onValidDate?: (day: number, month: number) => void;
};

export const DateInput = ({ value, onChange, onValidDate }: DateInputProps) => {
    const formatDDMM = (raw: string) => {
        const digits = raw.replace(/\D/g, "").slice(0, 4);
        if (digits.length <= 2) return digits;
        return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    };

    const isValidDDMM = (v: string) =>
        /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])$/.test(v);

    const handleChange = (raw: string) => {
        const next = formatDDMM(raw);
        onChange(next);

        if (isValidDDMM(next) && onValidDate) {
            const [day, month] = next.split("-").map(Number);
            onValidDate(day, month);
        }
    };

    return (
        <>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-70 -translate-y-22 text-8xl text-[#C7BD8D] font-normal font-['Limelight']" >ON:
            </h1><input
                type="text"
                inputMode="numeric"
                placeholder="DD-MM"
                pattern="^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])$"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                className="absolute top-1/2 left-1/2 transform -translate-x-20 -translate-y-25 text-8xl font-normal font-['Limelight'] underline text-[#C7BD8D] "
            />
            <p className="absolute top-3/4 left-1/2 transform -translate-x-60 -translate-y-1/2 text-3xl font-normal text-[#C7BD8D] font-['Linden_Hill']">What happened on this day - Here you can enter a specific date to get only events that happened on this date</p>
        </>
    )
}