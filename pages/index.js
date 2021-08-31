import Layout1 from "../Comps/Layouts/Layout1/Layout"

const HomePage = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}
HomePage.layout = (page) => <Layout1>{page}</Layout1>
export default HomePage
