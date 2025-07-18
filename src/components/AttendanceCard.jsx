export default function AttendanceCard() {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_0px_1px_rgba(0,0,0,0.11)] border border-[#eff1f8] max-w-[373px] px-5 py-[15px] overflow-hidden font-[Satoshi,sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-[19px]">
        <h2 className="text-[20px] font-medium text-black leading-[0.85] tracking-[-0.5px]">
          Attendance
        </h2>
        <button className="text-[#2471e7] text-[12px] leading-[1.42] hover:underline">
          View more
        </button>
      </div>

      {/* First Entry - Late */}
      <div className="bg-[#f8f9fa] rounded-lg px-4 py-4 mb-[19px]">
        <div className="flex items-center justify-between max-w-[300px]">
          <div className="w-[198px]">
            <div className="text-[14px] font-medium text-[#141414] leading-none tracking-[-0.14px] mb-[7px]">
              Jul 15, 2025 - Jul 20, 2025
            </div>
            <div className="flex items-center gap-7 text-[16px] font-normal tracking-[-0.5px] leading-[1.06]">
              <div className="flex items-center gap-[5px] text-[#dc2626]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/90da4342bf08482f85d3851d966c0b0915777c57?placeholderIfAbsent=true"
                  alt="check in"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>8:27 am</span>
              </div>
              <div className="flex items-center gap-[5px] text-[#392648]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/376fb1e709884746f09aa6d948f2b8e09dd2760e?placeholderIfAbsent=true"
                  alt="check out"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>5:35 pm</span>
              </div>
            </div>
          </div>
          <div className="bg-[#ffe3e3] text-[#dc2626] px-[23px] py-1 rounded text-[12px] font-bold text-center whitespace-nowrap w-[66px]">
            Late
          </div>
        </div>
      </div>

      {/* Second Entry - On time */}
      <div className="bg-[#f8f9fa] rounded-lg px-4 py-4 mb-[19px]">
        <div className="flex items-center justify-between max-w-[300px]">
          <div className="w-[198px]">
            <div className="text-[14px] font-medium text-[#141414] leading-none tracking-[-0.14px] mb-[7px]">
              Jul 15, 2025 - Jul 20, 2025
            </div>
            <div className="flex items-center gap-7 text-[16px] font-normal tracking-[-0.5px] leading-[1.06]">
              <div className="flex items-center gap-[5px] text-[#54a0fd]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/60892d42ef576ab76e2ecb3f2669886e29923e23?placeholderIfAbsent=true"
                  alt="check in"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>8:00 am</span>
              </div>
              <div className="flex items-center gap-[5px] text-[#392648]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/376fb1e709884746f09aa6d948f2b8e09dd2760e?placeholderIfAbsent=true"
                  alt="check out"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>5:35 pm</span>
              </div>
            </div>
          </div>
          <div className="bg-[#d5e8ff] text-[#54a0fd] px-[15px] py-1 rounded text-[12px] font-bold text-center whitespace-nowrap w-[66px]">
            On time
          </div>
        </div>
      </div>

      {/* Third Entry - Leave */}
      <div className="bg-[#f8f9fa] rounded-lg px-4 py-4">
        <div className="flex items-center justify-between max-w-[300px]">
          <div className="w-[201px]">
            <div className="text-[14px] font-medium text-[#141414] leading-none tracking-[-0.14px] mb-[7px]">
              Jul 15, 2025 - Jul 20, 2025
            </div>
            <div className="flex items-center gap-7 text-[16px] font-normal tracking-[-0.5px] leading-[1.06]">
              <div className="flex items-center gap-[5px] text-[#392648]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/8143490f70370bad335aa59829503c748e8a41d0?placeholderIfAbsent=true"
                  alt="check in"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>8:10 am</span>
              </div>
              <div className="flex items-center gap-[5px] text-[#585858]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/8b54444fe986d994304406eed314116c69141c12?placeholderIfAbsent=true"
                  alt="check out"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>2:00 pm</span>
              </div>
            </div>
          </div>
          <div className="bg-[#dadada] text-[#585858] px-[20px] py-1 rounded text-[12px] font-bold text-center whitespace-nowrap w-[66px]">
            Leave
          </div>
        </div>
      </div>
    </div>
  );
}
