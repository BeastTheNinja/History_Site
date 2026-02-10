export const GoToTop = () => {


    return (
        <>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className=" fixed bottom-4 right-4 bg-[#3B2A22] text-[#F5F1E8] px-4 py-2 rounded-full shadow-lg hover:bg-[#2E201A] dark:bg-[#C7BD8D] dark:text-[#151515] dark:hover:bg-[#B5A57E] transition-colors"
            >
                Gå til toppen
            </button>
        </>
    )
}