"use client";
export const metadata = {
  title: "Now Playing",
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import { Container } from "@components";
import Image from "next/image";
export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated/?api_key=b2415579d606502dc52e351b1885e890"
      )
      .then((response) => {
        console.log("DATA", response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <div className="min-h-screen flex flex-row">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {data.map((result: any, index: number) => (
            <Link href={`/gallery/list/${result.id}`} key={index}>
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg "
                key={index}
              >
                <Image
                  width={100}
                  height={100}
                  alt="Picture Movie Now Playing"
                  src={"https://image.tmdb.org/t/p/w500" + result.poster_path}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{result.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
