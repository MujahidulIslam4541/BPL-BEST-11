

export default function Footer() {
    return (
        <div className="mt-72">

            <div className="border-2 w-11/12 mx-auto p-2 rounded-3xl bg-white absolute z-10 -mt-40 md:ml-12">
                <div
                    className="hero py-10 rounded-3xl "
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/X28VYJs/bg-shadow.png')",
                    }}>
                    <div className=""></div>
                    <div className="hero-content  text-center ">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-3xl font-bold">Subscribe to our Newsletter</h1>
                            <p className="mb-5">
                            Get the latest updates and news right in your inbox!
                            </p>
                            <input className="px-6 py-1 rounded-md border-2" type="email" name="" id="" placeholder="Enter Your E-mail"/>
                            <button className="ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1 rounded-md font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>



            <div className=" bg-[#06091A] text-white px-16 pt-40 relative ">
            <div className="flex justify-center mb-10"><img src="https://i.ibb.co.com/pztGfHD/logo-footer.png" alt=""/></div>
                <footer className="footer text-gray-300 mb-8">
                    <nav>
                        <h6 className="text-white font-bold">About Us</h6>
                        <p className="w-60">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="text-white font-bold">Quick Links</h6>
                        <a className="link link-hover ">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <form>
                        <h6 className="text-white font-bold">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item" />
                                <button className="px-4 text-black bg-gradient-to-r from-yellow-400 to-pink-500  join-item font-semibold">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <hr />
                <div className="text-center"><p className="py-4">@2024 Your Company All Rights Reserved.</p></div>

            </div>

        </div>



    )
}
