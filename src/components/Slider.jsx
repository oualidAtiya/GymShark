export default function Slide()
{
    return(
        <main className="md:px-4">
            <div className="bg-[url('slide.webp')]  bg-top h-[80vh] text-white  flex flex-col justify-end p-5">
                <h2 className="w-full leading-[70px] text-6xl font-bold mb-3">UP TO 50% OFF* LAST CHANCE LOOKS</h2>
                <p className="text-xl mb-7">Time to pick up the gym kit you've been eyeing all season. Make it count. *selected styles only</p>
                <button className="cursor-pointer rounded-full text-black font-bold text-xl w-full py-3 mb-3 bg-white">Shop Women</button>
                <button className="cursor-pointer rounded-full text-black font-bold text-xl w-full py-3 bg-white">Shop Men</button>
            </div>
        </main>
    )
}