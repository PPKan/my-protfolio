import React from "react";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";
import reactIcon from "../images/react.svg";
// import nodejsIcon from "../images/nodejs.svg";
import javascriptIcon from "../images/javascript.png";
import rubyIcon from "../images/ruby.svg";
import shoppingCartImage from "../images/project-image/shopping-cart.jpg";
import imageSeracherImage from "../images/project-image/image-seracher.jpg";
import portfolioImage from "../images/project-image/portfolio.jpg";
import calculatorImage from "../images/project-image/calculator.jpg";


export default function projects({ projectsRef }) {
  return (
    <div className="projects" ref={projectsRef}>
      <h1 className="projects-title">作品集</h1>
      <ProjectItem projects={sampleProjects} />
    </div>
  );
}

const sampleProjects = [
  {
    id: uuidv4(),
    name: "專案一 購物車",
    icons: [reactIcon],
    content:
      "使用React架構購物車，提供後台介面新增與刪除資料，並與Local storeage交互。\n✔ 使用者瀏覽體驗佳，易於瀏覽與新增商品\n✔ 後台使用介面清楚，方便賣家上架物品",
    image: shoppingCartImage,
    link: "https://nervous-wright-29777b.netlify.app",
  },
  {
    id: uuidv4(),
    name: "專案二 圖片搜尋引擎",
    icons: [reactIcon],
    content:
      "以圖片網站API為基礎，擷取各網站資料，並顯示於頁面上。\n✔ 使用tab區分各個頁面，維持頁面乾淨 \n✔ 圖片載入迅速，於當下即GET完畢資料",
    image: imageSeracherImage,
    link: "https://serene-golick-535c81.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "專案三 個人履歷",
    icons: [reactIcon],
    content:
      "自行繪製設計稿作為基礎，並依稿件完成切版，並加上特效。\n✔ 分層清楚，結構明瞭\n✔ 動畫吸睛卻不使人難以閱讀。",
    image: portfolioImage,
    link: "https://gallant-nightingale-078fd5.netlify.app",
  },
  {
    id: uuidv4(),
    name: "其他專案",
    icons: [javascriptIcon, rubyIcon],
    content:
      "✔ JavaScript/CSS/HTML製作的計算機\n✔ Ruby製作的終端機圈圈叉叉遊戲\n✔ Ruby製作的終端機猜單字遊戲",
    image: calculatorImage,
    link: "https://linkby.tw/petervsjim",
  },
];
