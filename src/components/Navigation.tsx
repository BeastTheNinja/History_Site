import { NavLink } from "react-router"


export const Navigation = () => {

    const Links = [
        { name: 'Today', link: '/' },
        { name: 'By Date', link: '/by-date' },
        { name: 'Since', link: '/since' },
    ]



    return (

        <>
            <nav className="border-b-20 border-[#1F1F1F] ">
                <ul className="flex gap-50 justify-center">
                    {Links.map((link) => {
                        return (
                            <li className="pt-5" key={link.link}>
                                <NavLink
                                    to={link.link}
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