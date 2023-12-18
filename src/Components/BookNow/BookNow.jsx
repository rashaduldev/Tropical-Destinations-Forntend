import { FaMinus, FaPlus } from "react-icons/fa";
import img from "../../../public/assets/Group 167.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import img1 from "../../../public/assets/Banner/Subtract (1).png";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const BookNow = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [star, setStar] = useState(1);
  const [room, setRoom] = useState(1);

  const handleStarPlus = () => {
    setStar((prevStar) => prevStar + 1);
  };

  const handleStarMinus = () => {
    if (star > 1) {
      setStar((prevStar) => prevStar - 1);
    }
  };

  const handleRoomPlus = () => {
    setRoom((prevRoom) => prevRoom + 1);
  };

  const handleRoomMinus = () => {
    if (room > 1) {
      setRoom((prevRoom) => prevRoom - 1);
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    console.log("ok");
    // const form = e.target;

    Swal.fire({
      title: "Are you sure?",
      text: "Booking Confirmation",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Booked",
          text: "You are booking this place now",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="relative">
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row gap-10 lg:gap-36">
          <div className="flex-1">
            <img
              src={img}
              className="lg:max-w-sm rounded-lg mx-auto"
            />
          </div>
          <div className="flex-1 lg:min-w-min shadow-2xl lg:p-5">
            <h1 className="text-center lg:text-left text-4xl font-bold">
              Book Now
            </h1>
            <p className="text-center lg:text-left text-2xl py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <form onSubmit={handleBookNow}>
              <div className="label">
                <span className="label-text text-2xl font-bold">City</span>
              </div>
              <input
                type="text"
                placeholder="Enter city name"
                className="input input-bordered w-full"
              />
              <div className="flex gap-5">
                <div>
                  <h1 className="label-text text-2xl font-bold mt-6">
                    Arrival
                  </h1>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div>
                  <h1 className="label-text text-2xl font-bold mt-6">
                    Departure
                  </h1>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4 my-3">
                <div className="w-full relative">
                  <div className="label">
                    <span className="label-text text-2xl font-bold">STAR</span>
                  </div>
                  <div
                    className="rounded-lg"
                    style={{ border: "2px solid gray" }}
                  >
                    <input
                      type="text"
                      value={star}
                      name="star"
                      className="input input-bordered max-w-[150px] ml-10"
                      readOnly // Make the input readOnly to prevent direct user input
                    />
                    <div
                      onClick={handleStarPlus}
                      className="absolute left-[2px] text-2xl bottom-[2px] bg-base-300 p-1 py-3 px-4 rounded-l-lg"
                    >
                      <FaPlus></FaPlus>
                    </div>
                    <div
                      onClick={handleStarMinus}
                      className="absolute right-[2px] text-2xl bottom-[2px] bg-base-300 p-1 py-3  px-4 rounded-r-lg"
                    >
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                </div>

                <div className="w-full relative">
                  <div className="label">
                    <span className="label-text text-2xl font-bold">ROOM</span>
                  </div>
                  <div
                    className="rounded-lg"
                    style={{ border: "2px solid gray" }}
                  >
                    <input
                      type="text"
                      value={room}
                      name="room"
                      className="input input-bordered max-w-[150px] ml-10"
                      readOnly // Make the input readOnly to prevent direct user input
                    />
                    <div
                      onClick={handleRoomPlus}
                      className="absolute left-[2px] text-2xl bottom-[2px] bg-base-300 p-1 py-3 px-4 rounded-l-lg"
                    >
                      <FaPlus></FaPlus>
                    </div>
                    <div
                      onClick={handleRoomMinus}
                      className="absolute right-[2px] text-2xl bottom-[2px] bg-base-300 p-1 py-3 px-4 rounded-r-lg"
                    >
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-neutral mt-10">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute left-[40%] top-[10%] opacity-5 hidden lg:block">
        <img className="w-20" src={img1} alt="" />
      </div>
    </div>
  );
};

export default BookNow;
