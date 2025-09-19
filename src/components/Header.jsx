export default function Header()
{
    return(
        <header>
            <div className="bg-gray-100 text-center py-3 text-sm">
                <p>Get 10% off your first order when you sign up .</p>
            </div>
            <div className="flex justify-between items-center px-5 pt-8 pb-2" >
                <div className="text-center h-full">
                    <i className="fa-solid fa-bars text-2xl"></i>
                </div>
                <div className="ml-5">
                    <img src="logo.png" alt="logo" />
                </div>
                <div className="flex space-x-3">
                    <div className="text-center h-full">
                        <i className="fa-solid fa-user text-2xl"></i>
                    </div>
                    <div className="text-center h-full relative">
                        <i className="fa-solid  fa-cart-shopping  text-2xl after:absolute after:bottom-5 after:left-5 after:content-['2'] after:text-xs after:border-2 after:border-white after:text-white after:font-light  after:bg-blue-600 after:rounded-full after:w-[18px] after:h-[18px]"></i>
                    </div>
                </div>
            </div>
            <div className="flex py-3 px-5 justify-center border-b border-gray-100">
                <div className="bg-gray-100 p-3 border-0 rounded-l-full text-center text-xl  text-gray-500">
                    <i className="fa-solid fa-magnifying-glass pt-2 pl-3"></i>
                </div>
                <input disabled  className="w-[80%] cursor-pointer p-4 outline-none border-0 rounded-r-full bg-gray-100 placeholder:text-md placeholder:text-gray-400" type="text" placeholder="What are you lookking for today?" />
            </div>
        </header>
    )
}