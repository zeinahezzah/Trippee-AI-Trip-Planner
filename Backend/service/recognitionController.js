const { getAttraction, addNewAttraction } = require("../DA/AttractionDA");
const { getCity, addNewCity, addAttractionToCity } = require("../DA/CityDA");
const { getCityDetails, getLandMarkDetails } = require("./openAI.js");
const { getImageSearch2 } = require("./personalizationController");

const getDetailsOfRecognizedLandmark = async (req, res) => {
  let attraction = null;
  if (await getAttraction(req.body.name)) {
    console.log("Attraction Retrieved From DB");
    res.send(await getAttraction(req.body.name));
  } else {
    try {
      let city = null;
      const attractionDetails = await getLandMarkDetails(req.body.name);
      const landmarkURL = await getImageSearch2(req.body.name, 1);
      if (await getCity(attractionDetails[0].Details.city)) {
        city = await getCity(attractionDetails[0].Details.city);
        attraction = await addNewAttraction(
          req.body.name,
          attractionDetails[0].Details.longitude,
          attractionDetails[0].Details.latitude,
          city._id,
          attractionDetails[0].Details.description,
          landmarkURL[0]
        );
        await addAttractionToCity(city._id, attraction._id);
      } else {
        const cityDetails = await getCityDetails(
          attractionDetails[0].Details.city
        );
        const images = await getImageSearch2(
          attractionDetails[0].Details.city,
          20
        );
        city = await addNewCity(
          attractionDetails[0].Details.city,
          cityDetails[0].Details.country,
          cityDetails[0].Details.continent,
          cityDetails[0].Details.visa,
          cityDetails[0].Details.currency,
          cityDetails[0].Details.safety,
          cityDetails[0].Details.description,
          images
        );
        attraction = await addNewAttraction(
          req.body.name,
          attractionDetails[0].Details.longitude,
          attractionDetails[0].Details.latitude,
          city._id,
          attractionDetails[0].Details.description,
          landmarkURL[0]
        );
        await addAttractionToCity(city._id, attraction._id);
      }
      res.send(attraction);
      console.log("Attraction Created");
    } catch (error) {
      console.log("This error is in recognition controller:" + error.message);
      res.send("ERROR")
    }
  }
};
const getDetailsOfRecognizedLandmark2 = async (name) => {
  let attraction = null;
  if (await getAttraction(name)) {
    console.log("Attraction Retrieved From DB");
    return await getAttraction(name);
  } else {
    try {
      let city = null;
      const attractionDetails = await getLandMarkDetails(name);
      const landmarkURL = await getImageSearch2(name, 1);
      if (await getCity(attractionDetails[0].Details.city)) {
        city = await getCity(attractionDetails[0].Details.city);
        attraction = await addNewAttraction(
          name,
          attractionDetails[0].Details.longitude,
          attractionDetails[0].Details.latitude,
          city._id,
          attractionDetails[0].Details.description,
          landmarkURL[0]
        );
        await addAttractionToCity(city._id, attraction._id);
      } else {
        const cityDetails = await getCityDetails(
          attractionDetails[0].Details.city
        );
        const images = await getImageSearch2(
          attractionDetails[0].Details.city,
          20
        );
        city = await addNewCity(
          attractionDetails[0].Details.city,
          cityDetails[0].Details.country,
          cityDetails[0].Details.continent,
          cityDetails[0].Details.visa,
          cityDetails[0].Details.currency,
          cityDetails[0].Details.safety,
          cityDetails[0].Details.description,
          images
        );
        attraction = await addNewAttraction(
          name,
          attractionDetails[0].Details.longitude,
          attractionDetails[0].Details.latitude,
          city._id,
          attractionDetails[0].Details.description,
          landmarkURL[0]
        );
        await addAttractionToCity(city._id, attraction._id);
      }
      console.log("Attraction Created");
      return attraction;
    } catch (error) {
      console.log("This error is in recognition controller:" + error.message);
    }
  }
};
const getDetailsOfRecognizedLandmarkArray = async (req, res) => {
  const attractionsArray = [];
  for (let i = 0; i < req.body.array.length; i++) {
    console.log(attractionsArray);
    attractionsArray.push(
      await getDetailsOfRecognizedLandmark2(req.body.array[i])
    );
  }
  res.send(attractionsArray);
};
module.exports = {
  getDetailsOfRecognizedLandmark,
  getDetailsOfRecognizedLandmarkArray,
};
