
const DonationCard = ({card}) => {

    const {id, title, description, img, color, title_color, title_bg, description_color} = card || {}

    return (
        <div className="">
            <div className="card h-full   shadow-xl rounded-sm" onClick={()=>console.log('clickked')}>
                <img src={img} alt="" />
                <div className="card-body" style={{backgroundColor:color}}>
                    <button className="btn w-1/3 md:w-3/5 lg:w-3/5  card-title  normal-case " style={{backgroundColor:title_bg, color:title_color}}>{title}</button>
                    <p className="text-xl font-semibold " style={{color:description_color}}>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DonationCard;