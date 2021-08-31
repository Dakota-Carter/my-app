import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import SSG from "../Comps/Render_Notify/SSG"

//Because default 404 page is 💩
const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
      //set timer to redirect
    }, 6500)
  }, [])

  return (
    <div className="not-found">
      <h1>Oops....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
      <SSG />
    </div>
  )
}

export default NotFound
