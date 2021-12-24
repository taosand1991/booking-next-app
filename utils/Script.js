import Script from "next/script";

const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places&callback=initMap`;

function ScriptLoaded() {
  return <Script id="google-ids" src={url} />;
}

export default ScriptLoaded;
