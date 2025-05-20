import { useEffect, useState } from "react";

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const endDate = new Date("2025-06-01T00:00:00");
            const endTime = endDate.getTime();
            const currentTime = new Date().getTime();

            const remainingTime = endTime - currentTime;

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };
    
    
  return (
    <>
      <section className="sec">
        <div className="continar">
          <div className="row">
            <div className="col-lg-6">
              <div className="card5">
                <img src="img-5-9_768x.webp" alt="shop now" />
              </div>
            </div>
            <div className="col-lg-6 py-4 my-4">
              <div className="card5 ">
                <h1>Deal Of The Day</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <div className="timer my-5">
                        <h2 className="text-center" id="timer">{formatTime(days)} : {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}</h2>
                    <h6 className="text-center">Days  Hours  minutes  Seconds</h6>  

                </div>
                <div className="btn">
                  <button className="btn btn-dark mx-5">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timer;
