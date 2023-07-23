"use client";

export const metadata = {
  title: "Users",
};
import { Container } from "@components";
import { useState } from "react";

import ListUser from "./listUser";




export default function Users() {
  const [search, setSearch] = useState("");
  const onSubmited = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputResult = event.currentTarget[0] as HTMLInputElement;

    console.log("Berhasil", inputResult.value);
    setSearch(inputResult.value);
  };

  return (
    <Container>
      <div className="flex flex-1 min-h-screen flex-col">
        <h1 className="text-4xl font-bold">Cari User</h1>
        <form
          action=""
          className="flex mt-5 rounded-xl custom shadow"
          onSubmit={onSubmited}
        >
          <input
            type="text"
            className="flex-1 p-2 rounded-l-xl text-black"
            placeholder="Cari Users"
          />
          <button className="bg-lime-600 px-6 py-2 rounded-r-xl">
            Cari User
          </button>
        </form>

        <div className="mt-5">
          <ListUser search={search} />
        </div>
      </div>
    </Container>
  );
}
