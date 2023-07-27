const BASE = 'https://image.tmdb.org/t/p/w500';
function Picture({ url, alt, width }) {
  return (
    <img
      width={width}
      src={
        url
          ? BASE + url
          : `https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available-2.jpg`
      }
      alt={alt}
    />
  );
}
export default Picture;
