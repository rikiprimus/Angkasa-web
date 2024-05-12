"use client";
import Button from "../Button/Button";

const forgotpasswordForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Forgot Password</h1>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className="w-full text-forText border-b-2 p-4  placeholder:text-placeholder focus:outline-0"
          autoComplete="current-email"
          required
          // onChange = ""
        />
      </form>
      <Button onClick="" >Send</Button>
      <p className="text-grey2 text-center">You’ll get message soon on your email</p>
    </div>
  )
}

export default forgotpasswordForm