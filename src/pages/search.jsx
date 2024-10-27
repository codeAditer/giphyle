import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-context';
import FilterGif from '../components/FilterGif';
import Gifs from '../components/Gifs';


const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { gf, filter } = GifState();
    const { query } = useParams();

    const fetchSearchResults = async () => {
        try {
            const { data } = await gf.search(query, {
                sort: "relevant",
                lang: "en",
                type: filter,
                limit: 20,
            });

            setSearchResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    useEffect(() => {
        fetchSearchResults();
    }, [filter, query]); // Include query as a dependency

    return (
        <div className="my-4">
            <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
            <FilterGif alignLeft={true} />
            {searchResults.length > 0 ? (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
                    {searchResults.map((gif) => (
                        <Gifs gif={gif} key={gif.id} />
                    ))}
                </div>
            ) : (
                <span>
                    No GIFs found for {query}. Try searching for Stickers instead?
                </span>
            )}
        </div>
    );
};


export default SearchPage;