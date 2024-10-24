import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"


function App() {


  return (
    <>


      <section className="w-11/12 mx-auto">
        {/* Navbar section */}
        <Navbar></Navbar>

        {/* Banner section */}
        <Banner></Banner>
      </section>




      <Footer></Footer>


    </>
  )
}

export default App
