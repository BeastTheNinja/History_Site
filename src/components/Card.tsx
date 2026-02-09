interface CardProps {
    title: string;
    description: string;
    link?: string;
}

export const Card = ({ title, description, link }: CardProps) => {
    return (
        <article className="rounded-md border border-amber-200/40 bg-neutral-900/70 p-4 text-neutral-100 shadow-sm">
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-200">
                Year: {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                {description}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-amber-200 hover:text-amber-100"
                >
                    Read more
                </a>
            )}
        </article>
    )
}