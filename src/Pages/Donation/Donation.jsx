import { useEffect, useState } from "react";
import DonationCmpltCard from "./DonationCmpltCard";

const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [noDonations, setNoDonations] = useState(false);

    const [isShow, setIsShow] = useState(4)

    useEffect(() => {

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if (donationItems) {
            setDonations(donationItems)
        }
        else {
            setNoDonations("No Donation Completed yet!")
        }

    }, [])
    

    // const handleRemove = () => {
    //     localStorage.clear()
    //     setDonations([])
    //     setNoDonations("No Donation Completed yet!")
    // }

    return (
        <div>
            {noDonations ? <p className=" h-[80vh] flex justify-center items-center text-4xl"> {noDonations}</p> : <div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5 ">
                    {
                        donations.slice(0, isShow).map(donations => <DonationCmpltCard key={donations.id} donations={donations}></DonationCmpltCard>)
                    }

                </div>
                {/* {donations.length > 0 && <button onClick={handleRemove} className="px-3 py-4 rounded-lg block mx-auto bg-slate-200 mt-10">Delete from the storage</button>} */}

                <div className={isShow === donations.length ? 'hidden' : ''}>
                    {donations.length > 4 && <button onClick={() => setIsShow(donations.length)} className="px-3 py-4 rounded-lg block mx-auto  mt-4 shadow-xl ">See All</button>}
                </div>
            </div>}
        </div>
    );
};

export default Donation;