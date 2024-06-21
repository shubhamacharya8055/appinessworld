import { useEffect, useRef, useState } from "react";
import { HERO_HEADINGS } from "../lib/constants";

export default function TextCarousel() {


    const scrollRef = useRef(null);
    
    const [activeIndex, setActiveIndex] = useState(0)

    const NextItem = () => {
        setActiveIndex((prev) => (prev + 1 ) % HERO_HEADINGS.length)
    }

    useEffect(() => {
        scrollToItem()
    }, [activeIndex]) 

    useEffect(() => {
        let interval = setInterval(() => {
            NextItem()
            scrollToItem()
        } , 4000)

        return () => clearInterval(interval)
    } , [activeIndex])

    const handleIndex = (index) => {
        setActiveIndex(index)
    }

    function scrollToItem () {
        if(scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / HERO_HEADINGS.length
            scrollRef.current.scrollTo({
                left: activeIndex * itemWidth ,
                behavior: "smooth"
            })
        }
    }

  return (
    <div className="absolute  h-[200px] z-[999]  left-[50%] top-[20%] transform -translate-x-[50%] -translate-y-[50%] w-full"
    >
        <div className="w-[60%] mx-auto h-full flex items-center overflow-x-scroll no-scrollbar transition-all duration-500
        "
        ref={scrollRef}
        >
            {HERO_HEADINGS.map((headings , index) => (
                <div className="min-w-full flex items-centerh-full text-center" 
                 key={index} 
                >
                <h1 className="text-[40px] tracking-wide font-medium leading-[60px] "
                >
                    {headings}
                </h1>
                </div>
            ))}
        </div>

        <div className="h-5 flex gap-1 items-center justify-center">
            {HERO_HEADINGS.map((_, index) => (
                <button
                onClick={() => handleIndex(index)}
                className={`h-2 w-2 border border-gray-400 rounded-full cursor-pointer ${index === activeIndex ? "bg-[#074FA4]" : "bg-gray-300"}`}>
                </button>
            ))}
        </div>
    </div>
  )
}
