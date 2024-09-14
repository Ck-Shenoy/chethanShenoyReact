import { useState } from "react";
import { RES_LIST } from "../utils/constants"
import GetCards from "./GetCards"

const Body = () =>
{
    let [restroList, setRestroList] = useState(RES_LIST);
    let [boolVar, setBoolVar] = useState(true);
    let prevRestroList = RES_LIST;
    return (
        <div className='body'>
            <div className="top-rated-res">
                <button className="top-rated-btn" onClick={() =>
                {
                    if (boolVar) restroList = restroList.filter(res => res.info.avgRating > 4.5);
                    else restroList = prevRestroList;
                    setRestroList(restroList);
                    setBoolVar(!boolVar);
                }}>Top Rated</button>
            </div>
            <div className='res-card-container'>
                {restroList.map(restaurant =>
                {
                    return <GetCards key={restaurant.info.id}
                        resName={restaurant.info.name}
                        cuisines={restaurant.info.cuisines.join(", ")}
                        avgRating={restaurant.info.avgRating}
                        cloudinaryImageId={restaurant.info.cloudinaryImageId}
                        costForTwo={restaurant.info.costForTwo} />
                })}
            </div>
        </div>
    )
};

export default Body;