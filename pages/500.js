import Link from "next/link"
import SSG from "../Comps/Render_Notify/SSG"

const NotFound = () => {
  return (
    <div class="not-found">
      <h1>Oops....</h1>
      <h2>There was an error when trying to fulfill the request.</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
      <SSG />
    </div>
  )
}

export default NotFound
