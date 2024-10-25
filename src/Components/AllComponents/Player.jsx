/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function Player({ player }) {
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = player
    return (
        <div className="md:grid md:grid-cols-1 bg-slate-100 border-2 p-4 rounded-lg">
            <img className="w-full h-[250px] rounded-md mb-2" src={image}></img>
            <h2 className="text-xl font-bold"><i className="fa-solid fa-user"></i>  {name}</h2>
            <div className="flex justify-between pb-2 items-center border-b-2">
                <h3 className="text-gray-500"> <i className="fa-solid fa-flag"></i> {country}</h3>
                <button className="btn">{role}</button>
            </div>
            <h2 className="text-xl font-bold">Rating</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
                <h4 className="font-bold">{battingType}</h4>
                <h4>{bowlingType}</h4>
                <h2 className="font-bold">Price: {biddingPrice}$</h2>
                <button>Choose Player</button>
            </div>
        </div>
    )
}
