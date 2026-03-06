import { getLatestNews } from "@/lib/new";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  if (!latestNews || latestNews.length === 0) {
    return <p>No latest news available</p>;
  }
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
