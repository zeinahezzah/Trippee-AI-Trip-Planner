const { plan, replaceActivityInPlan } = require("./openAI.js");
const axios = require("axios");

const receivePreferences = async (req, res) => {
  const { location, checkin, checkout, numberOfDays, preferences } = req.body;
  const aiPlan = await plan(
    location,
    checkin,
    checkout,
    numberOfDays,
    preferences
  );
  res.send(aiPlan);
};
const getImageSearch = async (req, res) => {
  // From BingImageSearchAPI
  const options = {
    method: "GET",
    url: "https://bing-image-search1.p.rapidapi.com/images/search",
    params: {
      q: req.body.query, //'Eiffel Tower', // The user's search query string (Required)
      count: req.body.count, //'100' // The number of image results to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum is 150. (Optional)
      //   safeSearch: 'Yes' // A filter used to filter results for adult content. (Optional)
    },
    headers: {
      "X-RapidAPI-Key": "4e59d66a2fmshaac2ce8796580a7p105e0djsnc22412dd0c4c",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const imageResults = response.data.value;
    const imageUrlArray = imageResults.map((image, index) => ({
      number: index + 1,
      contentUrl: image.contentUrl,
    }));
    const jsonOutput = JSON.stringify(imageUrlArray, null, 2);

    console.log(jsonOutput);
    res.send(jsonOutput);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};
const getImageSearchArray = async (req, res) => {
  const arr = [];
  for (let i = 0; i < req.body.query.length; i++) {
    let x = await getImageSearch2(req.body.query[i], 1);
    arr.push(x[0]);
  }
  console.log(arr);
  res.send(arr);
};

const getImageSearch2 = async (name, count) => {
  // From BingImageSearchAPI
  const options = {
    method: "GET",
    url: "https://bing-image-search1.p.rapidapi.com/images/search",
    params: {
      q: name, //'Eiffel Tower', // The user's search query string (Required)
      count: count, //'100' // The number of image results to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum is 150. (Optional)
      //   safeSearch: 'Yes' // A filter used to filter results for adult content. (Optional)
    },
    headers: {
      "X-RapidAPI-Key": "4e59d66a2fmshaac2ce8796580a7p105e0djsnc22412dd0c4c",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const imageResults = response.data.value;
    const imageUrlArray = imageResults.map((image, index) => image.contentUrl);
    const jsonOutput = JSON.stringify(imageUrlArray, null, 2);

    return imageUrlArray;
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};
const getHotels = async (req, res) => {
  const options1 = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
    params: {
      name: req.body.destination,
      locale: "en-gb",
    },
    headers: {
      "X-RapidAPI-Key": "99ed6f84b6msh281d41fd30545e0p11993fjsn7df25fb37e24",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  const response1 = await axios.request(options1);
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
    params: {
      checkin_date: req.body.checkin,
      dest_type: "city",
      units: "metric",
      checkout_date: req.body.checkout,
      adults_number: "2",
      order_by: "price",
      dest_id: response1.data[0].dest_id,
      filter_by_currency: "EGP",
      locale: "en-gb",
      room_number: "1",
      categories_filter_ids: "class::2,class::4,free_cancellation::1",
      page_number: "0",
      include_adjacency: "true",
    },
    headers: {
      "X-RapidAPI-Key": "99ed6f84b6msh281d41fd30545e0p11993fjsn7df25fb37e24",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  res.send(response.data.result);
};

const replaceActivity = async (req, res) => {
  replaceActivityInPlan(
    req.body.plan,
    req.body.dayNumber,
    req.body.activityIndex,
    req.body.newActivity
  );
};
const createPlan = async (req, res) => {
  const { userID, location, checkin, checkout, budget, preferences } = req.body;

  const city = await getCity(location);
  const plan = await addNewPlan(
    userID,
    city._id,
    checkin,
    checkout,
    budget,
    preferences
  );
  res.send(plan);
};

const addPlanHotel = async (req, res) => {
  const { planID, hotelID } = req.body;

  const plan = await addHotelToPlan(planID, hotelID);

  res.send(plan);
};

const addPlanFlight = async (req, res) => {
  const { planID, flightID } = req.body;

  const plan = await addFlightToPlan(planID, flightID);

  res.send(plan);
};

const addPlanDays = async (req, res) => {
  const { planID, planArray } = req.body;

  var plan;

  //array of days
  for (var i = 0; i < planArray.length; i++) {
    const dayArray = planArray[i];

    //create day
    var day = await addNewDay(i + 1);

    //each day is array of attractions
    for (var j = 0; j < dayArray.length; j++) {
      const dayAttraction = dayArray[j]; //get attraction from subarray

      var attrTime = "";

      //get time based on order in day array
      switch (j) {
        case 0:
          attrTime = "9:00 am";
          break;
        case 1:
          attrTime = "12:00 pm";
          break;
        case 2:
          attrTime = "3:00 pm";
          break;
        case 3:
          attrTime = "6:00 pm";
          break;
        case 4:
          attrTime = "9:00 pm";
      }

      //create activity from attraction and time
      const activity = await addNewActivity(j + 1, dayAttraction._id, attrTime);

      //add activity to day
      day = await addActivityToDay(day._id, activity._id);
    }

    //add day to plan
    plan = await addDayToPlan(planID, day._id);
  }

  res.send(plan);
};

const getFlightAndBookingInfo = async (req, res) => {
  const options1 = {
    method: "GET",
    url: "https://booking-com13.p.rapidapi.com/flights/auto-complete",
    params: {
      location: req.body.destination,
      country_flag: "us",
    },
    headers: {
      "X-RapidAPI-Key": "99ed6f84b6msh281d41fd30545e0p11993fjsn7df25fb37e24",
      "X-RapidAPI-Host": "booking-com13.p.rapidapi.com",
    },
  };

  const response1 = await axios.request(options1);

  const options2 = {
    method: "GET",
    url: "https://booking-com13.p.rapidapi.com/flights/auto-complete",
    params: {
      location: req.body.from,
      country_flag: "us",
    },
    headers: {
      "X-RapidAPI-Key": "99ed6f84b6msh281d41fd30545e0p11993fjsn7df25fb37e24",
      "X-RapidAPI-Host": "booking-com13.p.rapidapi.com",
    },
  };

  const response2 = await axios.request(options2);

  const options = {
    method: "GET",
    url: "https://booking-com13.p.rapidapi.com/flights/return",
    params: {
      location_from: response2.data.data[0], // 'Cairo, Egypt', // Name of the location moving from. (Required)
      location_to: response1.data.data[0], // 'Paris, France', // Name of the location moving to. (Required)
      departure_date: formatDate(req.body.departureDate), // '2023-08-12', // Date of departure. (Required)
      return_date: formatDate(req.body.arrivalDate), // '2023-08-31', // Date of return. (Required)
      adult_number: "2", // Number of adults. (Required)
      //   page: '1', // Page number or number of pages. (Optional)
      country_flag: "us", // countryFlag from languages endpoint Default: us (Optional)
      //   children_age: '11,16', // The children_agemust be a number and separated by commas Ex: 9,2,16 (Optional)
      //   infant_age: '0,1', // The infant_agemust be a number(0, 1) and separated by commas Ex: 0,1 (Optional)
      class: "Economy", // Default: Economy Other Options: Economy | Premium | Business | First | Do not include in request (Optional)
      number_of_stops: "NonstopFlights", // Default: All Other Options: NonstopFlights | MaximumOneStop | All | Do not include in request (Optional)
      //   min_price: '100', // Minimum price of the flight. (Optional)
      //   max_price: '1000', // Maximum price of the flight. (Optional)
      //   airlines: 'Fly Emirates', // airlines comma-separated or empty for all types Get from this API resultSetMetaData->marketingCarriers[index]->code Ex: SK,BT (Optional)
      //   filter_time_departure_type: 'Departure', // Default: Departure Other Options: Departure | Arrival | Do not include in request (Optional)
      //   time_departure_from: '00h00', // Moving time every 30 min Ex of othr options: 00h00,00h30,01h00,01h30,02h00,02h30,03h00,03h30 (Optional)
      //   time_departure_to: '00h00', // Moving time every 30 min Ex of othr options: 00h00,00h30,01h00,01h30,02h00,02h30,03h00,03h30 (Optional)
      //   filter_time_arrival_type: 'Departure', // Default: Arrival Other Options: Departure | Arrival | Do not include in request (Optional)
      //   time_arrival_from: '00h00', // Moving time every 30 min Ex of othr options: 00h00,00h30,01h00,01h30,02h00,02h30,03h00,03h30 (Optional)
      //   time_arrival_to: '00h00', // Moving time every 30 min Ex of othr options: 00h00,00h30,01h00,01h30,02h00,02h30,03h00,03h30 (Optional)
      //   travel_time: '21:30' // Format: hh:mm Ex: 21:30 (Optional)
    },
    headers: {
      "X-RapidAPI-Key": "4e59d66a2fmshaac2ce8796580a7p105e0djsnc22412dd0c4c",
      "X-RapidAPI-Host": "booking-com13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    // const FlightData = JSON.stringify(extractedImportantData, null, 2);

    // console.log(FlightData);
    // res.send(FlightData);
    res.send(response.data.data.flights);
    console.log(response.data.data.flights);
    // response.data.data.flights[0].bounds[0].segments[0]. to access arrivedAt, cabinClassName, departuredAt, destination, duration, flightNumber, origin, and segmentDetails (access it to get numberOfSeatsLeft) w there's id, shareableURL in flights array
    // response.data.data.flights[0].travelerPrices[0] // shoof gwaha ehh
    // response.data.data.resultSetMetaData.marketingCarriers[0].code to access airline code & names
    // response.data.data.resultSetMetaData.priceRange & response.data.data.resultSetMetaData.travelTimeRange
    // check respond.data.data.routes[0] to access departureAT, departureDate
    // response.data.data.sponsoredTrips[0] 3mla zy flights
    // response.data.data.quickSortPrices[0].carrierPromo or .cheapTrip or .recommendation or .shortTrip , they've currency array & value inside each
  } catch (error) {
    console.log(error);
    console.log("No flights available for the selected dates.");
  }
};

function formatDate(dateString) {
  const parts = dateString.split("-");
  const year = parts[0];
  let month = parts[1];
  let day = parts[2];

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
}

module.exports = {
  receivePreferences,
  getImageSearchArray,
  getHotels,
  getImageSearch,
  getImageSearch2,
  getFlightAndBookingInfo,
  replaceActivity,
  createPlan,
  addPlanFlight,
  addPlanHotel,
  addPlanDays,
};
