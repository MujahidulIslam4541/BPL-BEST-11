import { useState } from "react"
import AllComponents from "./Components/AllComponents/AllComponents"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"


function App() {




  // set coin in navbar
  const [price, setPrice] = useState(0)

  const handleButtonAddedCoin = () => {
    const coinAdded = 6000000;
    setPrice(coinAdded)
  }

  const handleIncisePrice = (dolor) => {

    if (dolor > price) {
      alert('player is not for available price')
    }
    else {
      setPrice(price - dolor)
    }


  }

  // Added selected players
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleSelectedPlayer = player => {

    const isExist = selectedPlayers.find(selectPlayer => selectPlayer.playerId === player.playerId)
    if (!isExist) {
      handleIncisePrice(player.biddingPrice)
      setSelectedPlayers([...selectedPlayers, player])
    }
    else {
      alert('Player Already Selected')
    }
  }



  // remove player info 

  const [deletedPlayer, setDeletedPlayer] = useState([])
  const handleRemove = id => {
    // find the remove player
    const removePlayer = selectedPlayers.find(player => player.playerId === id)

    const deletedInfo = selectedPlayers.filter(player => player.playerId !== id)
    setSelectedPlayers(deletedInfo)
    setDeletedPlayer([...deletedPlayer, removePlayer])
  }

  // console.log(selectedPlayers)




  // Is Active button functionality
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'Available'
  })

  const handleIsActive = (status) => {
    if (status == 'Available') {
      setIsActive({
        cart: true,
        status: 'Available'
      })
    }
    else {
      setIsActive({
        cart: false,
        status: 'Selected'
      })
    }
  }

  return (
    <>

      <section className="w-11/12 mx-auto">
        {/* Navbar section */}
        <Navbar price={price}></Navbar>

        {/* Banner section */}
        <Banner handleButtonAddedCoin={handleButtonAddedCoin}></Banner>

        <AllComponents
          handleSelectedPlayer={handleSelectedPlayer}
          isActive={isActive}
          handleIsActive={handleIsActive}
          selectedPlayers={selectedPlayers}
          handleRemove={handleRemove}
        ></AllComponents>
      </section>




      <Footer></Footer>


    </>
  )
}

export default App
