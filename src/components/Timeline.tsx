import type { Birth } from "../types/Data"
import { Card } from "./Card"
import { CardContainer } from "./CardContainer"

interface TimelineProps {
    items: Birth[];
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <section className="relative mx-auto max-w-6xl px-4 py-13 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="absolute left-4 top-0 h-10 w-10 -translate-y-1/2 rounded-full bg-[#C7BD8D] sm:h-12 sm:w-12 md:left-1/2 md:h-16 md:w-16 md:-translate-x-1/2" />

            <div className="absolute left-4 top-0 h-full w-1 bg-[#D29E62]/30 dark:bg-[#C7BD8D]/40 md:left-1/2 md:-translate-x-1/2 md:w-2 lg:w-3" />

            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
                {items.map((item, index) => {
                    // Alternate cards left/right down the timeline.
                    const isLeft = index % 2 === 0
                    const link = item.links?.[0]?.link
                    const cardColumnClass = isLeft
                        ? "w-full pl-8 md:w-1/2 md:pl-0 md:pr-24 md:pt-12 lg:pr-32 lg:pt-16"
                        : "w-full pl-8 md:w-1/2 md:pl-24 md:ml-auto md:pt-12 lg:pl-32 lg:pt-16"

                    return (
                        <div
                            key={`${item.year}-${index}`}
                            className="relative md:flex md:items-center"
                        >
                            <div className={cardColumnClass}>
                                <div className="mb-3 text-xl font-normal font-['Linden_Hill'] text-[#695E48] dark:text-[#C7BD8D] sm:text-2xl md:hidden">
                                    Year: {item.year}
                                </div>
                                <CardContainer align={isLeft ? "left" : "right"}>
                                    <Card
                                        description={item.text}
                                        link={link}
                                    />
                                </CardContainer>
                            </div>

                            <span className="absolute left-4 top-6 h-3 w-3 -translate-y-1/2 rounded-full border border-[#D29E62] bg-[#F5F5F5] dark:border-[#C7BD8D] dark:bg-[#151515] sm:h-4 sm:w-4 md:left-1/2 md:top-1/2 md:h-5 md:w-5 md:-translate-x-1/2" />
                            <span
                                className={`absolute top-1/2 hidden -translate-y-full -mt-2 text-xl font-normal font-['Linden_Hill'] text-[#695E48] dark:text-[#C7BD8D] md:block lg:text-2xl ${isLeft ? "right-1/2 pr-4 text-right" : "left-1/2 pl-4 text-left"
                                    }`}
                            >
                                Year: {item.year}
                            </span>
                            <span
                                className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-[#D29E62]/50 dark:bg-[#C7BD8D]/60 md:block md:w-[12%] lg:w-[16%] xl:w-[18%] ${isLeft ? "md:right-1/2 md:left-auto" : "md:left-1/2 md:right-auto"
                                    }`}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
