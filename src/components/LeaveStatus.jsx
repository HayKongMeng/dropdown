import { cn } from "../lib/utils"

const leaveEntries = [
  {
    id: "1",
    dateRange: "Jul 15, 2025 - Jul 20, 2025",
    status: "pending"
  },
  {
    id: "2",
    dateRange: "Jul 15, 2025 - Jul 20, 2025",
    status: "approved"
  },
  {
    id: "3",
    dateRange: "Jul 15, 2025 - Jul 20, 2025",
    status: "approved"
  }
]

export default function LeaveStatus() {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_0px_1px_rgba(0,0,0,0.11)] border border-[#EFF1F8] flex flex-col max-w-[373px] px-[21px] py-[19px] overflow-hidden font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between gap-10">
        <div className="text-black text-xl font-medium leading-[0.85] tracking-[-0.5px]">
          Leave status
        </div>
        <div className="text-[#2471E7] text-xs leading-[1.42]">View more</div>
      </div>

      {/* Leave entries */}
      <div className="mt-[19px] space-y-3">
        {leaveEntries.map(entry => (
          <div
            key={entry.id}
            className="bg-[#F8F9FA] rounded-lg py-1.5 px-0 flex items-center justify-between"
          >
            <div className="flex items-center gap-[11px]">
              {/* Status indicator bar */}
              <div
                className={cn(
                  "w-[5px] h-[52px] rounded-r-[20px] flex-shrink-0",
                  entry.status === "pending" ? "bg-[#EA580C]" : "bg-[#16A34A]"
                )}
              />

              {/* Date information */}
              <div className="flex flex-col justify-start w-[169px]">
                <div className="text-[#4E4E4E] text-sm font-medium tracking-[-0.14px] leading-none">
                  Date
                </div>
                <div className="text-[#141414] text-sm font-medium tracking-[-0.14px] leading-none mt-1.5">
                  {entry.dateRange}
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div
              className={cn(
                "mr-4 px-3.5 py-1 rounded text-xs font-bold text-center whitespace-nowrap min-w-[66px]",
                entry.status === "pending"
                  ? "bg-[#FFF2E2] text-[#EA580C]"
                  : "bg-[#D6FFE3] text-[#16A34A]"
              )}
            >
              {entry.status === "pending" ? "Pending" : "Approved"}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
