import { AlignJustify } from "lucide-react";

export default function SideNav() {
  return (
    <div className="sticky h-[600px] inset-y-0 transition-all bg-transparent w-20 pt-10 z-[999999]">
        <div className="w-full h-full flex flex-col items-center justify-between">
            <div className="relative w-[55%]">
            <img 
            src="./appiness-smiley-gif.webp"
            />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-y-0.5 pb-24">
                <p className="text-xs text-[#2FB9D4] font-semibold">Menu</p>
                <AlignJustify className="h-8 w-8" color="#2FB9D4" />
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}
