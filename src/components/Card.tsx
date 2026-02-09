interface CardProps {
    title: string;
    description: string;
    link?: string;
}

export const Card = ({ title, description, link }: CardProps) => {
    return (
        <article>
            <h2 className="justify-center  text-2xl font-normal font-['Linden_Hill'] text-amber-200">
                Year: {title}
            </h2>
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