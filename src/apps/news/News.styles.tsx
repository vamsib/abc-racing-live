import { styled } from "../../ds/utils";

export const NewsPage = styled("div", ["ds-m-3"]);

export const NewsList = styled("ol", [
  "md:ds-grid",
  "md:ds-grid-cols-[[first-start]_1fr_[first-end_second-start]_1fr_[second-end]]",
  "md:ds-gap-x-3",
  "md:ds-gap-y-3",
]);

export const NewsListItem = styled("li", [
  "ds-flex",
  "ds-gap-2",
  "ds-mb-3",
  "md:ds-flex-col",
  "md:ds-text-largeCopy",
]);
