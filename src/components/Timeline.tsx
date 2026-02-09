import type { Birth } from "../types/Data"
import { Card } from "./Card"
import { CardContainer } from "./CardContainer"

interface TimelineProps {
    items: Birth[];
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <section className="relative mx-auto max-w-5xl px-4 py-13">
            <div className="absolute left-1/2 top-0 hidden h-full w-3 -translate-x-1/2 bg-amber-200/40 md:block" />

            <div className="space-y-20">
                {items.map((item, index) => {
                    const isLeft = index % 2 === 0
                    const link = item.links?.[0]?.link
                    const cardColumnClass = isLeft
                        ? "md:w-1/2 md:pr-24 md:pt-12"
                        : "md:w-1/2 md:pl-24 md:ml-auto md:pt-12"

                    return (
                        <div
                            key={`${item.year}-${index}`}
                            className="relative md:flex md:items-center"
                        >
                            <div className={cardColumnClass}>
                                <div className="mb-3 text-2xl font-normal font-['Linden_Hill'] text-amber-200 md:hidden">
                                    Year: {item.year}
                                </div>
                                <CardContainer align={isLeft ? "left" : "right"}>
                                    <Card
                                        description={item.text}
                                        link={link}
                                    />
                                </CardContainer>
                            </div>

                            <span className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200 bg-neutral-900 md:block" />
                            <span
                                className={`absolute top-1/2 hidden -translate-y-full -mt-2 text-2xl font-normal font-['Linden_Hill'] text-amber-200 md:block ${isLeft ? "right-1/2 pr-4 text-right" : "left-1/2 pl-4 text-left"
                                    }`}
                            >
                                Year: {item.year}
                            </span>
                            <span
                                className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-amber-200/60 md:block ${isLeft ? "right-1/2" : "left-1/2"
                                    }`}
                                style={{ width: "12%" }}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
