

const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { catch: "no-store" })
    return data.json()
}

import Image from "next/image"

const Single = async ({params}) => {

    const data = await getData(params.id)

    return (
        <main className="container mx-auto">
            <section className="rounded-lg bg-zinc-100 p-8 flex justify-between items-start">
                <div>
                    <h1>{data.title}</h1>
                    <div>سال ساخت: {data.year}</div>
                    <div>زمان: {data.runtime}</div>
                    <div>کارگردان: {data.director}</div>
                    <div>نمره IMDB: {data.imdb_rating}</div>
                </div>
                <div>
                    <Image
                        className="rounded-3xl"
                        width={250}
                        height={300}
                        alt={data.title}
                        src={data.poster}
                        priority={true}
                    />
                </div>
            </section>
        </main>
    )
}
export default Single