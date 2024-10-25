import { useEffect } from "react"
import { useState } from "react"
import Player from "./Player"


export default function AllComponents() {
    const [AllComponents, setAllComponents] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setAllComponents(data))
    }, [])
    return (
        <div className="md:grid md:grid-cols-3 gap-2 mt-20">
           {
            AllComponents.map(player=> <Player key='playerId' player={player}></Player>)
           }
        </div >
    )
}
