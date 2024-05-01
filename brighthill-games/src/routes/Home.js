import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home() {

  return (
    <>
      <Nav />
      <div style={{ padding: 1500, backgroundColor: "darkblue" }}>
        <h1>hello this is home</h1>
      </div>
      <Footer />
    </>
  )
}

export default Home;