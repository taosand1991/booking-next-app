async function googleLocation(lat, long) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (lat !== 0 && long !== 0) {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${long}&key=${apiKey}`;
      const res = await fetch(url);
      const result = await res.json();
      return result;
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default googleLocation;
