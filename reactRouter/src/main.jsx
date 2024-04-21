import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

// Create browser router takes in array of route objects are parameter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     // which element you want to render when the browser hit the path '/'. If you had written all the layout content inside App itself, then you can just put app below instead of layout. that also works fine.
//     element: <Layout />,
//     // childer is used for nested paths for example /home/about etc.
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//the above method is quite daunting to write. there is an easy way. it is written below. you can use whichever is easy for you
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route
        // you have another attribute called loader which is used to fetch apis. it is better than fetch method because the fetching process starts beforehand when you click the element and also it stores the result in the cache.
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
      {/* you will get access to the id param inside User component */}
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* You need to give RouterProvider instead of App for routing */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
