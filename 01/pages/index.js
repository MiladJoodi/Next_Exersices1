import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const courses = [
    {id: 1,title: 'Courses', shortName: 'courses'},
    {id: 1,title: 'Node', shortName: 'node'},
    {id: 1,title: 'Nextjs', shortName: 'next-js'},
  ]


  return (
    <>
      <ul>
        {courses.map(course=> (
          <li><Link href={`/${course.shortName}`}>{course.title}</Link></li>
        ))}
      </ul>
    </>
  );
}
