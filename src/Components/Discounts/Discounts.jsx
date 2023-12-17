import img from '../../../public/assets/Mask group.png'
const Discounts = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="flex-1">
         <img
            src={img}
            className="max-w-sm rounded-lg mx-auto"
          />
         </div>
          <div className="flex-1">
            <p>Get 20% off for student</p>
            <h1 className="text-5xl font-bold">Student discounts available.</h1>
            <p className="py-6">
            Get ready for some fun in the sun!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
