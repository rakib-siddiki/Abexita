
const Thumbnail = () => {
    return (
      <div className="container">
        <img
          src="/thumbnail-image.png"
          alt="thumbnail-image"
          className="size-full"
          loading="lazy"
        />
      </div>
    );
};

export default Thumbnail;