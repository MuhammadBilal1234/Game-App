import type { NextPage } from "next";
import Head from "next/head";
import TopBar from "../components/TopBar";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div>
      <TopBar />
    </div>
  );
};

export default IndexPage;
