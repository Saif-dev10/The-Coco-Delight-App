import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignupPage from "./signinClient";

export const metadata = {
  title: "Create an Account | Coco Delight",
  description: "Create your Coco Delight account to order pastries, track deliveries, and enroll in academy programs.",
};

export default async function LoginPage() {
  // const session = await auth();

  // if (session) {
  //   redirect("/");
  // }

  return <SignupPage />;
}