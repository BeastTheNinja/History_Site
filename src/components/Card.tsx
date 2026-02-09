interface CardProps {
    description: string;
    link?: string;
}

export const Card = ({ description, link }: CardProps) => {
    return (
        <article className="px-15">
            <p className="justify-center  text-2xl font-normal font-['Linden_Hill'] text-neutral-200">
                {description}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="justify-center  text-2xl font-normal font-['Linden_Hill'] underline tracking-[0.2em] text-amber-200 hover:text-amber-100"
                >
                    Read more
                </a>
            )}
        </article>
    )
}