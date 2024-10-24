

export default function Navbar() {
    return (
        <div className="">
            <div className="navbar block md:flex md:justify-between">
                <div className="">
                    <a className=""><img src="/public/logo.png" alt="" /></a>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 flex gap-4 text-sm items-center">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <button className="border-2 px-4 py-2 rounded-md font-semibold">0 Coin <i className="fa-brands fa-bitcoin text-yellow-500"></i></button>
                    </ul>
                </div>
            </div>


        </div>
    )
}
