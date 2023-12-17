import img from '../../../public/assets/Mask group.png'
const Discounts = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#FFF]">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
         <div className="flex-1">
         <img
            src={img}
            className="max-w-sm rounded-lg mx-auto"
          />
         </div>
          <div className="flex-1 px-10 lg:min-w-max text-center lg:text-left">
            <p>Get 20% off for student</p>
            <h1 className="text-xl lg:text-[40px] font-bold">Student discounts available.</h1>
            <p className="pb-6 text-2xl">
            Get ready for some fun in the sun!
            </p>
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
    </div>
  );
};

export default Discounts;
