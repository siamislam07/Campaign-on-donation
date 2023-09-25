import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header&Navbar/Banner";
import Cards from "../../Components/Header&Navbar/Cards/DonationCards";

const Home = () => {
    const cards = useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Cards cards={cards}></Cards> 
        </div>
    );
};

export default Home;