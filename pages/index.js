import Footer1 from "../Comps/Layouts/Footers/Footer1"
import Layout1 from "../Comps/Layouts/Layout1/Layout"

const HomePage = () => {
  return (
    <>
      <div></div>
      <div>
        <p>Hello World</p>
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
