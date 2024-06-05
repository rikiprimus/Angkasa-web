"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { forgotpassword } from "@/lib/api/auth";
// from component 
import ButtonBorder from "../Button/ButtonBorder";
import Button from "../Button/Button";
import Alert from "../Others/Alert";
import InputText from "../Input/InputText";
import InputPassword from "../Input/InputPassword";

const ForgotPasswordForm = () => {
  // const router = useRouter();
  // input data from form 
  const [credentials, setCredentials] = useState({
    email: "",
    fe_url: "http://localhost:3000/new-password",
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
    const { email } = credentials;
    if (!email) {
      setError("Please fill out all fields.");
      return;
    }

    // Program forgotpassword
    try {
      const result = await forgotpassword(credentials);
      if (result.success) {
        console.log("Forgot Password berhasil:", result.data);
      } else {
        console.error("Forgot Password gagal:", result.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  };
  // variable for button disabled 
  const isFormValid = credentials.email && credentials.password;

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Forgot Password</h1>
        <Alert error={error} />
        <InputText 
          name={"email"}
          placeholder={"Email"}
          value={credentials.email}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} disabled={!isFormValid}>
          Send
        </Button>
      </form>
      <p className="text-grey2 text-center">
        You’ll get message soon on your email
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
