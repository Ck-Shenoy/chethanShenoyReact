import { useEffect, useState } from "react";
import GetCards from "./GetCards"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>
{
    let [restroList, setRestroList] = useState("");
    let [boolVar, setBoolVar] = useState(true);
    let [searchText, setSearchText] = useState("");
    let [prevRestroList, setPrevRestroList] = useState("");

    useEffect(() =>
    {
        fetchRestroList();
    }, [])

    const fetchRestroList = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        const restaurantList = res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestroList(restaurantList);
        setPrevRestroList(restaurantList);
    }

    return !restroList?.length ? <Shimmer /> : (
        <div className='body'>
            <div className="filter-container">
                <button className="top-rated-btn" onClick={() =>
                {
                    if (boolVar)
                        restroList = restroList.filter(res => res.info.avgRating > 4.5);
                    else restroList = prevRestroList;
                    setRestroList(restroList);
                    setBoolVar(!boolVar);
                }}>Top Rated</button>
                <div className="search">
                    <input type="text"
                        placeholder="Search by restaurant name"
                        className="search-text"
                        input={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={() =>
                    {
                        const newRestroList = prevRestroList.filter(restaurant =>
                        {
                            console.log(restaurant.info.name, restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        // console.log(newRestroList);
                        setRestroList(newRestroList);
                    }}>Search</button>
                </div>
            </div>
            <div className='res-card-container'>
                {restroList.map(restaurant =>
                {
                    return <Link
                        key={restaurant.info.id}
                        to={"/restaurant/" + restaurant.info.id}><GetCards key={restaurant.info.id}
                            resName={restaurant.info.name}
                            cuisines={restaurant.info.cuisines.join(", ")}
                            avgRating={restaurant.info.avgRating}
                            cloudinaryImageId={restaurant.info.cloudinaryImageId}
                            costForTwo={restaurant.info.costForTwo} /></Link>
                })}
            </div>
        </div>
    )
};

export default Body;