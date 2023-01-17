import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'
export default function () {
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
        <div className={styles.grap}>
          <main className={styles.main}>
          {hello.map((blogitem) => {
            return (
              <div key={blogitem.slug}>
                <div className="d-flex justify-content-around">
                  <h5 className={styles.bl}>Marketing</h5>
                  <div className={styles.open}>2 Open Roles</div>
                </div>
                <div className="d-grid mb-3 justify-content-center p-3 row ">
                  <div className={styles.post}>
                        <div onClick={() => router.push('/about')}>

                      <h4 className={styles.blogItemh3}>{blogitem.titlle}</h4>
                  
                    <div
                      className="float-end"
                      style={{ padding: "0px 25px", display: "inline-block" }}
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
                        Remote <br />
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
                      {blogitem.content.substr(0, 193)}...
                    </p>
                    </div>
                  </div>
                  <div className={styles.post}>
                  <div onClick={() => router.push('/SEO')}>

                      <h5 className={styles.blogItemh3}>{blogitem.title}</h5>
                    
                    <div
                      className="float-end"
                      style={{ padding: "0px 25px", display: "inline-block" }}
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
                        Remote <br />
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
                      {blogitem.content1.substr(0, 193)}...
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
