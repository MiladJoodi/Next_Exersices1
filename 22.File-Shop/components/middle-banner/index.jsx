import Image from "next/image";

const MiddleBanner = () => {
    return (
        <div>
            <section className="container mx-auto flex justify-center gap-9 items-center">
                <Image
                    alt="alt"
                    width={600}
                    height={200}
                    src={"/images/middle-banner/1.jpg"}
                    className="rounded-xl"
                />
                <Image
                    alt="alt"
                    width={600}
                    height={200}
                    src={"/images/middle-banner/2.jpg"}
                    className="rounded-xl"
                />
            </section>
        </div>
    );
}

export default MiddleBanner;