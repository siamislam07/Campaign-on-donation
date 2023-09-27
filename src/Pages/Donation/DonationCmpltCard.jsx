import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const DonationCmpltCard = ({ donations }) => {


    const navigate = useNavigate()

    const { id, img, color, title_bg, title_color, title, price, donation_img, description, description_color, donation_btn_bg } = donations || {}

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img className="h-[17rem] md:h-[17rem] lg:h-[17rem] " src={donation_img} alt="img" /></figure>
                <div className="card-body " style={{ backgroundColor: color }}>
                    <div className="card-actions ">
                        <Link to="">
                            <button className="btn  font-semibold normal-case border-none" style={{ backgroundColor: title_bg, color: title_color }}>{title}</button>
                        </Link>
                    </div>
                    <h2 className="card-title text-2xl font-semibold" >{description}</h2>
                    <p className="text-lg font-semibold" style={{ color: description_color }}>${price}.00</p>
                    <div className="card-actions ">
                        <Link to="">
                            <button onClick={()=> navigate(-1)} className="btn  font-semibold normal-case border-none" style={{ backgroundColor: donation_btn_bg, color: "white" }}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCmpltCard;