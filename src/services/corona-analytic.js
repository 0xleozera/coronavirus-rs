import axios from "axios";

export const getAllInformationsAboutRS = async () => {
  try {
    const { data } = await axios.get("https://api.coronaanalytic.com/brazil/43");
    const { cases, deaths, suspects, refuses } = data;

    return { cases, deaths, suspects, refuses };
  } catch (err) {
    console.log(err);
    return;
  }
}