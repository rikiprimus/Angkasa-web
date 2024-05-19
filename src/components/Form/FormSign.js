"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";
import Link from "next/link";
// from component 
import ButtonBorder from "../Button/ButtonBorder";
import Button from "../Button/Button";
import Alert from "../Others/Alert";
import InputText from "../Input/InputText";
import InputPassword from "../Input/InputPassword";

const FormSign = () => {
  const router = useRouter();
  // input data from form 
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // setup for error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Validasi input
    const { email, password } = credentials;
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    // Program login
    try {
      const result = await login(credentials);
      if (result.success) {
        console.log("Login berhasil:", result.data);
        router.push("/home")
      } else {
        console.error("Login gagal:", result.message);
        setError(result.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      setError(error.message);
    }
  };
  // variable for button disabled 
  const isFormValid = credentials.email && credentials.password;

  return (
    <div className="flex flex-col gap-6">
      {/* form input  */}
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Login</h1>
        <Alert error={error} />
        <InputText 
          name={"email"}
          placeholder={"Email"}
          value={credentials.email}
          onChange={handleChange}
        />
        <InputPassword 
          name={"password"}
          placeholder={"Password"}
          value={credentials.password}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} disabled={!isFormValid}>
          Sign In
        </Button>
      </form>
      {/* button forget password  */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-grey2">Did you forget your password?</p>
        <Link href="/forgot-password" className="text-primary underline">
          Tap Here
        </Link>
      </div>
      <div className="w-full border border-[#D8D8D8]"></div>
      <p className="text-grey2 text-center">You don't have an account?</p>
      <ButtonBorder href="/sign-up">Sign Up</ButtonBorder>
    </div>
  );
};

export default FormSign;
