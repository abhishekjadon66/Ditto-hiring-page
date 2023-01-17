import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'

export default function Blogs2() {
  const router = useRouter()
  const [hello, sethello] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        sethello(parsed);
      });
  }, []);
  return (
    <>
      <div className={styles.g}>
        <main className={styles.main}>
          {hello.map((blogitem) => {
            return (
              <div key={blogitem.slug}>
                <div className="d-flex justify-content-around">
                  <h5 className={styles.bl}>Advisory</h5>
                  <div className={styles.open}>1 Open Roles</div>
                </div>
                <div className="d-grid mb-3 justify-content-center p-3">
                  <div className={styles.post}>
                  <div onClick={() => router.push('/advisor')}>
                      <h5 className={styles.blogItemh3}>{blogitem.titl}</h5>
                  
                    <div
                      className="float-end"
                      style={{ padding: "6px 25px", display: "inline-block" }}
                    >
                      <div
                        className=""
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          color: "#183247",
                          textAlign: "right",
                          fontSize: "14px",
                        }}
                      >
                        Bengaluru, Karnataka <br />
                        Full Time
                      </div>
                      <div className="float-end">
                        <i
                          className="pi pi-angle-right"
                          style={{
                            marginLeft: "20px",
                            marginRight: "5px",
                            fontSize: "20px",
                            color: "#7b40a0",
                            display: "inline-block",
                            verticalAlign: "middle",
                          }}
                        ></i>
                      </div>
                    </div>
                    <p className={styles.substr}>
                      {blogitem.content3.substr(0, 193)}...
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}
