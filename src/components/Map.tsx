import React from 'react';

interface MapProps {
  apiKey: string;
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ apiKey, latitude, longitude }) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=15`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="h-full">
      <iframe
        title="Location Map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
      <div className="mt-4">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default Map;
