import Image from "next/image";
import SignupForm from "@/components/Form/signupForm";

const SignUp = () => {
  return (
    <main className="md:flex md:flex-row bg-white">
      <div className="hidden items-center justify-center bg-primary md:w-3/4 md:flex md:h-[919px]">
        <Image
          src="/assets/auth-image.jpg"
          alt="Ankasa Logo"
          width={500}
          height={150}
          priority
        />
      </div>
      <div className="w-full flex flex-col gap-10 p-6 md:px-40 md:py-12 md:w-1/2">
        <div className="flex flex-row items-center gap-5 mb-20">
          <Image 
            src="/assets/logo.jpg"
            alt="Ankasa Header Logo"
            width={50}
            height={20}
            priority
          />
          <p className="font-poppins font-bold text-2xl">Ankasa</p>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
