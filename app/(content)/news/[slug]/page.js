import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/new";

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={500}
              height={400}
            />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}
