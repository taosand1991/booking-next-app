async function fetchData(limit, params) {
  if (!params) {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    const slicedData = data.slice(0, limit);
    return slicedData;
  } else {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos/" + params
    );
    const data = await res.json();
    return data;
  }
}

export default fetchData;
