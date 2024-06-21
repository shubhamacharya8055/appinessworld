import { ChevronRight } from "lucide-react";

export default function HeroDescription() {

    

  return (
    <div className="w-1/2 mx-auto flex justify-center items-center flex-col gap-y-5 absolute bottom-[300px] left-[50%] transform -translate-x-[50%]"
    >
        <div className="w-[80%]">
       <h2 className="text-[20px] text-center font-medium">
         We work with large enterprises and startups. Here are some of our clients
        </h2>
        </div>

        <button className="text-sm flex items-center gap-x-1 justify-center">
            <span className="text-[rgb(7,79,164)] font-medium">
            Know more     
            </span>
            <ChevronRight className="h-3 w-3 mt-0.5" />
        </button>
    </div>
  )
}
