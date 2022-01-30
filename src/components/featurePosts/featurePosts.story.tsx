import React from "react";
import { storiesOf } from "@storybook/react";
import { PostSnippet } from "../../types";
import { FeaturePosts } from "./featurePosts";

const story = storiesOf("Components|Home", module);

const img = {
  aspectRatio: 1.5075376884422111,
  src:
    "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  srcSet:
    "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80 600w,\nhttps://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80 1200w,\nhttps://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80 1355w",
  sizes: "(max-width: 1355px) 100vw, 1355px",
};

const sample: PostSnippet = {
  title: "Suishow Engineer Blog",
  summary:
    "ブロックチェーンやメタバース関連のエンジニア向け情報ポータルサイトです。",
  img,
  imgAlt: "",
  href: "#",
  tags: ["finance", "leadership", "opinion", "blockchain"],
  publishedDate: new Date(),
};

story.add("FeaturePosts", () => (
  <FeaturePosts featurePosts={[sample, sample, sample, sample]} />
));
