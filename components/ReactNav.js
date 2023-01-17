import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import style from "../style/New.module.css";

export default function ReactNav() {
  return (
    <>
      <header className={`shadow-sm p-2`}>
        <div className="d-flex alig-items-center position-relative ms-5 ps-5">
          <Image src="/../public/logo2.png" alt="" width={100} height={0} />

          <p
            className={`bg-primary text-white position-absolute align-items-center`}
            style={{
              borderRadius: "9999px",
              width: "25px",
              height: "25px",
              fontSize: "8px",
              padding: "0px 2px",
              transform: "rotate(-18deg)",
              top: "28px",
              left: "130px",
            }}
          >
            <span className="fs-6 fw-light">c</span>
            <span className="">om</span>
          </p>

          <Navbar className="">
            <Container>
              <Navbar.Brand
                href="/"
                className={`fw-normal`}
                style={{ fontSize: "15px" }}
              >
                #ChunoWahiJoHaiSahi
              </Navbar.Brand>
              <div className={style.icons8twitter}>
                <a target="_blank" href=""></a>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
}
