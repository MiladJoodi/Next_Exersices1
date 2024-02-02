import Head from "next/head";
import { Button } from "react-bootstrap";
import Navbar from "@/components/modules/Navbar/Navbar"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <img style={{left: "50%", translate: "-50%"}} src="/images/Loader.gif" alt="" />
    </>
  );
}
