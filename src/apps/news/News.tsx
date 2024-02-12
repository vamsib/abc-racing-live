import React, { Component, useEffect, useRef, useState } from "react";
import { NewsList, NewsListItem } from "./News.styles";
import {
  getNewsListing,
  NewsListItem as NewsItem,
  NewsListItemImage,
} from "./News.domain";

const withSSR = (Component: any, dataId: string, init: () => any) => {
  return () => {
    const dataRef = useRef(
      "undefined" !== typeof document ? document.getElementById(dataId) : null,
    );
    const serverProps =
      typeof window === "undefined"
        ? init()
        : JSON.parse(dataRef?.current?.getAttribute("value") || "{}");
    const [props, setProps] = useState({});

    useEffect(() => {
      if (
        !dataRef?.current ||
        !dataRef?.current?.getAttribute("value") ||
        dataRef?.current?.getAttribute("data-used") === "true"
      ) {
        console.log("here");
        setProps(init());
      }
      dataRef?.current?.setAttribute("data-used", "true");
    }, []);

    return (
      <data id={dataId} value={JSON.stringify(serverProps)}>
        <Component {...serverProps} {...props}></Component>
      </data>
    );
  };
};

type NewsProps = {
  news: NewsItem[];
};

function getSrcSet(images: NewsListItemImage) {
  return [
    `${images.sm1.url} 120w`,
    `${images.sm2.url} 240w`,
    `${images.md1.url} 488w`,
    `${images.md2.url} 976w`,
    `${images.lg1.url} 488w`,
    `${images.lg2.url} 976w`,
  ].join(", ");
}

const News = ({ news }: NewsProps) => {
  return (
    <NewsList>
      {news?.length &&
        news.map((item, i) => (
          <NewsListItem key={`news-${i}`}>
            <img
              srcSet={getSrcSet(item.image)}
              sizes="(min-width: 768px) 488px, 120px"
              src={item.image.sm1.url}
              alt={item.image.sm1.altText}
            />
            {item.title}
          </NewsListItem>
        ))}
    </NewsList>
  );
};

export default withSSR(News, "news-data", function () {
  return {
    news: getNewsListing(),
  };
});
