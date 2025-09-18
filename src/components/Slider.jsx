export default function Slide()
{
    return(
        <main className="md:px-4">
            <div className="bg-[url('slide.png')]  bg-top h-[80vh] md:h-[60vh] text-white  flex flex-col justify-end p-5 md:justify-center ">
                <h2 className="w-full leading-[70px] text-6xl font-bold mb-3 md:text-center lg:text-start lg:w-[50%]">UP TO 50% OFF* LAST CHANCE LOOKS</h2>
                <p className="text-xl mb-7   md:w-[50%]  lg:text-start md:text-center md:mx-auto lg:mx-0">Time to pick up the gym kit you've been eyeing all season. Make it count. *selected styles only</p>
                <div className="md:flex md:justify-center lg:justify-start md:space-x-3">
                    <button className="cursor-pointer rounded-full text-black font-bold text-xl w-full md:w-[40%] lg:w-[20%] py-3 mb-3 md:mb-0  bg-white">Shop Women</button>
                    <button className="cursor-pointer rounded-full text-black font-bold text-xl w-full md:w-[40%] lg:w-[20%] py-3 bg-white">Shop Men</button>
                </div>
            </div>
        </main>
    )
}