import { useEffect, useRef } from "react"

// Type definition for hook options
type Options = {
    onLoadMore: () => void    // Callback funktion der kaldes når der skal loades mere
    hasMore: boolean          // Om der er flere items at loade
    rootMargin?: string       // Hvor langt før sentinel element skal observeren trigge (default: 200px før)
    threshold?: number        // Hvor meget af sentinel skal være synlig før trigger (0-1)
}

/**
 * Custom hook til infinite scroll/lazy loading
 * Bruger IntersectionObserver API til at detektere når brugeren scroller til bunden
 */
export const useInfiniteScroll = ({
    onLoadMore,
    hasMore,
    rootMargin = "0px 0px 200px 0px",  // Trigger 200px før sentinel er synlig
    threshold = 0,
}: Options) => {
    // Ref til det usynlige div element der placeres i bunden af listen
    const sentinelRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        // Stop hvis der ikke er flere items at loade
        if (!hasMore) return

        const node = sentinelRef.current
        if (!node) return

        // Opret en IntersectionObserver der kigger efter om sentinel er synlig
        const observer = new IntersectionObserver(
            (entries) => {
                // Hvis sentinel bliver synlig (brugeren scroller ned)
                if (entries[0]?.isIntersecting) {
                    onLoadMore()  // Kald callback for at loade 10 flere items
                }
            },
            {
                root: null,        // Brug viewport som root
                rootMargin,        // Trigger før element er helt synlig
                threshold          // Hvor meget skal være synlig før trigger
            }
        )

        // Start observation af sentinel elementet
        observer.observe(node)

        // Cleanup: stop observation når effect køres igen eller komponenten unmountes
        return () => observer.disconnect()
    }, [hasMore, onLoadMore, rootMargin, threshold])

    // Returner ref der skal sættes på sentinel div'en
    return { sentinelRef }
}
