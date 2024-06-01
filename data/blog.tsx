import React, { ReactElement } from "react";

enum MainTags {
  Extinction = "extinction",
  Orphans = "orphans",
}

export interface Blog {
  id: number;
  title: ReactElement;
  content: ReactElement; // you can nest html elements here
  datePublished?: string;
  mainTag: MainTags;
  tags: string[];
}

const blogs: Blog[] = [
  {
    id: 1,
    title: <h1>Bright extinction and a tale of two orphans</h1>,
    content: <span>This is the first blog</span>,
    datePublished: "2022-01-01",
    mainTag: MainTags.Extinction,
    tags: ["extinction", "orphans"],
  },
];
