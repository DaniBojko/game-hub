const cropImageURL = (url: string) => {
  const target = "media/";

  if (!url) return;

  const index = url.indexOf(target) + 6; // + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default cropImageURL;
