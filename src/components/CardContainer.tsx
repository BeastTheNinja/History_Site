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
            <div className="w-full max-w-sm md:max-w-md">
                {children}
            </div>
        </div>
    )
}