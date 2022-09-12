import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const key = "6cd53bd1c45a1823e0dd506d78dd9b07";
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const renderMovies = useMemo(() => {
    console.log(data);
    if (data.results) {
      return data.results.map((item: any) => (
        <div
          key={item.id}
          style={{
            width: 300,
            height: 450,
            backgroundColor: "red",
            margin: 10,
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
        </div>
      ));
    }
  }, [data]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: 450,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            height: 450,
            position: "absolute",
          }}
          alt="header"
          src="https://es.web.img2.acsta.net/pictures/19/07/19/09/05/1888832.jpg"
        />
        <div
          style={{
            top: 250,
            width: 100,
            position: "absolute",
            height: 100,
            backgroundColor: "red",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {renderMovies}
      </div>
    </>
  );
};

export default App;
