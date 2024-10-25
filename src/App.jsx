import AllComponents from "./Components/AllComponents/AllComponents"
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
    
    <AllComponents></AllComponents>
      </section>




      <Footer></Footer>


    </>
  )
}

export default App
