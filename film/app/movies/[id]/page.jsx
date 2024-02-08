

const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { catch: "no-store" })
    return data.json()
}

import Image from "next/image"

const Single = async () => {

    const data = await getData()

    return (
        <main className="">
            <section className="rounded-lg mx-auto">
                <div>{data.title}</div>
                <div>
                    <Image
                        rounded-3xl
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