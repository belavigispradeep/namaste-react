import { CDN_URL } from "../utils/constants";
const RestaurantCard = ( props ) => {
    console.log(props);
    const {resData} = props;
    // console.log(resData);
    const{
      name,
      cuisines,
      avgRating,
      deliveryTime,
      cloudinaryImageId,
      costForTwo,
    } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={ CDN_URL
            +
            cloudinaryImageId
          }
          alt="restaurant food image"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}minutes</h4>
      </div>
    );
  };
  
  export default RestaurantCard;