const Gallery = ({ images }) => {
  return (
    <div className="bg-white flex flex-col items-center min-w-52 h-full px-2 md:px-32 lg:px-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 mb-4">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-4xl">
        {images.map((image, index) => (
          <img
            key={index}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-md shadow-md"
            src={image.src}
            width="200"
            height="150"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
