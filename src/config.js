export const APIKEY = process.env.REACT_APP_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const BASE_URL_TS = "http://10.58.52.214:3000";
const BASE_URL_CW = "http://10.58.52.94:3000";

export const api = {
  wish: `${BASE_URL_TS}/wish`,
  products: `${BASE_URL_CW}/products`,
  dealhistories: `${BASE_URL_TS}/dealhistory`,
  deal: `${BASE_URL_TS}/deal`,
  detail: `${BASE_URL_TS}/detail`,
};
