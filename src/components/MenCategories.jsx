export default function MenCategories()
{
    return(
        <>
            <h2 className="m-4 mt-8 mb-2 font-semibold text-[27px] uppercase">Men's Catgories</h2>
            <div className="p-4 h-[360px] lg:h-[400px] flex space-x-3 lg:justify-between xl:px-20  overflow-auto">
                <div className="bg-[url('./men.webp')] rounded border-2 border-black h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-blue-900 py-3 text-center w-full bg-opacity-70 border-y border-white">Printed T-Shirts</h3>
                    <button className=" mt-10 text-sm   bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
                <div className="bg-[url('./men.webp')] rounded border-2 border-black h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-green-900 py-3 text-center w-full bg-opacity-70 border-y border-white">Printed T-Shirts</h3>
                    <button className=" mt-10 text-sm   bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
                <div className="bg-[url('./men.webp')] rounded border-2 border-black h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-yellow-900 py-3 text-center w-full bg-opacity-70 border-y border-white">Printed T-Shirts</h3>
                    <button className=" mt-10 text-sm   bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>
                <div className="bg-[url('./men.webp')] rounded border-2 border-black h-full min-w-[230px] lg:min-w-[280px]  bg-contain repeat pb-10 flex flex-col justify-end items-center">
                    <h3 className="font-medium text-2xl  text-white bg-red-900 py-3 text-center w-full bg-opacity-70 border-y border-white">Printed T-Shirts</h3>
                    <button className=" mt-10 text-sm   bg-white py-3 rounded-full px-6">Shop Now</button>
                </div>

            </div>
        </>
    )
}