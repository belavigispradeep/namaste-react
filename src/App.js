import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";


const RestaurantCard = (props) => {
  const resData =props;
  console.log(resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
         resData.info.cloudinaryImageId
        }
        alt="restaurant food image"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}Star</h4>
      <h4>{resData.info.deliveryTime}minutes</h4>
    </div>
  );
};


const resList = [
  {
    type:"restaurants",
        info: {
          id: "368312",
          name: "Davanageri Benne Dosa",
          cloudinaryImageId: "u2muuutosqdaqcrlxev3",
          locality: "Khb Colony",
          areaName: "Jubliee circle",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian"],
          avgRating: 4.3,
          veg: true,
          parentId: "68804",
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 0.1,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 20:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/davanageri-benne-dosa-khb-colony-jubliee-circle-dharwad-368312",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "438293",
          name: "Hotel Parampara",
          cloudinaryImageId: "gynj6rqcuckpuacbk13w",
          locality: "Jubilee Circle",
          areaName: "Old Dc office road",
          costForTwo: "₹200 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Tandoor",
            "Snacks",
            "Beverages",
          ],
          avgRating: 4,
          veg: true,
          parentId: "100993",
          avgRatingString: "4.0",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/hotel-parampara-jubilee-circle-old-dc-office-road-dharwad-438293",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "423132",
          name: "Karnatak Bhavan",
          cloudinaryImageId: "eftkl0envujbzsql6q4f",
          locality: "Pb Road",
          areaName: "Hosayellapur",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "South Indian", "Chinese", "Beverages"],
          avgRating: 4.3,
          veg: true,
          parentId: "235681",
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 0.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹40 OFF",
            subHeader: "ABOVE ₹249",
            headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
            secondaryDiscountCallout: "+ EXTRA ₹40 OFF",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/karnatak-bhavan-pb-road-hosayellapur-dharwad-423132",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "433686",
          name: "L E A Canteen",
          cloudinaryImageId: "zqm7grhgzwkmqck0awey",
          locality: "Jubilee Circle",
          areaName: "Maratha Colony",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Fast Food"],
          avgRating: 4.3,
          veg: true,
          parentId: "387551",
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 21:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/l-e-a-canteen-jubilee-circle-maratha-colony-dharwad-433686",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "389776",
          name: "Kamat Hotel",
          cloudinaryImageId: "oalmmyvtavyol8enokzr",
          locality: "Subhas Road",
          areaName: "Hosayellapur",
          costForTwo: "₹150 for two",
          cuisines: ["North Indian", "South Indian", "Indian"],
          avgRating: 4.2,
          veg: true,
          parentId: "114320",
          avgRatingString: "4.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 21:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/kamat-hotel-subhas-road-hosayellapur-dharwad-389776",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "523710",
          name: "Domino's Pizza",
          cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
          locality: "Kc park",
          areaName: "Central Dharwad",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
          avgRating: 4.2,
          parentId: "2456",
          avgRatingString: "4.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "30 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/dominos-pizza-kc-park-central-dharwad-dharwad-523710",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "445631",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "Shivanand Nagar",
          areaName: "Hosayellapur",
          costForTwo: "₹350 for two",
          cuisines: ["Pizzas"],
          avgRating: 4.1,
          parentId: "721",
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-07 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/pizza-hut-shivanand-nagar-hosayellapur-dharwad-445631",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "155802",
          name: "Dharwad Tiffins",
          cloudinaryImageId: "tfjqs7htrzdfcsq13geh",
          locality: "Malamaddi ",
          areaName: "Malmaddi",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian"],
          avgRating: 4.2,
          veg: true,
          parentId: "72167",
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 21:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/dharwad-tiffins-malamaddi-malmaddi-dharwad-155802",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "578092",
          name: "Simply Dakshin",
          cloudinaryImageId: "swex1pxjq0h2rxf8yohz",
          locality: "Jayanagar",
          areaName: "Saptapur",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Chinese"],
          avgRating: 4.3,
          veg: true,
          parentId: "188166",
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 21:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "FREE ITEM",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/simply-dakshin-jayanagar-saptapur-dharwad-578092",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "601711",
          name: "Revival Street Social",
          cloudinaryImageId: "wnp9m9jbyt25hjboegnt",
          locality: "Pb Road",
          areaName: "Saraswatpur",
          costForTwo: "₹250 for two",
          cuisines: ["Pizzas", "Burgers", "Chinese", "Beverages"],
          avgRating: 4.1,
          parentId: "285654",
          avgRatingString: "4.1",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-07 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/revival-street-social-pb-road-saraswatpur-dharwad-601711",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "751044",
          name: "The Dessert Heaven - Pastry, Brownie and Cakes",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/04ad793e-c6bb-4e6d-be78-fa1cd384b058_751044.jpg",
          locality: "LAKAMANAHALLI",
          areaName: "SARASWATPUR",
          costForTwo: "₹200 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets",
            "Juices",
            "Bengali",
          ],
          avgRating: 4.5,
          veg: true,
          parentId: "506176",
          avgRatingString: "4.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-07 00:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/the-dessert-heaven-pastry-brownie-and-cakes-lakamanahalli-saraswatpur-dharwad-751044",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "751043",
          name: "CakeZone Patisserie",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/36eb63cc-815c-43fe-b8d8-10a324453c0b_751043.jpg",
          locality: "LAKAMANAHALLI",
          areaName: "SARASWATPUR",
          costForTwo: "₹200 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets",
            "Juices",
            "Bengali",
          ],
          avgRating: 4.4,
          parentId: "7003",
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-07 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/cakezone-patisserie-lakamanahalli-saraswatpur-dharwad-751043",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "751045",
          name: "Cheesecakes By CakeZone",
          cloudinaryImageId: "76d5f4055f9d5796bc7b72dfba8bd92b",
          locality: "LAKAMANAHALLI",
          areaName: "SARASWATPUR",
          costForTwo: "₹200 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets",
            "Juices",
            "Bengali",
          ],
          avgRating: 4.1,
          veg: true,
          parentId: "348057",
          avgRatingString: "4.1",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-07 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/cheesecakes-by-cakezone-lakamanahalli-saraswatpur-dharwad-751045",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "751047",
          name: "Ovenfresh Cakes and Desserts",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/4925f8eb-d524-487a-80df-f3ff5be1b351_751047.JPG",
          locality: "LAKAMANAHALLI",
          areaName: "SARASWATPUR",
          costForTwo: "₹200 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets",
            "Snacks",
            "Juices",
            "Bengali",
            "Pizzas",
          ],
          avgRating: 4.7,
          parentId: "1372",
          avgRatingString: "4.7",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-07 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/ovenfresh-cakes-and-desserts-lakamanahalli-saraswatpur-dharwad-751047",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "678886",
          name: "Rama Ruchi Family Restaurant Pure Veg",
          cloudinaryImageId: "dfcc62e5b7f0668c45ca8e19e746fd81",
          locality: "Saptapur Last Bus Stop",
          areaName: "Saptapur",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 4.2,
          veg: true,
          parentId: "405779",
          avgRatingString: "4.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/rama-ruchi-family-restaurant-pure-veg-last-bus-stop-saptapur-dharwad-678886",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "425260",
          name: "Kenza Kitchens",
          cloudinaryImageId: "hos9oczgruj1jpi0pmny",
          locality: "Sri Nagar",
          areaName: "Saptapur",
          costForTwo: "₹200 for two",
          cuisines: ["Chinese", "Fast Food"],
          avgRating: 4.2,
          parentId: "308038",
          avgRatingString: "4.2",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "FREE ITEM",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/kenza-kitchens-sri-nagar-saptapur-dharwad-425260",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "639007",
          name: "Just Bake",
          cloudinaryImageId: "imjx68gintwvmcunl8wu",
          locality: "Vijyanand Nagar",
          areaName: "Saptapur",
          costForTwo: "₹250 for two",
          cuisines: ["Bakery"],
          avgRating: 4.5,
          parentId: "1727",
          avgRatingString: "4.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/just-bake-vijyanand-nagar-saptapur-dharwad-639007",
          type: "WEBLINK",
        },
      },
      {
        info: {
          id: "593922",
          name: "The Belgium Waffles & Desserts",
          cloudinaryImageId: "lvmsilo9nwe3qiokqwiw",
          locality: "Gandhi Nagar",
          areaName: "Vidyagiri",
          costForTwo: "₹200 for two",
          cuisines: ["Waffle", "Beverages"],
          avgRating: 4.5,
          veg: true,
          parentId: "472080",
          avgRatingString: "4.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-06 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "https://www.swiggy.com/restaurants/the-belgium-waffles-and-desserts-gandhi-nagar-vidyagiri-dharwad-593922",
          type: "WEBLINK",
        },
      },
];



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
