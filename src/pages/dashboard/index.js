import Link from "next/link";

export default function Page() {
    return <div>
    <h1>Dashboard</h1>
    <Link href="/">Home</Link>
    <Link href="/about">about</Link>
  </div>
  }