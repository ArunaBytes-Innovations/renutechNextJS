"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const dashboard = () => {
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    }
    setToken(token);
  }, []);
  return <div>dashboard</div>;
};

export default dashboard;
