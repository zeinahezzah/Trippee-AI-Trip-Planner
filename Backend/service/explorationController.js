const axios = require("axios");
const { getCity, getAllCities } = require("../DA/CityDA");

const getSearch = async (name) => {
  // From travelAdvisorAPI
  // enterCityName.question('Enter a city name: ', async (cityName) => {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/locations/search",
    params: {
      query: name, // Do not add any space between the words
      limit: "30", // The number of items per response (max 30) (Optional)
      offset: "0", // The number of items to ignore for paging purpose (Optional)
      units: "km", // One of the followings : km|mi (Optional)
      location_id: "1", // The value of location_id field returned right in this endpoint or …/locations/auto-complete endpoint (Optional)
      currency: "USD", // The currency code (Optional)
      sort: "relevance", // One of the followings : relevance|distance (Optional)
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": "4e59d66a2fmshaac2ce8796580a7p105e0djsnc22412dd0c4c",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.data[0].result_object.category_counts);
    const geosData = response.data.data.filter(
      (item) => item.result_type === "geos"
    );

    if (geosData.length > 0) {
      const city = geosData[0]; //  This is to select the first entry with "geos" result_type

      const cityName = city.result_object.name;
      const countryName = city.result_object.ancestors[1].name;
      const description = city.result_object.geo_description;
      const images = city.result_object.photo.images.large;
      const mapImageURL = city.result_object.map_image_url;

      const cityDetails = {
        cityName,
        countryName,
        description,
        images,
        mapImageURL,
      };
      console.log(cityDetails);
      // console.log(cityDetails);
    }

    // res.send(cityDetails); // Send the data to the frontend and not sure if await is in the right place
    // console.log(cityDetails);
  } catch (error) {
    console.error(error);
    // res.status(500).send("An error occurred.");
  }
};

const getSpecificCity = async (req, res) => {
  const city = await getCity(req.body.name);
  res.send(city);
};
const getAllCitiesDetails = async (req, res) => {
  const cities = await getAllCities();
  res.send(cities);
};
module.exports = {
  getSearch,
  getSpecificCity,
  getAllCitiesDetails,
};
