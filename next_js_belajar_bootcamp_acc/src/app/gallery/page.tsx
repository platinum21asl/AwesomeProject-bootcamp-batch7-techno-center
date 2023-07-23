"use client";

export const metadata = {
  title: "Galley",
};

import Satellite from "@services/satellite";
import Link from "next/link";
import useSWR from "swr";
import { useState, useEffect } from "react";
import axios from "axios";

const fetcher = (url: string) => Satellite.get(url).then((res) => res.data);

import { Container } from "@components";
interface Props {
  search: string;
}

export default function Gallery() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("https://api.themoviedb.org/3/movie/now_playing/?api_key=b2415579d606502dc52e351b1885e890")
  //     .then((response) => {
  //       setData(response.data);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <Container>
      <div className="min-h-screen flex flex-row">
        <h1 className="text-4xl font-bold mt-5">Movie :</h1>

        <div className="mt-5 ml-5">
          <button
            className="bg-blue-600 px-6 py-2"
            onClick={() => {
              window.location.href = "/gallery/list/now_playing";
            }}
          >
            Now Playing
          </button>

          <button
            className="ml-5 bg-blue-600 px-6 py-2"
            onClick={() => {
              window.location.href = "/gallery/list/popular";
            }}
          >
            Popular
          </button>
          <button
            className="ml-5 bg-blue-600 px-6 py-2"
            onClick={() => {
              window.location.href = "/gallery/list/top_rated";
            }}
          >
            Top Rated
          </button>
          <button
            className="ml-5 bg-blue-600 px-6 py-2"
            onClick={() => {
              window.location.href = "/gallery/list/upcoming";
            }}
          >
            Upcoming
          </button>
        </div>
      </div>
    </Container>
  );
}
