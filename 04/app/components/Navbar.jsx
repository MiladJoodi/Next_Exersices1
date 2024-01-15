import Link from "next/link";
import next from '/next .svg'


export default function Navbar() {
    return (
        <nav>
            <h2>This is navbar</h2>
            <Link href="/">Dashboard</Link>
            <br />
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
