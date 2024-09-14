import { CLOUDINARY_PREFIX } from '../utils/constants';

const GetCards = (props) =>
{
    const { resName,
        cuisines,
        avgRating,
        cloudinaryImageId,
        costForTwo } = props;
    return <div className='res-card'>
        <img src={CLOUDINARY_PREFIX + cloudinaryImageId}
            className='img'></img>
        <div className='card-desc'>
            <h2>{resName}</h2>
            <p>{cuisines}</p>
            <p>{avgRating} Stars</p>
            <p>{costForTwo}</p>
        </div>
    </div>
};

export default GetCards;