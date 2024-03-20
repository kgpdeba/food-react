import React, { useState } from "react";
import Food from "./Food";

const FoodItem = () => {
    const [data] = useState(Food)
    return (
        <>
            <nav className="flex flex-col justify-center items-center gap-5 bg-red-400 mb-16">
                <div className="mt-4 font-medium text-2xl">Food Menu Item</div>
                <div className=" flex gap-5 mb-5">
                    <button className="py-2 px-3 bg-yellow-300 rounded">All Food</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Fast Food</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Veg</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Non Veg</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">BreakFast</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Lunch</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Dinner</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Tea</button>
                    <button className="py-2 px-3 bg-yellow-300 rounded">Coffee</button>
                </div>
            </nav>

            <div className="flex flex-wrap gap-5 justify-center items-center m-4">
                {
                    data.map((item) => {
                        const { img, name, catagory, price } = item;
                        return (
                         
                         <div className="flex flex-row justify-center items-center bg-white  w-[20%] p-4 gap-4">
                                    <div className="w-[30%] ">

                                        <img src={img} alt="" className="h-[5rem] w-[5rem] bg-black" />
                                    </div>
                                    <div className="w-[70%]">
                                        <p>{name}</p>
                                        <p>{catagory}</p>
                                        <div className="flex gap-10">
                                            <p>{price}</p>
                                            <span class="inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">Order Now</span>
                                        </div>

                                    </div>
                                </div>       
                            
                        )
                    })
                }
            </div>
        </>
    )
}

export default FoodItem