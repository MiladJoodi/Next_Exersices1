

const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { catch: "no-store" })
    return data.json()
}

import Image from "next/image"

const Single = async ({ params }) => {

    const data = await getData(params.id)

    return (
        <main className="container mx-auto flex flex-col gap-12">
            <section className="rounded-lg bg-zinc-100 p-8 flex justify-between items-start">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1>{data.title}</h1>
                        <div>سال ساخت: {data.year}</div>
                        <div>زمان: {data.runtime}</div>
                        <div>کارگردان: {data.director}</div>
                        <div>نمره IMDB {data.imdb_rating}</div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div>خلاصه فیلم</div>
                            <div>{data.plot}</div>
                        </div>
                        <div>
                            <div>دسته بندی</div>
                            <div className="flex justify-start items-center flex-wrap gap-4">
                                {data.genres.map((ge, i) => (
                                    <div key={i} className="bg-zinc-200 rounded-md px-4 py-1">{ge}</div>
                                ))

                                }</div>
                        </div>
                    </div>
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
            <section className="flex justify-between items-center">
                {
                    data.images.map((img, i)=>(
                        <Image
                        key={i}
                        className="rounded-xl"
                        width={400}
                        height={200}
                        alt={data.title}
                        src={img}
                        priority={true}
                    />
                    ))
                }
            </section>
        </main>
    )
}
export default Single