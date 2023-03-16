import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push(`/books/${title}/${id}`);
  };
  const [books, setBooks] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
      ).json();
      setBooks(results);
    })();
  }, []);
  return (
    <div>
      {!books && <h4>Loading...</h4>}
      {books?.map((book) => (
        <h4>
          <Link href={`/books/${book.list_name}`}>{book.list_name}</Link>
        </h4>
      ))}
    </div>
  );
}
