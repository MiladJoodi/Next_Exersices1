import styles from "@/styles/Home.module.css";
import { signIn } from "next-auth/react";


export default function Home() {
  return (
      <main className={`${styles.main}`}>
         <button type="button"
                className="btn btn-link btn-floating-mx-1"
                onClick={() => signIn("github")}>Login with Github</button>
      </main>
  );
}
