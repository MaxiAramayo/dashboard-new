import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/AuthContext";



export default function Home() {

  const {user} = useAuth()

  console.log(user)

  return <Layout>ESTA SERA LA LANDING PAGE</Layout>;
}
