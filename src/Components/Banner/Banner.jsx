import img from "../../../public/assets/Group 171.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#f8f1d388]">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
          <div className="flex-1 lg:pb-10">
            <img src={img} className="max-w-sm rounded-lg mx-auto" />
          </div>
          <div className="flex-1 text-[20px] lg:pl-6 lg:text-left text-center">
            <p>Discover the beauty of the tropics</p>
            <h1 className="text-5xl lg:text-7xl font-bold py-3">
              Tropical <br />
              Destinations <br />
               For Student
            </h1>
            <p className="py-6">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae 
            </p>
            <button className="btn hover:bg-[#F27A44] rounded-full uppercase hover:text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
