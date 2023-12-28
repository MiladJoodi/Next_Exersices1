import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ul>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/node">node</Link></li>
        <li><Link href="/next-js">Courses</Link></li>
      </ul>
    </>
  );
}
