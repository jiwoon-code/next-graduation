import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListDetail() {
  const router = useRouter();
  const onClick = () => {
    router.push(`/list/${id}`);
  };
  const [details, setDetails] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(` https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction
        `)
      ).json();
      setDetails(results);
    })();
  }, []);
  return (
    <div>
      {!details && <h4>Loading...</h4>}
      {details?.map((detail) => {
        <h4>{detail.rank}</h4>;
      })}
    </div>
  );
}
