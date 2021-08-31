import Link from "next/link"
import Footer1 from "../../Comps/Layouts/Footers/Footer1"
import Layout1 from "../../Comps/Layouts/Layout1/Layout"
import Layout2 from "../../Comps/Layouts/Layout2/Layout"
import SSG from "../../Comps/Render_Notify/SSG"
import styles from "../../styles/json_fetching.module.css"

const User_Data = ({ userdataprop }) => {
  return (
    <div>
      <h1>All Users</h1>
      <SSG />
      {userdataprop.map((eachuser) => (
        <Link href={"/json_fetching/" + eachuser.id} key={eachuser.id}>
          <a className={styles.single_user_data}>
            <h3>{eachuser.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  // https://jsonplaceholder.typicode.com/users
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //parse json into array
  const data = await res.json()

  return {
    props: {
      userdataprop: data,
    },
  }
}
User_Data.layout = (page) => (
  <>
    <Layout1>
      <Layout2>{page}</Layout2>
    </Layout1>
    <Footer1 />
  </>
)

export default User_Data
