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
                    <div className="relative h-[28rem] my-4 w-72 border-2 border-zinc-300 rounded-2xl p-4 flex flex-col gap-4" key={i}>
                        <div className="flex justify-center items-center">
                            <Image
                                className="rounded-lg"
                                width={220}
                                height={260}
                                alt={mov.title}
                                src={mov.poster}
                            />
                        </div>
                        <h3>{mov.title}</h3>
                        <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center">
                            <div className="px-3 py-1 bg-zinc-200 rounded-md">{mov.year}</div>
                            <div className="px-3 py-1 bg-zinc-200 rounded-md">{mov.country}</div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
export default Home;