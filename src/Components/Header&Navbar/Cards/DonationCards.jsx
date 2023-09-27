/* eslint-disable react/prop-types */

import DonationCard from "./DonationCard";

const Cards = ({cards}) => {
    return (
        <div className="mb-8">
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {
                    cards?.map(cards=><DonationCard key={cards.id} card={cards}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Cards;