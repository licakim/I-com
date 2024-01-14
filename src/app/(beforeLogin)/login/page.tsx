"use client";
// client에서 redirect하는 방법!
//router.push & router.replace
//local:host:3000/login -> localhost:3000/i/flow/login
//push의 경우 back 하면 local:host:3000/login으로 이동 , replace의 경우 local:host:3000으로 이동
//그러므로 push를 사용할 경우 무한 반복이 될 것임!
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
export default function Login() {
  const router = useRouter();
  router.replace("i/flow/login");
  return <Main />;
}
