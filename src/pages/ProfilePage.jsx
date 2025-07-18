import { Calendar } from "lucide-react"

export default function Profile() {
  return (
    <div className="min-h-screen bg-white font-satoshi">
      {/* Mobile viewport container */}
      <div className="max-w-[480px] mx-auto bg-white">
        {/* Content */}
        <div className="px-[18px] pb-[85px]">
          {/* Profile Title */}
          <h1 className="text-[20px] font-medium text-black tracking-[-0.5px] mt-[46px] font-satoshi leading-[17px]">
            Profile
          </h1>

          {/* Profile Info Section */}
          <div className="flex items-start gap-7 mt-[35px]">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-[126px] h-[126px] rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 p-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/02a27d6785b8e2f731217755ac41f4b9b195cdf4?placeholderIfAbsent=true"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Edit Icon */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-gray-600"
                >
                  <path
                    d="M11.334 2.00002C11.7016 1.63246 12.2001 1.42334 12.7221 1.42334C13.244 1.42334 13.7426 1.63246 14.1101 2.00002C14.4777 2.36758 14.6868 2.86614 14.6868 3.38802C14.6868 3.90991 14.4777 4.40847 14.1101 4.77602L5.00005 13.886L1.33337 14.6667L2.11404 11L11.334 2.00002Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* User Details */}
            <div className="w-[130px]">
              <h2 className="text-[16px] font-bold text-[#273240] font-satoshi">
                Srey Mom
              </h2>

              <div className="flex items-center gap-[19px] mt-1">
                <span className="text-[12px] font-medium text-[#344054] font-satoshi">
                  ID:
                </span>
                <span className="text-[16px] font-bold text-[#273240] font-satoshi">
                  UT0000132
                </span>
              </div>

              <div className="flex items-center gap-7 mt-1">
                <span className="text-[12px] font-medium text-[#344054] font-satoshi">
                  Position:
                </span>
                <span className="text-[16px] font-bold text-[#273240] font-satoshi">
                  UX / UI
                </span>
              </div>

              <div className="flex items-center gap-[37px] mt-1">
                <span className="text-[12px] font-medium text-[#344054] font-satoshi">
                  Department:
                </span>
                <span className="text-[16px] font-bold text-[#273240] font-satoshi">
                  IT
                </span>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="bg-white border border-[#EFF1F8] rounded-[10px] shadow-[0px_0px_1px_rgba(0,0,0,0.11)] mt-5 p-4">
            <div className="grid grid-cols-3 gap-4">
              {/* Gender */}
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-[18px] flex items-center justify-center">
                  <svg width="20" height="27" viewBox="0 0 20 27" fill="none">
                    <path
                      d="M13.5 8.5C13.5 10.433 11.933 12 10 12C8.067 12 6.5 10.433 6.5 8.5C6.5 6.567 8.067 5 10 5C11.933 5 13.5 6.567 13.5 8.5ZM10 14C12.485 14 14.5 11.985 14.5 9.5C14.5 7.015 12.485 5 10 5C7.515 5 5.5 7.015 5.5 9.5C5.5 11.985 7.515 14 10 14ZM10 16L10 22M7 19L13 19"
                      stroke="#4B68FF"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="text-[12px] font-medium text-[#737391] font-satoshi">
                  Gender
                </div>
                <div className="text-[16px] font-bold text-[#273240] font-satoshi leading-[22px]">
                  Male
                </div>
              </div>

              {/* Member Since */}
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-[18px] flex items-center justify-center">
                  <Calendar
                    className="w-5 h-5 text-[#4B68FF]"
                    strokeWidth={1.35}
                  />
                </div>
                <div className="text-[12px] font-medium text-[#737391] font-satoshi">
                  Member since
                </div>
                <div className="text-[16px] font-bold text-[#273240] font-satoshi leading-[22px]">
                  01 January 1999
                </div>
              </div>

              {/* Phone Number */}
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-[18px] flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/3b97b72c1fd5e09a3165131c09dea2c6b89d466d?placeholderIfAbsent=true"
                    alt="Phone"
                    className="w-[42px] h-[42px]"
                  />
                </div>
                <div className="text-[12px] font-medium text-[#737391] font-satoshi mt-[18px] pt-0.5">
                  Phone Number
                </div>
                <div className="text-[16px] font-bold text-[#273240] font-satoshi leading-[22px]">
                  010 123 123
                </div>
              </div>
            </div>
          </div>

          {/* Change Password Button */}
          <button className="w-full bg-[#392648] text-white rounded-full py-2 px-3 mt-5 text-[16px] font-bold tracking-[-0.32px] leading-5 font-satoshi">
            Change password
          </button>

          {/* Other Information Section */}
          <div className="bg-white border border-[#EFF1F8] rounded-[10px] shadow-[0px_0px_1px_rgba(0,0,0,0.11)] mt-5 p-[15px]">
            <h3 className="text-[16px] font-semibold text-[#273240] mb-5 font-inter">
              Other Information
            </h3>
            <div className="border-t border-[#EFF1F8] mb-5"></div>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Email
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  asdfasdfasdf@gmail.com
                </div>
              </div>

              {/* Place of Birth */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Place of Birth
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  #12, St 323, Sangkat Boeung Kak II, Khan Toul Kork, Phnom
                  Penh,Cambodia.
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Address
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  #12, St 323, Sangkat Boeung Kak II, Khan Toul Kork, Phnom
                  Penh,Cambodia.
                </div>
              </div>

              {/* Marital Status */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Marital Status
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  Single
                </div>
              </div>

              {/* Date of employment */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Date of employment
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  01 January 1999
                </div>
              </div>

              {/* Working shift */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Working shift
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  Morning, afternoon
                </div>
              </div>

              {/* Under supervision */}
              <div>
                <label className="text-[14px] font-normal text-black font-satoshi">
                  Under supervision
                </label>
                <div className="mt-2.5 p-2 border border-[#EFF1F8] rounded-md bg-white text-[14px] text-[#273240] font-inter">
                  Chomeun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
