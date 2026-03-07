import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getNewsItem } from "@/lib/new";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="fullscreen-image">
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={500}
            height={400}
          />
        </Link>
      </div>
    </>
  );
}
