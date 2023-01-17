import styles from "../styles/Home.module.css";
import "primeicons/primeicons.css";
import style from "../style/New.module.css";
import React, { useRef, useState } from "react";
import Forem from "../components/Forem";
import { useEffect } from "react";

const SEO = () => {
  const scollToRef = useRef();
  const [hidden, setHidden] = useState(false);
  const onClick = () => setHidden(true);

  useEffect(() => {
    if (scollToRef.current) {
      scollToRef.current.scrollIntoView();
    }
  }, [hidden]);

  return (
    <div style={{ height: "150vh" }}>
      <div>
        <div
          className="job-details-header sticky-top"
          style={{
            backgroundColor: "#030A21",
            color: "#fff",
            padding: "30px 0",
          }}
        >
          <div
            className="content"
            style={{ width: "75%", maxWidth: "960px", margin: "0 auto" }}
          >
            <a
              className="link-back"
              style={{
                marginBottom: "20px",
                cursor: "pointer",
                display: "inline-block",
                color: "white",
                textDecoration: "auto",
              }}
              href="/"
            >
              <i
                className="pi pi-arrow-left"
                style={{
                  fontSize: "15px",
                  display: "inline-block",
                  letterSpacing: "5px",
                  fontWeight: "bolder",
                }}
              ></i>
              Marketing
            </a>
            <div className="d-flex flew-rows">
              <div className={styles.h1}>
                <h1
                  className=""
                  style={{
                    marginTop: "0",
                    fontSize: "32px",
                    marginBottom: "5px",
                    fontWeight: "600",
                    lineHeight: "1.1",
                  }}
                >
                  SEO Strategist
                </h1>
                <div
                  className="text"
                  style={{ fontSize: "14px", color: "#fff" }}
                >
                  Remote
                  <div className="">Work Type: Full Time</div>
                </div>
              </div>
              <div
                className="text-center"
                style={{
                  textAlign: "right",
                  padding: "0 15px",
                  width: "33.333%",
                }}
              >
                <button
                  className={styles.butt}
                  style={{
                    color: "white",
                    borderColor: "white",
                    border: "0",
                    lineHeight: "1.8em",
                    float: "right",
                    textDecoration: "auto",
                  }}
                  onClick={() => {
                    setHidden(true);
                    if (scollToRef.current) {
                      scollToRef.current.scrollIntoView();
                    }
                  }}
                >
                  Aplly Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.new}>
          <div className={style.m}>
            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                What is Ditto?
              </strong>
            </p>
            <p className={style.n}>
              Ditto Insurance (joinditto.in) is a new-age insurance platform
              created by & for Millenials, where we simplify insurance and help
              people purchase the best plans in the market. Ditto is backed by
              Zerodha (India's largest stockbroker) and is brought to you by the
              same people that created Finshots, a 3-minute financial newsletter
              with over 500K subscribers. With Ditto's free consultations,
              no-spam policy & honest advice guarantee, we are revolutionalizing
              the very concept of insurance in India. And to lead this
              revolution, we are forming a brilliant team of talented,
              enthusiastic individuals.
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Job Brief{" "}
              </strong>
            </p>
            <p className={style.n}>
              <br />
            </p>
            <ul className={style.n}>
              <li>
                You will be responsible for analyzing, reviewing, and executing
                the changes related to websites in order to get them optimized
                for the search engine.
              </li>
              <li>
                Help us maximizes the traffic that comes to our site by
                improving the ranking within the search engine.
              </li>
              <li>
                Coordinating with the content, design, and operations teams to
                manage activities to improve on-site as well as off-site SEO
              </li>
              <li>Drive link building to improve our domain authority</li>
              <li>
                Make content that should be of quality and which improves
                readability for our customers
              </li>
              <li>
                Conduct a detailed analysis of the results derived that should
                be in coordination with the website’s structure and the web
                pages
              </li>
            </ul>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Requirements
              </strong>
            </p>
            <p className={style.n}>
              <br />
            </p>
            <ul className={style.n}>
              <li>
                4-5 years of experience in SEO or relevant marketing fields.
              </li>
              <li>Accuracy and attention to detail.</li>
              <li>Good command of English.</li>
              <li>
                Ability to communicate, present and influence effectively.
              </li>
              <li>
                Experience in building the SEO process from scratch at a
                start-up will be given preference
              </li>
              <li>Should be a team player</li>
              <li>
                Ability to explain the technical jargon in the simplest manner
                to the team and customers
              </li>
            </ul>
          </div>
        </div>
        {hidden ? (
          <div ref={scollToRef}>
            <Forem />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SEO;
