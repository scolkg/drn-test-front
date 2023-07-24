"use client";

import { useEffect, useState } from "react";

const BACKEND_URL = "http://127.0.0.1:8000/";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}api/hello`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to File-Tuning Chatbot!</h1>
      <p>{data}</p>
    </div>
  );
};

export default Home;
