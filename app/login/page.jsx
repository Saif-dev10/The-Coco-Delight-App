import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginClient from "./loginClient";

export const metadata = {
  title: "Sign In | Coco Delight",
  description:
    "Sign in to your Coco Delight account to manage orders, track academy progress, and more.",
};

export default async function LoginPage() {
  // const session = await auth();
  const session = await auth()
  console.log(session?.user?.email)

  // if (session) {
  //   redirect("/");
  // }

  return <LoginClient />;
}