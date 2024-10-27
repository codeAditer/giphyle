import React from 'react'
import { HiArrowTrendingUp } from "react-icons/hi2";

import { GifState } from '../context/gif-context';

const filters = [
    {
        title: "GIFs",
        value: "gifs",
        background:
            "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
    },
    {
        title: "Stickers",
        value: "stickers",
        background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
    },
    {
        title: "Text",
        value: "text",
        background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
    },
];

const FilterGif = ({ alignleft, showTrending }) => {
    const { filter, setFilter } = GifState();

    return (
        <div className={`flex gap-3 my-3 ${alignleft ? "" : "justify-end"} ${showTrending ? "flex-col sm:flex-row sm:items-center justify-between" : ""}`}>
            {
                showTrending && (
                    <div className="flex items-center gap-2">
                        <HiArrowTrendingUp size={25} className="text-teal-400" />
                        <span className="font-semibold text-gray-400">Trending</span>
                    </div>
                )
            }

            <div className="flex min-w-80 rounded-full bg-gray-800">
                {filters.map((f) => (
                    <span
                        key={f.title}
                        onClick={() => setFilter(f.value)}
                        className={`w-1/3 py-2 text-center font-semibold rounded-full cursor-pointer ${filter === f.value ? f.background : ""
                            }`}>
                        {f.title}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default FilterGif
