import axios from "axios";

const ROOT_API = "https://bing-news-search1.p.rapidapi.com";

export const getNews = async (newsCategory: string, count: number) => {
  const url = `${ROOT_API}//news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`;
  const headers = {
    "x-bingapis-sdk": "true",
    "x-rapidapi-key": "29afd53a6emsh2784d02b1a823a0p1abb12jsn24a77b813218",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  };

  const res = await axios({ url, headers, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
