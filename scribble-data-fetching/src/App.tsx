import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fethingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";
import { SiReactquery } from "react-icons/si";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function App() {
  const [fetchPosts, setFetchPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });

        setFetchPosts(blogPosts);
      } catch (error) {
        console.error(error);
        setError((error as Error).message);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (isFetching) {
    content = (
      <div className="loading">
        <SiReactquery size={160} id="loading-fallback" />
        <h2>Loading ...</h2>
      </div>
    );
  }

  if (fetchPosts) {
    content = <BlogPosts posts={fetchPosts} />;
  }

  return (
    <main>
      <img
        src={fethingImg}
        alt="An abstract image depicting a data fetching process."
      />
      {content}
    </main>
  );
}
