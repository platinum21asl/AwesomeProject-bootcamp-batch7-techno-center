import React from "react";

import { Container } from "@components";
import Satellite from "@services/satellite";
import Image from "next/image";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjQxNTU3OWQ2MDY1MDJkYzUyZTM1MWIxODg1ZTg5MCIsInN1YiI6IjY0YmI5NDg2ZTlkYTY5MDEyZTBkODAyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iR_B7fBq_wVCHSo4Mn5XWlC38up3uXUUg_18LGmaMXM";
const config = {
  headers: {
    Authorization: API_KEY,
  },
};

const getGalleryData = async (param: string) => {
  let res;
  await Satellite.get(`https://api.themoviedb.org/3/movie/${param}`, config)
    .then((response) => {
      res = response.data;
    })
    .catch((error) => {
      console.log("ERROR GET DATA", error);
    });
  return res;
};

export default async function UserDetails({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getGalleryData(params.slug)) as any;

  return (
    <Container>
      <div className="flex flex-1 mt-5 min-h-screen">
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-screen">
          <div className="flex flex-1 r min-h-screen flex-col">
            <Image
              width={100}
              height={100}
              alt="Picture Movie Now Playing"
              src={"https://image.tmdb.org/t/p/w500" + data?.poster_path}
            />
            <h1 className="text-2xl font-bold"> TITLE: {data?.title}</h1>
            <h1 className="text-2xl"> OVERVIEW: {data?.overview}</h1>
            <h1 className="text-2xl">
              {" "}
              POPULARITY: {data?.popularity || "-"}
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
}
