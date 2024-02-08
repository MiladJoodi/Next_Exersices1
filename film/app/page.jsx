const getData = async () => {
    const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", { catch: "no-store" })
    return data.json()
}

import Image from "next/image"

const Home = async () => {
    const data = await getData()
    return (
        <main className="flex flex-col gap-8 container mx-auto">
            <div className="text-center text-2xl text-blue-500">صفحه اصلی</div>
            <div className="flex justify-between items-center flex-wrap">
                {data.data.map((mov, i) => (
                    <div className="h-[30rem] my-4 w-72 border-2 border-zinc-300 rounded-2xl" key={i}>
                        <Image 
                        width={260} 
                        height={300} 
                        alt={mov.title} 
                        src={mov.poster} 
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}
export default Home;