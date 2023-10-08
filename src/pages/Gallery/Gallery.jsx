import { useLoaderData } from "react-router-dom";

const Gallery = () => {
  const gallery = useLoaderData();
  return (
    <div className="px-20 py-10">
      <h1 className="w-fit mx-auto text-transparent text-4xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-5">
        Event Showcase Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {gallery.map((singleGallery) => (
          <img
            src={singleGallery.img}
            alt=""
            key={singleGallery.id}
            className="w-full h-48 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
