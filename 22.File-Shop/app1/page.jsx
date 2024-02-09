import { AiFillCopyrightCircle} from "react-icons/ai";

const Home = () => {
   return (
      <main className=" flex justify-center items-center  p-8 ">
         <div className=" bg-zinc-100 rounded-md flex flex-col  gap-8  p-8">
            <div>HELLOW, THIS IS MERNFA</div>
            <div>سلام من مرن فا هستم...</div>
            <AiFillCopyrightCircle className=" w-16 h-16 text-indigo-500"/>
         </div>
      </main>
   );
}

export default Home;

