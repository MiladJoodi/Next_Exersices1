import Link from "next/link";

const BreadCrumb = ({secondTitle, secondLink}) => {
    return (
        <div className="flex justify-start items-center">
            <Link href={"/"} className="text-blue-400 transition-all duration-200 hover:text-blue-500">خانه</Link>
            <span>/</span>
            <Link href={secondLink} className="text-blue-400 transition-all duration-200 hover:text-blue-500">{secondTitle}</Link>
        </div>
    );
}

export default BreadCrumb;