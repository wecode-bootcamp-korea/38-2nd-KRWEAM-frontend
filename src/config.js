export const APIKEY = process.env.REACT_APP_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const BASE_URL = "http://3.36.127.132:3000";

export const api = {
  base: `${BASE_URL}`,
  wish: `${BASE_URL}/wish`,
  products: `${BASE_URL}/products`,
  dealhistories: `${BASE_URL}/dealhistories`,
  deal: `${BASE_URL}/deal`,
  detail: `${BASE_URL}/detail`,
};
