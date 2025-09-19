export default function WomenCategories()
{
    return(
        <>
            <h2 className="m-4 mt-8 mb-2 font-semibold text-[27px] uppercase">Woman's Catgories</h2>
            <div className="p-4 h-[360px] lg:h-[400px] flex space-x-3 lg:justify-between xl:px-20  overflow-auto">
                <div className="bg-[url('./women.webp')] h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-black py-3 text-center w-full bg-opacity-70 ">Coats & Jackets</h3>
                    <button className=" mt-10 text-sm  bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
                <div className="bg-[url('./women.webp')] h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-black py-3 text-center w-full bg-opacity-70 ">Coats & Jackets</h3>
                    <button className=" mt-10 text-sm  bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
                <div className="bg-[url('./women.webp')] h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-black py-3 text-center w-full bg-opacity-70 ">Coats & Jackets</h3>
                    <button className=" mt-10 text-sm  bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
                <div className="bg-[url('./women.webp')] h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-black py-3 text-center w-full bg-opacity-70 ">Coats & Jackets</h3>
                    <button className=" mt-10 text-sm  bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
            </div>
        </>
    )
}