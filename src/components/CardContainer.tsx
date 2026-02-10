import type { ReactNode } from "react"

interface CardContainerProps {
    align: "left" | "right";
    children: ReactNode;
}

export const CardContainer = ({ align, children }: CardContainerProps) => {
    // Shift cards to align with the timeline side.
    const alignmentClass = align === "left" ? "md:justify-end" : "md:justify-start"

    return (
        <div className={`flex w-full ${alignmentClass}`}>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                {children}
            </div>
        </div>
    )
}