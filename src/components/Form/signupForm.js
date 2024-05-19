"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api/auth";
// from component 
import ButtonBorder from "../Button/ButtonBorder";
import Button from "../Button/Button";
import Alert from "../Others/Alert";
import InputText from "../Input/InputText";
import InputPassword from "../Input/InputPassword";

const SignupForm = () => {
  const router = useRouter();
  // input data from form 
  const [credentials, setCredentials] = useState({
    name: "",
    email: "", 
    password: "" 
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
    const { name, email, password } = credentials;
    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    // Program login
    try {
      const result = await register(credentials);
      if (result.success) {
        console.log("Register berhasil:", result.data);
        router.push("/sign-in")
      } else {
        console.error("Register gagal:", result.message);
        setError(result.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      setError(error.message);
    }
  };
  // variable for button disabled 
  const isFormValid = credentials.email && credentials.email && credentials.password;

  return (
    <div className="flex flex-col gap-6">
      {/* form input  */}
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Register</h1>
        <Alert error={error} />
        <InputText 
          name={"name"}
          placeholder={"Full Name"}
          value={credentials.name}
          onChange={handleChange}
        />
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
          Sign Up
        </Button>
      </form>
      {/* accept term  */}
      <div className="flex flex-row items-center gap-4">
        <input name="accept" type="checkbox" required/>
        <p className="text-grey2">Accept terms and condition</p>
      </div>
      {/* button forget password  */}
      <div className="w-full border border-[#D8D8D8]"></div>
      <p className="text-grey2 text-center">Already have an account?</p>
      <ButtonBorder href="/sign-in">Sign In</ButtonBorder>
    </div>
  );
};

export default SignupForm;
