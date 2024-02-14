import Link from "next/link";

const BreadCrumb = ({secondTitle, secondLink, title}) => {
    return (
        <div className="flex justify-start items-center gap-1">
            <Link href={"/"} className="text-blue-400 transition-all duration-200 hover:text-blue-500">خانه</Link>
            <span>/</span>
            <Link href={secondLink} className="text-blue-400 transition-all duration-200 hover:text-blue-500">{secondTitle}</Link>
            <span>/</span>
            <div>{title}</div>
        </div>
    );
}

export default BreadCrumb;