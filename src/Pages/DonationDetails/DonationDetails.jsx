import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailCard from "./DonationDetailCard";

const DonationDetails = () => {

    const [card, setCard] = useState()

    const {id} = useParams()
    

    const cards = useLoaderData()
    
    useEffect(() => {
        const findCard = cards?.find((card) => card.id == id)

        

        setCard(findCard)
    }, [id, cards]);

    

    return (
        <div>
            <DonationDetailCard card={card}></DonationDetailCard>
        </div>
    );
};

export default DonationDetails;