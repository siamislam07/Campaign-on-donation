/* eslint-disable react/prop-types */

import swal from "sweetalert";

const DonationDetailCard = ({ card }) => {

    const { id, title, description, img, color, title_color, title_bg, description_color, donation_img, price, donation_description, donation_btn_bg } = card || {}

    const handleAddToDonation = () => {

        const addedDonationsArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if (!donationItems) {
            addedDonationsArray.push(card)
            localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
            swal("Good job!", "Donation Completed", "success");
        }
        else {

            const isExist = donationItems.find(card => card.id == id)

            if (!isExist) {
                addedDonationsArray.push(...donationItems, card)
                localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
                swal("Good job!", "Donation Completed", "success");
            }
            else{
                swal("Already Added", "Add AnotherOne", "error");
            }


        }

    }

    return (
        <div className="">
            <div className="w-[1320px] h-[700] mx-auto relative ">
                <img src={img} className="w-full " alt="" />
                <div className="bg-black bg-opacity-50   absolute top-[44.5rem] left-[2.5rem]  w-full h-[109px] ml-[-40px] ">
                    <div className="">
                        <button onClick={handleAddToDonation} className="btn text-xl  font-semibold normal-case border-none  mt-10 ml-8" style={{ backgroundColor: donation_btn_bg, color: "white" }}>Donate ${price}</button>
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-[100px] space-y-5">
                <h1 className="text-4xl font-bold">{description}</h1>
                <p className="text-base font-normal">{donation_description}</p>
            </div>
        </div>
    );
};

export default DonationDetailCard;