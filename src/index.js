import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SliderComponent from './Component/SliderComponent/SliderComponent';
import Footer from "./Component/Footer/Footer"
import CompaniesWeWorkWith from './Component/CompaniesWeWorkWith/CompaniesWeWorkWith';


const Index = () => {


    return (
      <React.Fragment>
        <div> 
          <h1> this is the start of the new Project</h1>
          <SliderComponent />
           <CompaniesWeWorkWith />
          <Footer />
        {/* <Nav activePage={activePage} handleItemClick={handleItemClick}  /> */}
        </div>
        <Outlet />
        {/* <Footer activePage={activePage} handleItemClick={handleItemClick}  /> */}
      </React.Fragment>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/", 
      element: <Index />, 
    //   errorElement: <Error />, 
      // children: [
      //   {
      //     path: "/",
      //     element: <HomePage />,
      //   },
      //   {
      //     path: "/service",
      //     element: <OurServicePage />  
      //   },
      //   {
      //     path: "/about",
      //     element: <AboutUsPage   />,  
      //   },
      //   {
      //     path: "/contact",
      //     element: <ContactUs />,
      //   },
      // ],
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
