"use client"
import { useState } from "react";

interface Film {
    id: number;
    title: string;
    img_link: string;
    category: string;
    global_rate: number;
    release_date: number;
    created_at: string;
    description: string;
    // Add other film properties as needed
    // [key: string]: any; // This allows for additional properties
}

interface TileProps {
    film: Film;
}

export default function Tile({ film }: TileProps) {

    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div onClick={() => setIsHovered(!isHovered)} className={`${isHovered ? 'w-full' : 'w-100'}  ${!isHovered ? 'items-center' : 'flex flex-row'} border rounded-lg shadow-sm hover:shadow-md p-1 h-100 duration-300 ease-in-out`}>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">{film.title}</h2>
                {/* Add more film information display as needed */}
                <img src={film.img_link} alt={film.title} className="w-50 h-full object-cover rounded-md m-5" />
                <p>{film.release_date}</p>
                {/* <p>{film.category}</p> */}
                <p>{film.global_rate}</p>
            </div>
            {isHovered && (
                <div className="flex flex-col m-10 p-1 h-100 shadow-sm hover:shadow-md duration-300 ease-in-out">
                    <p>{film.description}</p>
                </div>
            )}
        </div>
    )
}
