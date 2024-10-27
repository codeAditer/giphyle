import React, { useEffect } from 'react'
import { GifState } from '../context/gif-context'
import banner from '../assets/banner.gif'
import Gifs from '../components/Gifs';
import FilterGif from '../components/FilterGif';


export default function Home() {

    const { gf, gifs, setGifs, filter } = GifState();

    const fetchTrendingGIFs = async () => {

        const { data: gifs } = await gf.trending({
            limit: 50,
            type: filter,
            rating: "g"
        });
        setGifs(gifs)
    }



    useEffect(() => {
        fetchTrendingGIFs()
    }, [filter])

    return (
        <div>
            <img src={banner}
                alt="earth banner"
                className='mt- 1 rounded w-full h-15' />


            {/*Filter Gif */}
            <FilterGif showTrending />

            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-1 mt-3 " >
                {gifs.map((gif) => {
                    return <Gifs gif={gif} key={gif.id} />
                })}</div>
        </div>
    )
}

