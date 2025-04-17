"use client"
import { useState } from "react";
import Image from "next/image";

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
        <div onClick={() => setIsHovered(!isHovered)} className={`${isHovered ? 'w-full' : 'w-auto'} ${!isHovered ? 'items-center' : 'flex flex-row'}
        hover:border-gray-600 rounded-lg shadow-sm hover:bg-gray-600 ${isHovered ? 'pl-15' : 'p-8'} h-full duration-300 ease-in-out`}>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">{film.title}</h2>
                <Image src={film.img_link} alt={film.title} width={100} height={100} className="w-50 h-full object-cover rounded-md m-5"/>
                <p>{film.release_date}</p>
                {/* <p>{film.category}</p> */}
                <p>{film.global_rate}</p>
            </div>
            {isHovered && (
                <div className="m-10 p-1 h-full w-sm">
                    <p className="text-lg w-sm">{film.description}</p>
                </div>
            )}
        </div>
    )
}
