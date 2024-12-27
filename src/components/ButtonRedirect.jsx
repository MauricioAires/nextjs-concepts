"use client";

import { useRouter } from "next/navigation";

export const ButtonRedirect = () => {
  const router = useRouter();

  function sendEmailAndRedirect() {
    // send email
    router.push("/dashboard");
  }

  return <button onClick={sendEmailAndRedirect}>Dashboard</button>;
};
