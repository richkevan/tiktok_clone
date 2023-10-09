import { useState } from "react";
import { useFirebaseAuth } from "../../_firebase/auth-context";
import SvgSprite from "../svg-sprite";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const { sign_In } = useFirebaseAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    sign_In({email:data.email.toString(), password:data.password.toString()})
  }

  return (
    <>
    <form className="w-full flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center text-2xl font-bold">Log in to TikTok</h1>
      <input
      name="email" 
      type="email" 
      placeholder="Email"
      onChange={(e) => setEmailValue(e.target.value)}
      className="w-full items-center placeholder:text-black bg-gray-300 rounded p-2"
      required
      />
      <div 
      className="flex w-full items-center bg-gray-300 rounded p-2" 
      onClick={() => setShowPassword(!showPassword)}>
      <input
      name="password" 
      type={showPassword ? "text":"password"} 
      placeholder="Password"
      onChange={(e) => setPasswordValue(e.target.value)}
      className="flex-1 placeholder:text-black bg-gray-300"
      required/>
      {showPassword? <SvgSprite sprite="#show-password-0060eb3e" className="h-6 w-6"/> : <SvgSprite sprite="#hide-password-0060eb3e" className="h-6 w-6"/>}
      </div>
      
      <span className=" text-xs">Forgot password?</span>
      <button
      className="w-full p-2 rounded bg-[#fe2c55] disabled:bg-gray-300 disabled:text-gray-400"
      type="submit"
      disabled={emailValue === "" || passwordValue === ""}
      >Log in</button>
       <div className="flex items-center gap-1">
       <div className="border-black border-b-2 flex-1">
       </div>
       Or continue with
       <div className="border-black border-b-2 flex-1">
       </div>
       </div> 
    </form>
      <button
        type="button"
        className=" bg-[#fe2c55] text-white w-full p-2 rounded mt-8"
        onClick={() => sign_In({email:"demo@richkevan.com",password:"password"})}>
          Login with demo@richkevan.com
      </button>
    </>
  )
};

export default SignInForm 