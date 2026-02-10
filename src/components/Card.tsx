import { LiaBookOpenSolid } from "react-icons/lia";

interface CardProps {
    description: string;
    link?: string;
}

export const Card = ({ description, link }: CardProps) => {
    // Optional source link rendered when provided.
    return (
        <article className="px-4 sm:px-6 md:px-10 lg:px-12">
            <p className="text-base font-normal font-['Linden_Hill'] text-[#695E48] dark:text-[#F5F5F5] sm:text-lg md:text-2xl">
                {description}
            </p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-normal font-['Linden_Hill'] uppercase tracking-[0.2em] text-[#D29E62] hover:text-[#1F1F1F] dark:text-[#FFE9BF] dark:hover:text-[#D29E62] sm:text-sm md:text-base lg:text-lg"
                >
                    Read more<LiaBookOpenSolid className="inline-block ml-2" />
                </a>
            )}
        </article>
    )
}