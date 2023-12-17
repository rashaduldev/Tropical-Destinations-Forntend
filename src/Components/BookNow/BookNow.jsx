import img from "../../../public/assets/Group 167.png";

const BookNow = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row gap-36">
          <div className="flex-1">
            <img src={img} className="lg:max-w-sm max-w-xs rounded-lg mx-auto" />
          </div>
          <div className="flex-1 min-w-min shadow-2xl p-5">
            <h1 className="text-center lg:text-left text-4xl font-bold">Book Now</h1>
            <p className="text-center lg:text-left text-2xl py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <form>
              <div className="label">
                <span className="label-text text-2xl font-bold">City</span>
              </div>
              <input
                type="text"
                placeholder="Enter city name"
                className="input input-bordered w-full"
              />
              <div className="w-full flex gap-4 my-3">
                
              <div className="w-full">
              <div className="label">
                <span className="label-text text-2xl font-bold">Arrival</span>
              </div>
              <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
                <div className="w-full">
                <div className="label">
                <span className="label-text text-2xl font-bold">Departure</span>
              </div>
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                </div>
              </div>
              <div className="w-full flex gap-4 my-3">
                
              <div className="w-full">
              <div className="label">
                <span className="label-text text-2xl font-bold">STAR</span>
              </div>
              <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
                <div className="w-full">
                <div className="label">
                <span className="label-text text-2xl font-bold">ROOM</span>
              </div>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                </div>
              </div>
              <button className="btn btn-neutral mt-10">Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
