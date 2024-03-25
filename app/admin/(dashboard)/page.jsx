"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    }
    setToken(token);
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
