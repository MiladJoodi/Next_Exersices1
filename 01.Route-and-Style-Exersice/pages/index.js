import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"
import styled from 'styled-components'

const inter = Inter({ subsets: ["latin"] });

// const Title = styled.h1`
// color: blue;
// text-align: center;
// `;

// const Wrapper = styled.div`
// padding: 20px;
// border-radius: 20px
// background-color: orange
// `

export default function Home() {

  const courses = [
    {id: 1,title: 'Courses', shortName: 'courses'},
    {id: 1,title: 'Node', shortName: 'node'},
    {id: 1,title: 'Nextjs', shortName: 'next-js'},
  ]

  const redirectHandler = ()=>{
    route.push("/course/node");
  }


  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  );
}
