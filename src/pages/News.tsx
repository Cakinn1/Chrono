import React, { useEffect, useState } from "react";
import { blogPosts } from "../ApiServices/BlogDataProducts";
import NewsItemCard from "../components/newsComponent/NewsItemCard";

export interface BlogDataProps {
  image: string;
  date: string;
  category: string;
  header: string;
  paragraph: string;
}

export default function News() {
  const [blog, setBlog] = useState<BlogDataProps[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string>("");

  useEffect(() => {
    setBlog(blogPosts);
  }, [blogPosts]);

  function handleFilteringBlogs(value: string) {
    setFilteredCategory(value);
  }

  const filteredBlog = filteredCategory
    ? blog.filter((item) => item.category === filteredCategory)
    : blog;

    console.log(blog)
  return (
    <section className="bg-white">
      <div className=" pt-[116px] mx-auto max-w-[1300px] ">
        <div className="py-12 flex justify-center items-center flex-col space-y-4 ">
          <h1 className="text-6xl">News</h1>
          <div className="flex gap-x-4 items-center">
            <span
              className="text-news"
              onClick={() => handleFilteringBlogs("Accessories")}
            >
              Accessories{" "}
            </span>
            |
            <span
              className="text-news"
              onClick={() => handleFilteringBlogs("")}
            >
              Default
            </span>{" "}
            |
            <span
              className="text-news"
              onClick={() => handleFilteringBlogs("Bracelets")}
            >
              Bracelets
            </span>{" "}
            |
            <span
              className="text-news"
              onClick={() => handleFilteringBlogs("Sunglasses")}
            >
              Sunglasses
            </span>{" "}
            |
            <span
              className="text-news"
              onClick={() => handleFilteringBlogs("Watches")}
            >
              Watches
            </span>
          </div>
        </div>
        <div className="flex flex-wrap p-6 gap-x-6 ">
          {filteredBlog.map((item) => (
            <NewsItemCard
              category={item.category}
              date={item.date}
              header={item.header}
              image={item.image}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
