
export default function Error({error, resetErrorBoundary}) {
  return (
    <div className="container mx-auto w-full min-h-screen">
        <div className="h-screen flex justify-center items-center ">
            <div className="lg:w-1/3 lg:h-1/3 w-4/5 h-1/3 shadow-md rounded-md
            flex flex-col items-center justify-center gap-y-4
            ">
                <div className="flex flex-col gap-y-1 justify-center items-center">
                <h1 className="text-sm font-medium text-red-600 tracking-tight">Something went wrong 😒</h1>
                <p className="tracking-tight text-lg font-bold text-red-600">{error?.message || "Please try again"}</p>
                </div>
                <button
                className="px-5 py-2 bg-[#10B6D5] rounded-md text-white"
                onClick={resetErrorBoundary}
                >
                    Try again 🥲
                </button>
            </div>
        </div>
    </div>
  )
}
