import React from 'react'

import { Container } from '@components'
import Satellite from '@services/satellite'

const getUserData = async (param: string) => {
  let res;
  await Satellite.get("https://api.github.com/users/" + param).then((response) => {
    res = response.data;
  }).catch((error) => {
    console.log("ERROR GET DATA", error)
  });
  return res;
}

export default async function UserDetails({ params } : {params : {slug: string}}) {

  const data = await getUserData(params.slug) as any;

  
  return (
    <Container>
    <div className="flex flex-1 justify-center items-center min-h-screen flex-col">
      <h1 className="text-6xl font-bold"> DETAIL USER: {params.slug}</h1>
      <h1 className="text-6xl font-bold"> ID USER: {data?.id}</h1>
      <h1 className="text-6xl font-bold"> GET URL: {data?.html_url}</h1>
      <h1 className="text-6xl font-bold"> EMAIL: {data?.email || "-"}</h1>
      <h1 className="text-6xl font-bold"> LOCATION: {data?.location || "-"}</h1>
    </div>
  </Container>
  )
}
