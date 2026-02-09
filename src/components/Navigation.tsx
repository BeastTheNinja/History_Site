import { NavLink } from "react-router"


export const Navigation = () => {

    const Links = [
        { name: 'By Date', link: '/by-date' }, 
        { name: 'Today', link: '/' },
        { name: 'Since', link: '/since' },
    ]



    return (

        <>
            <nav className="border-b-20 border-[#1F1F1F]">
                <ul className="flex flex-col justify-center items-center gap-4 py-4 md:flex-row md:gap-12 md:py-0">
                    {Links.map((link) => {
                        return (
                            <li className="pt-2 md:pt-5" key={link.link}>
                                <NavLink
                                    to={link.link}
                                    className="flex text-lg text-white md:my-5 md:text-2xl"
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