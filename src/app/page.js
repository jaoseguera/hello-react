import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Hello, React from AWS and CodeBuild v4! 👋</h1>
    </main>
  );
}
