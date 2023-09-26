/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {

    const { id, title, description, img, color, title_color, title_bg, description_color } = card || {}

    return (
        <div className="">
            <Link to={`/cards/${id}`} >
                <div className="card h-full   shadow-xl rounded-lg " >
                    <img src={img} alt="" />
                    <div className="card-body" style={{ backgroundColor: color }}>
                        <button className="btn w-1/3 md:w-3/5 lg:w-3/5  card-title  normal-case " style={{ backgroundColor: title_bg, color: title_color }}>{title}</button>
                        <p className="text-xl font-semibold " style={{ color: description_color }}>{description}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;