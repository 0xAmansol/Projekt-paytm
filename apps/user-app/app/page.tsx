import Image, { type ImageProps } from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to User App</h1>
      <Image src="/logo.png" alt="Repo Logo" width={200} height={200} />
    </div>
  );
}
