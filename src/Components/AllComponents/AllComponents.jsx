/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useState } from "react"
import Player from "./Player"
import Selected from "./Selected"


export default function AllComponents({ handleIsActive, isActive,handleSelectedPlayer,selectedPlayers ,handleRemove}) {
    const [AllComponents, setAllComponents] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setAllComponents(data))
    }, [])
    return (
        <div>

            <div className="flex justify-end mt-10">
                <div className="flex gap-4">
                    <button className={`${isActive.cart ? 'bg-yellow-300 btn' : 'btn'}`} onClick={() => handleIsActive('Available')}>Available</button>
                    <button className={`${isActive.cart ? 'btn' : 'bg-yellow-300 btn'}`} onClick={() => handleIsActive('Selected')}>Selected {selectedPlayers.length}</button>
                </div>
            </div>



            {isActive.cart ? 
            
            <div>
                <h2 className="text-xl font-bold">Available Players</h2>
                <div className="md:grid md:grid-cols-3 gap-4 mt-10">
                {
                    AllComponents.map(player => <Player key='playerId' handleSelectedPlayer={handleSelectedPlayer} player={player}></Player>)
                }
            </div>
            </div > : 

            <Selected  selectedPlayers={selectedPlayers} handleRemove={handleRemove}></Selected>}
        </div>
    )
}
