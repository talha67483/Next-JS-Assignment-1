import Link from "next/link"
export default function Home(){
  return(
    <div>
      <ul>
        <li className="font"><Link href="/" >Home</Link> </li>
        <li className="font"><Link href="/about" target="_blank">About</Link> </li>
        <li className="font"><Link href="/contact" target="_blank">Contact</Link> </li>
        <li className="font"><Link href="/services" target="_blank">Services</Link> </li>
        <li className="font"><Link href="/services/nested-page" target="_blank">Nested Services</Link> </li>
        
      </ul>

      <h2 className="bgc">This is Home Page</h2>
  </div>
  )
}

