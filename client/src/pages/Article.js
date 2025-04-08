import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) {
    return <h1>Article does not exist</h1>;
  }
  return (
    <div>
      <h1 className="my-6 text-2xl font-bold text-gray-900 sm:text-41">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto mb-4 text-base leading-relaxed">{paragraph}</p>
      ))}
    </div>
  );
};

export default Article;
