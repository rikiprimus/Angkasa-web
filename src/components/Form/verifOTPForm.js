"use client";
import Button from "../Button/Button";

const verifOTPForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Verifikasi Otp</h1>
        <input
          id="otp"
          name="otp"
          type="text"
          placeholder="OTP"
          className="w-full text-forText border-b-2 p-4  placeholder:text-placeholder focus:outline-0"
          autoComplete="current-otp"
          required
          // onChange = ""
        />
      </form>
      <Button onClick="" >Send</Button>
    </div>
  )
}

export default verifOTPForm