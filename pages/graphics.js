import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import "primeicons/primeicons.css";
import style from "../style/New.module.css";
import Forem from "../components/Forem";

const Graphic = () => {
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
              Human Resources
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
                  Founder's Office - HR Strategic Partner
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
                What's Ditto?
              </strong>
            </p>
            <p className={style.n}>
              Ditto is a new offering from Finshots. We want to help millennials
              make better financial decisions. And we are starting with
              Insurance. With Ditto, you don't just compare insurance. You
              understand it. Narrow down choices. Avoid pitfalls and make better
              decisions.
            </p>
            <br />
            <p className={style.n}>
              Finshots is one of the leading financial newsletters with over
              500K subscribers.
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                What do we do at Ditto?
              </strong>
            </p>
            <p className={style.n}>
              We explain health insurance and term(life) insurance in a language
              you can understand.
              <br />
              We are an insurtech company primarily selling Health and Term Life
              Insurance policies.
            </p>

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
                What will you be working on?
              </strong>
            </p>
            <p className={style.n}>
              You will be working closely with the founders and with all
              departmental heads and implementing strategies to ensure the
              company is ready for scaling. You will develop, implement, and
              track HR plans that will affect the culture, structure, and
              success of the company in the foreseeable future. You will be
              responsible to formulate an HR Vision, decide on a strategic HR
              Direction and build plans to achieve the set goals. You will also
              be modeling and driving the HR practices of the company.{" "}
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Qualifications and Desired Skills
              </strong>
            </p>
            <p className={style.n}>
              Minimum experience in a strategic Human Resources role:{" "}
              <strong> 7 - 10 years</strong>
              <br />
              Prior experience in working with Startups and building the HR team
              from scratch will be an added advantage.
              <br />
              Prior experience in scaling up teams and developing HR-related
              strategies is a must.
              <br />
              Excellent communication skills.
              <br />
              Collaborative skills and ability to work with multiple
              stakeholders
              <br />
              Good planning and execution skills.
            </p>
            <p className={style.n}>
              You will be required to work out of the office (175/176
              Billekahalli,BG Road, Bengaluru, Karnataka - 560076)
            </p>

            <p className="p-2" style={{ margin: "0 0 10px" }}>
              <strong
                className=""
                style={{ fontWeight: "bold", fontSize: "13px" }}
              >
                Perks
              </strong>
            </p>
            <p className={style.n}>
              Comprehensive Health Insurance
              <br />
              Compensation as per industry standards
            </p>
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

export default Graphic;
