const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
require("dotenv").config();

const endpoint = "https://trippee.openai.azure.com/";
const azureApiKey = "1b9551b253a44d549f9f610a17dc2e22";

const plan = async (location, checkin, checkout, numberOfDays, preferences) => {
  try {
    const message = [
      {
        role: "system",
        content: "You are a helpful assistant. You are a travel advisor.",
      },
      {
        role: "user",
        content: `Plan a ${numberOfDays} day trip to ${location} from ${checkin} to ${checkout} by adding activities and daily locations according to these preferences: ${preferences}, result should be an array of this JSON format [{ Day: {Time:'time of the day in digits as string like "9:00am/3:00pm/6:00pm/"',Location:'name of place',Desciprtion:'location description'} }] without any line breaks. `,
      },
    ];
    console.log("== Chat Completions Sample ==");

    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(azureApiKey)
    );
    const deploymentId = "gpt-35-turbo";
    const result = await client.getChatCompletions(deploymentId, message);

    for (const choice of result.choices) {
      // console.log(choice.message.content);
      console.log(extractJsonFromText(choice.message.content));
      return extractJsonFromText(choice.message.content);
    }
  } catch (err) {
    console.error("The chatbot encountered an error:", err);
  }
};
const replaceActivityInPlan = async (
  plan,
  dayNumber,
  activityIndex,
  newActivity
) => {
  try {
    const message = [
      {
        role: "system",
        content: "You are a helpful assistant. You are a travel advisor.",
      },
      {
        role: "user",
        content: `Replace the activity at index ${activityIndex} in day${dayNumber} in this ${plan} by adding this activity ${newActivity} insted, result should be an array of this JSON format [{ Day: {Time:'time of the day in digits as string like "9:00am/12:00pm/3:00pm/6:00pm/9:00pm"',Location:'name of place',Desciprtion:'location description'} }] without any line breaks. `,
      },
    ];
    console.log("== Chat Completions Sample ==");

    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(azureApiKey)
    );
    const deploymentId = "gpt-35-turbo";
    const result = await client.getChatCompletions(deploymentId, message);

    for (const choice of result.choices) {
      // console.log(choice.message.content);
      console.log(extractJsonFromText(choice.message.content));
      return extractJsonFromText(choice.message.content);
    }
  } catch (err) {
    console.error("The chatbot encountered an error:", err);
  }
};
const getCityDetails = async (cityName) => {
  try {
    const message = [
      {
        role: "system",
        content:
          "You are a helpful assistant. You are a map expert and a travel expert.",
      },
      {
        role: "user",
        content: `Tell me the details of this city ${cityName}, result should be an array of this JSON format [{ Details: {country:"country where this city is located",continent:"continent where this city is located",currency:"currency of this city",description:"description about the city",countryISOCode:"ISO Code for the counrty fo this city",safety:"city crime score",visa:"Visa details to enter the country"} }].`,
      },
    ];
    console.log("== Chat Completions Sample ==");

    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(azureApiKey)
    );
    const deploymentId = "gpt-35-turbo";
    const result = await client.getChatCompletions(deploymentId, message);

    for (const choice of result.choices) {
      // console.log(choice.message.content);
      console.log(extractJsonFromText(choice.message.content));
      return extractJsonFromText(choice.message.content);
    }
  } catch (err) {
    console.error("The chatbot encountered an error:", err);
  }
};
const getLandMarkDetails = async (landMarkName) => {
  try {
    const message = [
      {
        role: "system",
        content:
          "You are a helpful assistant. You are a map expert and a travel expert.",
      },
      {
        role: "user",
        content: `Tell me the details of this landmark ${landMarkName}, result should be an array of this JSON format [{ Details: {city:"city where this landmark is located",country:"country where this landmark is located",longitude:"longitude of this landmark",latitude:"latitude of this landmark",description:"description about the landmark"} }]. `,
      },
    ];
    console.log("== Chat Completions Sample ==");

    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(azureApiKey)
    );
    const deploymentId = "gpt-35-turbo";
    const result = await client.getChatCompletions(deploymentId, message);

    for (const choice of result.choices) {
      // console.log(choice.message.content);
      console.log(extractJsonFromText(choice.message.content));
      return extractJsonFromText(choice.message.content);
    }
  } catch (err) {
    console.error("The chatbot encountered an error:", err);
  }
};

function extractJsonFromText(text) {
  const startIndex = text.indexOf("[");
  const endIndex = text.lastIndexOf("]");
  if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    console.error("No JSON array found in the text.");
    return null;
  }

  const jsonStr = text.substring(startIndex, endIndex + 1);
  try {
    const jsonArray = JSON.parse(jsonStr);
    return jsonArray;
  } catch (error) {
    console.error("Error: Invalid JSON format found in the text.");
    return null;
  }
}

module.exports = {
  plan,
  replaceActivityInPlan,
  getCityDetails,
  getLandMarkDetails,
};
