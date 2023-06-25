import React from 'react';

function About({ image, about }) {
  const imageSrc = image || "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={imageSrc} alt={altText} />
      <p>{about}</p>
    </aside>
  );
}

export default About;
