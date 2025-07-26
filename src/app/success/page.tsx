"use client";
import Link from "next/link";
const SuccessPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎉 Payment Successful!</h1>
      <p>Thank you for purchasing Premium. You now have full access.</p>

            <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-3 py-2 px-4 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
