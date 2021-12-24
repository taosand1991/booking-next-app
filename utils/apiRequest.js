import axios from "./axiosRequest";

async function apiRequest(options) {
  const URI = process.env.NEXT_PUBLIC_RAPID_URL;
  const date = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const checkout = `${date}-${month + 1}-${day + 1}`;
  const params = {
    adults_number: options?.adultNum ?? 1,
    room_number: options?.roomNum ?? 1,
    units: "metric",
    locale: "en-gb",
    checkout_date: options?.checkoutDate ?? checkout,
    checkin_date: options?.checkinDate ?? new Date().toISOString().slice(0, 10),
    latitude: options?.latitude,
    longitude: options?.longitude,
    order_by: options?.orderedValue ?? "popularity",
    filter_by_currency: options?.filtered ?? "EUR",
  };
  if (options.latitude && options.longitude) {
    const results = await axios.get(URI, {
      params,
    });
    return results;
  }
}

export default apiRequest;
