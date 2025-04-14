interface Film {
    id: number;
    title: string;
    img_link: string;
    category: string;
    global_rate: number;
    release_date: number;
    created_at: string;
    // Add other film properties as needed
    // [key: string]: any; // This allows for additional properties
}

interface TileProps {
    film: Film;
}

export default function Tile({ film }: TileProps) {
    return (
        <div className="flex flex-col items-center justify-center p-2 h-100 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">{film.title}</h2>
            {/* Add more film information display as needed */}
            <img src={film.img_link} alt={film.title} className="w-50 h-full object-cover rounded-md m-5" />
            <p>{film.release_date}</p>
            {/* <p>{film.category}</p> */}
            <p>{film.global_rate}</p>
        </div>
    )
}
