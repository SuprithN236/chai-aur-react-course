import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});

  // i want the fetch api to be called when the page loads. so we use useEffect.
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3">
      <h1>Github followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async function () {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  return res.json();
};
