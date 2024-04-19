import bannerBg from "../../assets/banner.jpg";


const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url('${bannerBg}'),linear-gradient(90deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.30) 49.24%, rgba(0, 0, 0, 0.60) 100%)`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    return (
        <div style={bannerStyle} className="h-screen px-16 py-20">
        <div data-aos="fade-right" className="md:w-1/2 h-full space-y-5 flex flex-col justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white">
            Turning Dreams into Spectacular Realities
          </h1>
          <p className="text-white font-semibold">
            SpectraFest turns dreams into breathtaking realities. Our meticulous
            planning and impeccable execution ensure your events shine
            brilliantly, leaving lasting and awe-inspiring impressions.
          </p>
          <button className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-bold rounded-md w-fit">
            Contact Us
          </button>
        </div>
      </div>
    );
};

export default Banner;