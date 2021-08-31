import Link from "next/link"

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
    </div>
  )
}

export default NotFound
