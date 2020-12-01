  
export const fetchImages = async () => {
    const response = await fetch('https://unsplash.it/list');
    const images = await response.json();
  
    return images;
  };
  
  export const getImageFromId = id =>
    `https://source.unsplash.com/random/${id}x655`;