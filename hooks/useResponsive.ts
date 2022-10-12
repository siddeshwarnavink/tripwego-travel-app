import { useState, useEffect } from 'react';
import responsiveBreakpoints from '../constants/responsiveBreakpoints';

export function useResponsive() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    function screenIsAtLeast(minSizeString: string) {
        const minSize = responsiveBreakpoints[minSizeString];
        return windowSize.width >= minSize;
    }

    return {
        screenIsAtLeast
    };
}

export default useResponsive;