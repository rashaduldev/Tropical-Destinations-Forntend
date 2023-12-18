import img from "../../../public/assets/Group 171.png";
import img1 from "../../../public/assets/Banner/Ellipse 46.png";
import img2 from "../../../public/assets/Banner/Ellipse 47.png";
import img3 from "../../../public/assets/Banner/Ellipse 48.png";
import img4 from "../../../public/assets/Banner/Ellipse 49.png";
import img5 from "../../../public/assets/Banner/Subtract (1).png";
import img6 from "../../../public/assets/Banner/Subtract (2).png";


const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#f8f1d388]">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
          <div className="flex-1 lg:pb-10">
            <img src={img} className="max-w-sm rounded-lg mx-auto" />
          </div>
          <div className="flex-1 text-[20px] lg:pl-6 lg:text-left text-center">
            <img className="w-11 ml-3 my-2" src={img1} alt="" />
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
          <div>
           <div className="absolute left-80 -bottom-12"> <img src={img2} alt="" /></div>
            <div className="absolute right-[490px] top-40"><img src={img3} alt="" /></div>
            <div className="absolute right-[50%] w-5"><img src={img4} alt="" /></div>
            <div className="absolute right-[50%] bottom-0"><img src={img5} alt="" /></div>
            <div className="absolute right-48 -bottom-16"><img src={img6} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
