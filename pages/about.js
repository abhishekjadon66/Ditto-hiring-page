import React, { useRef, useState } from "react";
import { useEffect } from "react";
import style from "../style/New.module.css";
import styles from "../styles/Home.module.css";
import "primeicons/primeicons.css";
import Forem from "../components/Forem";

const About = () => {
  const scollToRef = useRef();
  const [hidden, setHidden] = useState(false);
  const onClick = () => setHidden(true);

  useEffect(() => {
    if (scollToRef.current) {
      scollToRef.current.scrollIntoView();
    }
  }, [hidden]);

  return (
    <div style={{ height: "200vh" }}>
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
              href="/">
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
                  Graphics Designer (Remote)
                </h1>
                <div
                  className="text"
                  style={{ fontSize: "14px", color: "#fff" }}
                >
                  Preferabel Location(s): Bengaluru, India
                  <div className="">Work Type:Full Time</div>
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
                  Apply Now
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
                What's Finshots?
              </strong>
            </p>
            <p className={style.n}>
              Finshots is a new age media startup aiming to make finance and
              business news more relatable to millennials. We curate digestible
              content on how various business news affects the average Joe. We
              talk in simple English. No Jargons. Just simple English.
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                What do we do at Finshots?
              </strong>
            </p>
            <p className={style.n}>
              <br />{" "}
            </p>
            <ul className={style.n}>
              <li>
                Finshots Daily(https://finshots.in), a 3-min daily newsletter on
                the most important finance and business news, is delivered to
                over 5,00,000 subscribers every day.
              </li>
              <li>
                Finshots Daily is also a podcast with over a million listens and
                is at the top of the podcast charts in India
              </li>
              <li>
                Finshots Markets (https://finshots.in/markets/), a weekly
                newsletter on the most important happenings from the world of
                stock markets. This newsletter is done in collaboration with
                Zerodha.
              </li>
              <li>
                Ditto by Finshots (http://joinditto.in/), a new offering from
                Finshots which aims to help millennials make better financial
                decisions with respect to Insurance.{" "}
              </li>
              <li>We have some more cool products in our pipeline</li>
            </ul>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Who's backing us?
              </strong>
            </p>
            <p className={style.n}>
              We are funded by Zerodha- India's largest stockbroker{" "}
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Who are we looking for?
              </strong>
            </p>
            <p className={style.n}>
              We are looking for a Graphic Designer to join our Marketing team.
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Responsibilities :
              </strong>
            </p>
            <p className={style.n}>
              <br />{" "}
            </p>
            <ul className={style.n}>
              <li>
                Managing website UI design, creative company brochures, and
                other design projects
              </li>
              <li>
                Collaborating, brainstorming, and strategizing with the
                marketing team for a wide range of designs.
              </li>
              <li>
                Create visual aspects of marketing materials, content, and
                social media, including infographics for Finshots on a daily
                basis{" "}
              </li>
              <li>
                Working independently and cooperatively on multiple projects
                with the marketing team, meeting deadlines, and completing the
                designs based on the requirements.
              </li>
              <li>
                Generating novel ideas for content design & illustrations that
                align with the company's objectives{" "}
              </li>
            </ul>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Requirements :
              </strong>
            </p>
            <p className={style.n}>
              <br />
            </p>
            <ul className={style.n}>
              <li>
                Knowledge of design software- Adobe Photoshop, Illustrator,
                Inkscape etc.
              </li>
              <li>Good communication skills</li>
              <li>Ability to lead new initiatives</li>
            </ul>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Perks :
              </strong>
            </p>
            <p className={style.n}>
              <br />
            </p>
            <ul className={style.n}>
              <li>
                Comprehensive health insurance coverage for self and family.
              </li>
              <li>Compensation as per industry standards</li>
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

export default About;
