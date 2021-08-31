import Head from "next/head"
import Footer1 from "../Comps/Layouts/Footers/Footer1"
import Layout1 from "../Comps/Layouts/Layout1/Layout"
import SSG from "../Comps/Render_Notify/SSG"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Homepage | Official</title>
        <meta name="keywords" content="SEO_stuff_here json fetch users" />
        <meta name="description" content="Description for search engines." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div></div>
      <div>
        <p>Hello World</p>
        <SSG />
      </div>
    </>
  )
}
HomePage.layout = (page) => (
  <>
    <Layout1>{page}</Layout1>
    <Footer1 />
  </>
)

export default HomePage
