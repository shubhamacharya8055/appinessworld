import { useGSAP } from "@gsap/react";
import { CLIENT_IMAGES } from "../lib/constants";
import { useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Clients() {

    const clientRef = useRef(null);

    useGSAP(()=> {

        gsap.from(clientRef.current , {
            y: 200,
            opacity: 0 , 
            duration: 0.4 , 
            scrollTrigger: {
                trigger: clientRef.current,
                start: "-100% 70%",
                end: "0% 50%",
                toggleActions: "restart none none reverse"
            }
        })

    } , [])

  return (
    <div
    className="w-full mt-10 absolute bottom-[100px]"
    ref={clientRef}
    >
    <div className=" mx-auto shadow-lg clients h-[150px] w-[93%] rounded-2xl grid 
    grid-cols-2 grid-rows-3
    md:grid-cols-3 md:grid-rows-2
    lg:grid-cols-6 lg:grid-rows-1
     place-items-center
    ">
        {CLIENT_IMAGES.map((img) => (
            <img 
            src={img}
            width={120}
            height={120}
            className="p-3"
            />
        ))}
    </div>
    </div>
  )
}
