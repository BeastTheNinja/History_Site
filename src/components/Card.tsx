interface CardProps {
    description: string;
    link?: string;
}

export const Card = ({ description, link }: CardProps) => {
    // Optional source link rendered when provided.
    return (
        <article className="px-4 md:px-12">
            <p className="text-lg font-normal font-['Linden_Hill'] text-[#3B2A22] dark:text-neutral-200 md:text-2xl">
                {description}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-normal font-['Linden_Hill'] uppercase tracking-[0.2em] text-amber-700 hover:text-amber-600 dark:text-amber-200 dark:hover:text-amber-100 md:text-lg"
                >
                    Read more
                </a>
            )}
        </article>
    )
}