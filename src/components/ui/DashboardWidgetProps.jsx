// import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function DashboardWidget({
  title = "Title here",
  value = "87%",
  className,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-40 h-40 rounded-full border-2 border-indigo-500 bg-white flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-200 cursor-pointer group",
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0",
        className,
      )}
    >
      {/* Animated pulse ring */}
      <div className="absolute inset-0 rounded-full border-2 border-indigo-300 animate-ping opacity-20 group-hover:opacity-40"></div>

      {/* Content container */}
      <div className="flex flex-col items-center justify-center text-center z-10 relative -mt-3 transition-transform duration-300 group-hover:scale-110">
        <div className="text-xs font-normal text-gray-500 mb-1 transition-all duration-300 group-hover:text-indigo-600">
          {title}
        </div>
        <div className="text-2xl font-semibold text-gray-900 opacity-85 leading-tight transition-all duration-300 group-hover:text-indigo-700 animate-fade-in">
          {value}
        </div>
      </div>

      {/* Wave graphics at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 flex flex-col">
        {/* Background wave layer */}
        <div className="absolute bottom-0 w-full h-full">
          <svg
            viewBox="0 0 160 64"
            className="w-full h-full animate-wave-slow"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 Q40,20 80,35 T160,30 L160,64 L0,64 Z"
              fill="rgba(200, 249, 232, 0.6)"
              className="transition-all duration-500 group-hover:fill-indigo-100"
            />
          </svg>
        </div>

        {/* Foreground wave layer */}
        <div className="absolute bottom-0 w-full h-full">
          <svg
            viewBox="0 0 160 64"
            className="w-full h-full animate-wave-fast"
            preserveAspectRatio="none"
          >
            <path
              d="M0,48 Q40,28 80,42 T160,38 L160,64 L0,64 Z"
              fill="#6366f1"
              className="transition-all duration-500 group-hover:fill-indigo-600"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}