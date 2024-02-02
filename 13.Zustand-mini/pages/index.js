import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useCountState } from "@/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const count = useCountState((state)=>  state.count)
  const {increment,decrement } = useCountState((state)=> state.actions)

  return (
    <>
    <div id="counter">
  <div class="number">
     {count}
  </div>
  <div class="buttons">
    <button onClick={increment}>⬆️</button>
    <button onClick={decrement}>⬇️</button>
  </div> 
          
</div>
    </>
  );
}
