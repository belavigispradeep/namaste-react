import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";



const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-continer">
          {resList.map((restaurants) => (
            <RestaurantCard key={restaurants.info.id} resData={restaurants} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;