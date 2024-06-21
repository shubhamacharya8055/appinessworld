import { BUTTONS } from "../lib/constants";

export default function HeroButtons() {
  return (
    <div className="absolute h-[200px] z-[9999] top-[32%] left-[50%] w-1/2 transform -translate-x-[50%]">
        <div className="w-full h-full flex items-start justify-center pt-4 gap-x-2">
            {BUTTONS.map((button) => (
                <button className="border border-gray-300 px-5 py-2 rounded-full bg-[#F3F7FD] text-[rgb(7,79,164)] font-medium text-lg hover:bg-[#10B2D1] hover:text-white
                hover:shadow-[0px_4px_15px_0px_rgba(16,178,209,0.5)]
                hover:border-black/40
                transition-all duration-500">
                    {button}
                </button>
            ))}
        </div>
    </div>
  )
}
