import NoImage from "../assets/no-image-placeholder-6f3882e0.webp";

const cropImageURL = (url: string) => {
  const target = "media/";

  if (!url) return NoImage;

  const index = url.indexOf(target) + 6; // + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default cropImageURL;
