"use client";

import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
      </div>

    
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#6772e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {loading ? "Redirecting..." : "Pro Plan -$10"}
        </button>
      </div>
    </AuthWrapper>
  );
};

export default Home;
