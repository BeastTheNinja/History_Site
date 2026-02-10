import { BsArrowUpCircle } from "react-icons/bs"

export const GoToTop = () => {

    const handleScrollTop = () => {
        if (document.scrollingElement) {
            document.scrollingElement.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            return
        }

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        document.documentElement.scrollTop = 0

        if (document.body) {
            document.body.scrollTop = 0
        }
    }


    return (
        <>
            <button
                type="button"
                onClick={handleScrollTop}
                className="fixed bottom-4 right-4 z-50 bg-[#1F1F1F] text-[#F5F5F5] px-4 py-2 rounded-full shadow-lg hover:bg-[#151515] dark:bg-[#C7BD8D] dark:text-[#151515] dark:hover:bg-[#D29E62] transition-colors touch-manipulation"
            >
                <BsArrowUpCircle size={30} />
            </button>
        </>
    )
}