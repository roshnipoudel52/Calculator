import React from 'react'

export default function Herosection() {
    return (
        <div>
            <header
                id="home"
                className="relative w-full max-w-[1500px] mx-auto overflow-hidden"
            >
                {/* Background Image */}
                <img
                    src="https://blog.architizer.com/wp-content/uploads/Heydar-ALiyev-Center-in-Baku_cropped.jpg"
                    alt="Architecture"
                    className="w-full h-[800px] object-cover"
                    width="1500"
                    height="800"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                        <span className="bg-black bg-opacity-75 px-3 py-1">BR</span>{" "}
                        <span className="text-gray-300 hidden sm:inline">Architects</span>
                    </h1>
                </div>
            </header>
        </div>
    )
}
