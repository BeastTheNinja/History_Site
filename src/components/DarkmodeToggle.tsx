import { useContext } from "react";
import { DarkModeContext } from "./context/darkmodeContext";

export const DarkmodeToggle = () => {
     const darkModeContext = useContext(DarkModeContext);

     if (!darkModeContext) {
        return <div>Error: DarkModeContext not found</div>;
    }


     const { isDarkMode, toggleDarkMode } = darkModeContext;



    return (
        <>
        <button
            onClick={toggleDarkMode}
            className="text-[18px] font-normal font-inter uppercase text-[#3B2A22] hover:text-[#B85A39] dark:text-[#EDE6D8] dark:hover:text-[#B85A39] dark:hover:bg-[#2A2A2A] rounded transition-colors">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        
        </>
    )
}