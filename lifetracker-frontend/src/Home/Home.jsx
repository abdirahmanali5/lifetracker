import { useState, useEffect } from "react";
//import logo from './logo.svg'
//import './App.css'
import ResponsiveAppBar from "../Navbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SignUp from "../register";
// import SignIn from '../Log'
import AppRouter from "../AppRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import "../Home/Home.css";
import Nutritionform from "../NutritionForm/form";

export default function Home({ user, isFetching, posts, addPost, error }) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
        {/* <SignIn></SignIn>  */}
        {/* <Nutritionform user={user} addPost={addPost} /> */}

        <CssBaseline />
        <Container
          maxWidth={false}
          sx={{ bgcolor: "#cfe8fc", height: "100vh", flexGrow: 1 }}
        >
          <div class="Landing">
            <div class="hero">
              <img
                src="	http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
                alt="hero img"
              ></img>
              <h1>Life Tracker</h1>
              <p>Helping you take back control of your world</p>
            </div>
            <div class="tiles">
              <div class="tile">
                <img
                  src="	http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg"
                  alt="Fitness"
                ></img>
                <p>Fitness</p>
              </div>
              <div class="tile">
                <img
                  src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg"
                  alt="Food"
                ></img>
                <p>Food</p>
              </div>
              <div class="tile">
                <img
                  src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
                  alt="Rest"
                ></img>
                <p>Rest</p>
              </div>
              <div class="tile">
                <img
                  src="	http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg"
                  alt="Planner"
                ></img>
                <p>Planner</p>
              </div>
            </div>
          </div>

          {/* <Box  /> */}
        </Container>
      </>
    </div>
  );
}
