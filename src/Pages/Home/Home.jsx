import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header&Navbar/Banner";
import Cards from "../../Components/Header&Navbar/Cards/DonationCards";
import { useState } from "react";

const Home = () => {
    const allCards = useLoaderData()
    const [filteredCards, setFilteredCards] = useState(allCards)


    return (
        <div>
            <Banner cards={allCards} setFilteredCards={setFilteredCards}></Banner>
            <Cards cards={filteredCards}></Cards> 
        </div>
    );
};

export default Home;