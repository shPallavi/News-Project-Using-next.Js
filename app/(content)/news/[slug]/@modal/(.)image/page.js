import { notFound } from "next/navigation";
import Image from "next/image";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/new";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={500}
            height={400}
          />
        </div>
      </dialog>
    </>
  );
}
