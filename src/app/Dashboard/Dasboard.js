import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import axios from "axios";
import { getFilteredtasks } from "../APIs/user.api";
export default function Dasboard() {
  const [data, setData] = useState();
  const [weatherData, setWeatherData] = useState();
  const [icon, setIcon] = useState();


  const apiKey = "826131431ab52822a4ff6bb584a53752";
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);

      let iconurl =
        "http://openweathermap.org/img/w/" +
        response.data?.weather[0]?.icon +
        ".png";
      let m = `http://openweathermap.org/img/wn/${response.data?.weather[0]?.icon}@2x.png`;
      setIcon(m);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  var devTasks
  var Progess
  var completed
  const handlegetTasksdata = async () =>{
    const res = await getFilteredtasks("Dev-Ready")
     devTasks = res?.data?.length
    const res1 = await getFilteredtasks("Dev-In-Progess")
     Progess = res1?.data?.length
    const res2 = await getFilteredtasks("Completed")
     completed = res2?.data?.length
    
  }
  useEffect(() => {
    fetchWeatherData();
    handlegetTasksdata()
  }, []);
  return (
    <div>
      <div className="row card dashbaord-cards">
        <div className="col-12 col-xl-5 mb-4 mb-xl-0 grid-margin">
          <h4 className="font-weight-bold text-white">Hi, Welcomeback!</h4>
        </div>
        <div className="col-12 col-xl-7 grid-margin">
          <div className="d-flex   flex-wrap">
            <div className=" mb-3 mb-xl-0">
              <h4 className="text-white">
                <Clock format={"MM-DD-YYYY, dddd, h:mm:ss A"} ticking={true} />
              </h4>
              {weatherData ? (
                <div className="d-flex mt-4">
                  <div className="d-flex flex-column">
                  <h1 className="text-white">
                    {Math.round(weatherData?.main?.temp)} <sup>&deg;</sup>
                    <sup className="ms-3 text-white">c</sup>
                  </h1>
                  <h4
                    className="text-white"
                  >
                    {weatherData?.weather[0]?.description}
                  </h4>
                    </div>
                 
               <div>
               <img
                    style={{ marginLeft: "-1rem", marginTop: "-2rem" }}
                    width={150}
                    height={150}
                    src={icon}
                    alt={""}
                  />
                </div>
                 
                </div>
              ) : null}
            </div>
           
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 grid-margin stretch-card">
          <div style={{ borderRadius: "20px" }} className="card">
            <div className="card-body">
              <p className="card-title text-md-center text-xl-left textAqua">
                In Progess
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                  {Progess}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div style={{ borderRadius: "20px" }} className="card">
            <div className="card-body">
              <p className="card-title text-md-center text-xl-left textAqua">
              Dev Ready
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 textAqua">
                  {devTasks}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div style={{ borderRadius: "20px" }} className="card">
            <div className="card-body">
              <p className="card-title text-md-center text-xl-left textAqua">
              Completed
              </p>
              <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                  {completed}
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    
    </div>
  );
}
