import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("example@gmail.com")
  const [password, setPassword] = useState("*******")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-[375px] h-[812px] overflow-hidden shadow-2xl">
        {/* Background with gradient and design elements */}
        <div className="absolute inset-0 bg-gradient-to-br ">
          {/* Background design elements */}
          <div className="absolute inset-0">
            {/* Top gradient blob */}
            <img
              src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/b8d110c114bd1f28f2337cd3077dbdb501eae97c?placeholderIfAbsent=true"
              alt=""
              className="absolute top-0 left-0 w-full h-auto"
            />

            {/* Additional design elements */}
            <div className="absolute top-20 left-4 w-8 h-8 bg-purple-900 rounded-full opacity-60"></div>
            <div className="absolute top-32 right-8 w-12 h-12 bg-purple-500 rounded-full opacity-40"></div>

            {/* Dotted pattern overlay */}
            <div
              className="absolute top-0 left-0 w-full h-64 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: "8px 8px"
              }}
            ></div>

            {/* Decorative circles on the right */}
            <div className="absolute top-24 right-4">
              <div className="w-24 h-24 border-2 border-dashed border-white opacity-30 rounded-full"></div>
              <div className="w-16 h-16 border-2 border-dashed border-white opacity-20 rounded-full mt-4 ml-8"></div>
            </div>

            {/* Bottom decorative circles */}
            <div className="absolute bottom-32 left-4">
              <div className="w-12 h-12 border-2 border-dashed border-white opacity-20 rounded-full"></div>
              <div className="w-8 h-8 border-2 border-dashed border-white opacity-15 rounded-full mt-4 ml-8"></div>
            </div>

            {/* Diagonal lines */}
            <div className="absolute top-72 left-8 w-16 h-0.5 bg-white opacity-20 transform rotate-45"></div>
            <div className="absolute top-80 left-12 w-12 h-0.5 bg-white opacity-15 transform rotate-45"></div>
            <div className="absolute top-76 left-16 w-8 h-0.5 bg-white opacity-10 transform rotate-45"></div>
          </div>
        </div>

        {/* Main Content Area with white background */}
        <div className="relative z-10 mx-4 mt-16 mb-8  px-6 py-8 min-h-[600px] flex flex-col">
          {/* Logo */}
          <div className="flex justify-center mb-7">
            <img
              src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/8db06e22f46f803792f0e73d9c22168d64da8351?placeholderIfAbsent=true"
              alt="Logo"
              className="w-[84px]"
            />
          </div>

          {/* Tab Switcher */}
          {/* Tab Switcher */}
            <div className="w-full max-w-[280px] mx-auto bg-gray-100 rounded-full p-1 mb-6">
              <div className="flex w-full">
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all ${
                    activeTab === "register"
                      ? "bg-purple-800 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Register
                </button>
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all ${
                    activeTab === "login"
                      ? "bg-purple-800 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Login
                </button>
              </div>
            </div>

          {/* Subtitle */}
          <p className="text-lg text-black font-normal leading-tight tracking-[-0.5px] mb-7 text-center">
            Please enter your email or password
          </p>

          {/* Form */}
          <div className="w-full space-y-3.5 flex-1">
            {/* Email Field */}
            <div>
              <label className="block text-lg text-black font-normal leading-tight tracking-[-0.5px] mb-3.5">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full h-12 bg-input-bg rounded-[10px] px-3 text-input-text text-[17px] font-normal tracking-[-0.41px] leading-snug border-0 outline-none placeholder:text-input-text"
                  placeholder="example@gmail.com"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-lg text-black font-normal leading-tight tracking-[-0.5px] mb-3.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full h-12 bg-input-bg rounded-[10px] px-3 text-input-text text-[17px] font-normal tracking-[-0.41px] leading-snug border-0 outline-none placeholder:text-input-text"
                  placeholder="*******"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-purple-800 text-white text-base font-medium rounded-full py-4 mt-8 mb-4 transition-all hover:bg-purple-900 active:scale-95 shadow-lg">
              Login
            </button>

          {/* Register Link */}
          <p className="text-sm text-black font-normal leading-tight tracking-[-0.5px] text-center">
            Not yet has account please register
          </p>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <img
            src="https://api.builder.io/api/v1/image/assets/feb8ce0efd7646cb96252d2c86689552/9ceaace1e9f5779a16c273d51b3526804c360fc3?placeholderIfAbsent=true"
            alt="Home indicator"
            className="w-6 h-1"
          />
        </div>
      </div>
    </div>
  )
}
