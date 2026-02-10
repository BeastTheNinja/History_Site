interface CardProps {
    description: string;
    link?: string;
}

export const Card = ({ description, link }: CardProps) => {
    // Optional source link rendered when provided.
    return (
        <article className="px-4 md:px-12">
            <p className="text-lg font-normal font-['Linden_Hill'] text-[#695E48] dark:text-[#F5F5F5] md:text-2xl">
                {description}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-normal font-['Linden_Hill'] uppercase tracking-[0.2em] text-[#D29E62] hover:text-[#1F1F1F] dark:text-[#FFE9BF] dark:hover:text-[#D29E62] md:text-lg"
                >
                    Read more
                </a>
            )}
        </article>
    )
}