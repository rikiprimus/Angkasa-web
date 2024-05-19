"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getEmail, newpassword } from '@/lib/api/auth';
import Link from "next/link";
// from component 
import ButtonBorder from "../Button/ButtonBorder";
import Button from "../Button/Button";
import Alert from "../Others/Alert";
import InputText from "../Input/InputText";
import InputPassword from "../Input/InputPassword";

const NewPasswordForm = ({id}) => {
  const router = useRouter();
  // input data from form 
  const [credentials, setCredentials] = useState({
    request_code: id,
    email: getEmail(),
    new_password: "",
  });
  // setup for error
  const [confirm_password, setConfirm_password] = useState('');
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
    const { new_password } = credentials;
    if (!confirm_password || !new_password) {
      setError("Please fill out all fields.");
      return;
    }
    try {
      const result = await newpassword(credentials);
      if (result.success) {
        console.log("Change Password berhasil:", result.data);
        router.push("/sign-in")
      } else {
        console.error("Change Password gagal:", result.message);
        setError(result.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      setError(error.message);
    }
  };

  // variable for button disabled 
  const isFormValid = confirm_password && credentials.new_password;

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-5">
        <h1 className="font-poppins font-bold text-4xl">Change Password</h1>
        <Alert error={error} />
        <InputPassword 
          name={"new_password"}
          placeholder={"New Password"}
          value={credentials.new_password}
          onChange={handleChange}
        />
        <InputPassword 
          name={"confirm_password"}
          placeholder={"Confirm Password"}
          value={confirm_password}
          onChange={(e) => setConfirm_password(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={!isFormValid}>
          Change Password
        </Button>
      </form>
    </div>
  )
}

export default NewPasswordForm