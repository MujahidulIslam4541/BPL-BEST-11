/* eslint-disable react/prop-types */



export default function Banner({handleButtonAddedCoin}) {
  
    return (
        <div>
            <div
                className="hero min-h-[85vh] bg-black rounded-3xl"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/X28VYJs/bg-shadow.png')",
                }}>
                <div className="rounded-3xl"></div>
                <div className="hero-content text-white text-center">
                    <div className="">
                        <div className="flex justify-center mb-4">
                            <img src="/public/banner-main.png" alt="" />
                        </div>
                        <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 ">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button onClick={handleButtonAddedCoin} className="btn bg-yellow-300 border-none  font-semibold">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
