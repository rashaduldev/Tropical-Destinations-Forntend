import img from "../../../public/assets/Subtract.png";
import img1 from "../../../public/assets/avatar.png";
import img2 from "../../../public/assets/avatar (1).png";
import img3 from "../../../public/assets/avatar (2).png";


const Tropical = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center lg:justify-end mx-10">
        <img className="h-32 w-32" src={img} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:gap-56">
        <div className="">
          <div className="flex items-center shadow-2xl p-4 rounded-md gap-3 m-3">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="">
              <h2 className="text-[18px] font-bold">Jenny Wilson</h2>
              <p className="text-[16px]">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
            </div>
          </div>
          <div className="flex items-center shadow-2xl p-4 rounded-md gap-3 m-3 lg:my-11">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="">
              <h2 className="text-[18px] font-bold">Jenny Wilson</h2>
              <p className="text-[16px]">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
            </div>
          </div>
          <div className="flex items-center shadow-2xl p-4 rounded-md gap-3 m-3">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="">
              <h2 className="text-[18px] font-bold">Jenny Wilson</h2>
              <p className="text-[16px]">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-[40px]"><span className="font-bold">Tropical Adventure</span> <p>for Students.</p></h2>
          <p className="text-[20px] my-4">Student Tropical Vacation: Relax and Recharge</p>
          <ul className="list-disc pl-5">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit </li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="btn hover:bg-[#F27A44] rounded-full uppercase hover:text-white mt-7 px-9">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Tropical;
