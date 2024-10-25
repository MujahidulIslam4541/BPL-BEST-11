/* eslint-disable react/prop-types */
import SelectPlayer from "./SelectPlayer";


export default function Selected({ selectedPlayers, handleRemove }) {
    return (
        <div>
            <h1 className="text-xl font-bold">Selected Players({selectedPlayers.length}/6)</h1>

            {
                selectedPlayers.map((playerData, idx) => <SelectPlayer
                    key={idx}
                    playerData={playerData}
                    handleRemove={handleRemove}
                ></SelectPlayer>)
            }

            <button className=" bg-yellow-400 p-2 rounded-md border-none mt-4 font-bold">Add More Player</button>
        </div>
    )
}
