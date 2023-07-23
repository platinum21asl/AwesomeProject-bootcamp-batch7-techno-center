import Satellite from "@services/satellite";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
const fetcher = (url: string) => Satellite.get(url).then((res) => res.data);

interface Props {
  search: string;
}

export default function ListUser({ search }: Props) {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/search/users?q=" + search,
    fetcher
  );
  return (
    <div className="mt-5">
      <p>Hasil Pencarian: {search}</p>

      <div>
        {isLoading ? (
          <p>Mohon Tunggu</p>
        ) : error ? (
          <p>Terjadi Kesalahan</p>
        ) : (
          <div>
            {data.items.map((item: any, index: number) => (
              <Link key={index} href={`/users/${item.login}`}>
                <div className="custom-shadow bg-sky-300 px-5 py-2 rounded-md text-black my-5">
                  <Image
                    src={item.avatar_url}
                    width={100}
                    height={100}
                    alt={"Avatar" + item.login}
                  />
                  <p>{item.login}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
