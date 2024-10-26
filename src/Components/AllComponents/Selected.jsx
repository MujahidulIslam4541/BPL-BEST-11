/* eslint-disable react/prop-types */
import SelectPlayer from "./SelectPlayer";


export default function Selected({ selectedPlayers, handleRemove, isActive, handleIsActive }) {
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

            <button className={`${isActive.cart ? 'btn mt-4' : 'btn bg-yellow-300 mt-4'}`} onClick={() => handleIsActive('Available')}>Add More players</button>
        </div>
    )
}
