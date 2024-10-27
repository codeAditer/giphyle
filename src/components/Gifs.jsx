import React from 'react'
import { Link } from 'react-router-dom'

export default function Gifs({ gif, hover = true }) {
    return (
        <Link to={`/${gif.type}s/${gif.slug}`} key={gif.id}>
            <div className="relative group aspect-video">
                <img
                    src={gif?.images?.fixed_width.webp}
                    alt={gif?.title}
                    className='w-full object-cover px-0.5 py-0.5 rounded-md transition-all duration-300' />
                {hover && (
                    <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2">
                        <img
                            src={gif?.user?.avatar_url}
                            alt={gif?.user?.display_name}
                            className="h-8" />
                        <span>{gif?.user?.display_name}</span>
                    </div>
                )}
            </div>

        </Link>
    );
}
