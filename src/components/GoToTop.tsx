import { BsArrowUpCircle } from "react-icons/bs"

export const GoToTop = () => {


    return (
        <>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className=" fixed bottom-4 right-4 bg-[#1F1F1F] text-[#F5F5F5] px-4 py-2 rounded-full shadow-lg hover:bg-[#151515] dark:bg-[#C7BD8D] dark:text-[#151515] dark:hover:bg-[#D29E62] transition-colors"
            >
                <BsArrowUpCircle size={30} />
            </button>
        </>
    )
}