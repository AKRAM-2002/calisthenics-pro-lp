import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        appearance={{
          elements: {
            card: "shadow-lg rounded-lg bg-white border border-gray-200",
            formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
            formFieldInput: "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
          },
          variables: {
            colorPrimary: "#3b82f6",  // Tailwind's blue-500 color
            borderRadius: "0.5rem",
          },
        }}
      />
    </div>
  );
}
