import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU } from "../utils/constants";

const RestaurantMenu = () =>
{
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>
    {
        fetchMenu();
    }, [])

    const fetchMenu = async () =>
    {
        console.log(resId);
        const data = await fetch(`${SWIGGY_MENU}` + `${resId}`);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    };

    if (!resInfo) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    let { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    if (!itemCards) itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(itemCards);
    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <ul>
                {itemCards.map((items) =>
                {
                    return <li key={items.card.info.id}>
                        {items.card.info.name} - Rs.
                        {items.card.info.price / 100}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default RestaurantMenu;