// components/GoogleMapEmbed.js
const GoogleMapEmbed = () => {
  return (
    <div>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=location`}
      />
    </div>
  );
};

export default GoogleMapEmbed;
