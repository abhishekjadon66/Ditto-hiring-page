import Abhi from "../components/Abhi";
import React from "react";
import Blogs from "../components/Blogs";
import BLogs2 from "../components/Blogs2";
import Blogs1 from "../components/Blogs1";
import Drop from "../components/Drop";
export default function index() {
  return (
    <>
      <div style={{ height: "200vh" }}>
        {/* Slider  */}
        <Abhi />
        {/* Dropdown */}
        <Drop />
        {/* Blogitem */}
        <Blogs />

        {/* blogitem */}
        <BLogs2 />

        {/* blogitem */}
        <Blogs1 />
      </div>
    </>
  );
}
