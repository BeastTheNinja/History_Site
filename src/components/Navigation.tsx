import { NavLink } from "react-router"


export const Navigation = () => {

    // Primary navigation links.
    const Links = [
        { name: 'By Date', link: '/by-date' },
        { name: 'Today', link: '/' },
        { name: 'Since', link: '/since' },
    ]



    return (

        <>
            <nav className="border-b-20 border-[#FFE9BF] dark:border-[#1F1F1F]"> <ul className="flex flex-col justify-center items-center gap-4 py-4 md:flex-row md:gap-12 md:py-0"> {Links.map((link) => {
                return (
                <li className="pt-2 md:pt-50" key={link.link}> 
                <NavLink to={link.link}
                    className={({ isActive }) =>
                        `flex text-2xl sm:text-3xl md:text-4xl font-normal font-['Linden_Hill'] md:my-5 ${isActive
                            ? "text-[#1F1F1F] underline underline-offset-8 dark:text-[#FFE9BF]"
                            : "text-[#695E48] hover:text-[#D29E62] dark:text-[#C7BD8D] dark:hover:text-[#D29E62]"
                        }`
                    }
                    end={link.link === "/"}>
                    {link.name}
                </NavLink>
                </li>
                )
            })}
            </ul>
            </nav>
        </>
    )
}