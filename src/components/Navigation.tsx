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
            <nav className="border-b-20 border-[#E6D9C4] dark:border-[#1F1F1F]">
                <ul className="flex flex-col justify-center items-center gap-4 py-4 md:flex-row md:gap-12 md:py-0">
                    {Links.map((link) => {
                        return (
                            <li className="pt-2 md:pt-5" key={link.link}>
                                <NavLink
                                    to={link.link}
                                    className={({ isActive }) =>
                                        `flex text-lg md:my-5 md:text-2xl ${
                                            isActive
                                                ? "text-[#695E48] underline underline-offset-8 dark:text-[#FFE9BF]"
                                                : "text-[#3B2A22] hover:text-[#695E48] dark:text-[#C7BD8D] dark:hover:text-[#FFE9BF]"
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