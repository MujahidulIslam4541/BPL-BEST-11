/* eslint-disable react/prop-types */


export default function SelectPlayer({ playerData ,handleRemove}) {
    const { image, name, battingType } = playerData
    return (
        <div className="border mt-4 rounded-lg px-4 py-2 items-center flex justify-between shadow-sm">
            <div className="flex gap-4">
                <img className="w-12 rounded-md" src={image} alt="" />
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-gray-500">{battingType}</p>
                </div>
            </div>

            <div>
               <button onClick={()=>handleRemove(playerData.playerId)}> <i className="fa-solid fa-trash-can text-red-500"></i></button>
            </div>
        </div>
    )
}
