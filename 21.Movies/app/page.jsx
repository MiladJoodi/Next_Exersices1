import Image from "next/image"
import Link from "next/link"

const getData = async () => {
    const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", { catch: "no-store" })
    return data.json()
}

const Allmovie = async () => {

    const data = await getData()

    return (
        <main className="flex flex-col gap-8 container mx-auto">
            <>
                <title>سایت فیلم</title>
                <meta name="description" content="وب سایت تخصصی فیلم" />
                <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
            </>
            <div className="text-center text-2xl text-blue-500">صفحه اصلی</div>

            <div className="flex justify-between items-center flex-wrap">
                {data.data.map((movie, i) => (
                    <Link href={`/movies/${movie.id}`} className="my-4 rounded-2xl border-2 border-gray-800" key={i}>
                        <div className="bx" key={i}>
                            <Image
                                className="rounded-lg"
                                width={220}
                                height={260}
                                alt={movie.title}
                                src={movie.poster}
                            />

                            <div className="content">
                                <h3 className="text-red-300 truncate">{movie.title}</h3>
                                <p>Action, Drama, Fantsy</p>
                                <h6><span>IMDB</span> <i className="bi bi-star-fill"></i> 9.0</h6>
                            </div>
                        </div>
                    </Link>
                ))}




            </div>
        </main>
    )
}
export default Allmovie;