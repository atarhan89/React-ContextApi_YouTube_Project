
import axios from "axios";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    'X-RapidAPI-Key': 'fcc3e0c5ffmsh70e9604800d7a60p1fd8f5jsn608b4d72aa6c',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  },
};
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// veridğimiz url'e istek atıp
// geriye verileri döndüren yardımıxcı fonk
export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    return response;
  } catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};




