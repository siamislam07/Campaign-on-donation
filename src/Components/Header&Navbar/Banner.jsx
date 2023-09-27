/* eslint-disable react/prop-types */

import { useState } from "react";

const Banner = ({ cards }) => {

    const [search, setSearch] = useState('')
    const [filteredCards, setFilteredCards] = useState([])

    const handleSearch = () => {
        const filtered = cards.filter(card => cards.title.toLowerCase().includes(search.toLowerCase()))
        setFilteredCards(filtered)
    }
    return (
        <div>
            <div className=" relative  mb-16" >
                <div className="opacity-20">
                    <img src="https://i.ibb.co/0XPD1Yy/banner.jpg" alt="banner" border="0" />
                </div>
                <div className="absolute bottom-[36%] left-[28%]">
                    <h1 className="text-5xl font-bold text-[#0B0B0B] ">I Grow By Helping People In Need</h1>
                    <div className="form-control">
                        <div className="input-group  justify-center mt-11">
                            <input type="text" placeholder="Search…" className="input input-bordered pr-32" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <button onClick={handleSearch} className="btn btn-square px-8 bg-[#FF444A] text-white normal-case text-base">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;