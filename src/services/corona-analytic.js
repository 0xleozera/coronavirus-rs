import axios from "axios";

export const getAllInformationsAboutRS = async () => {
  try {
    const { data } = await axios.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rs");
    const { cases, deaths, suspects, refuses } = data;

    return { cases, deaths, suspects, refuses };
  } catch (err) {
    console.log(err);
    return;
  }
}