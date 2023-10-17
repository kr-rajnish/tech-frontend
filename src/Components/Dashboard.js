import React from "react";
import { Col, Row } from "react-bootstrap";
// import bgImg from "../Images/dashboardImage.svg";
import './dashboard.css';


const Dashboard = () => {
    // const backgroundStyle = {
    //     backgroundImage: `url(${bgImg})`, // Set your image URL
    //     // backgroundSize: "cover", // Adjust as needed
    //     backgroundRepeat: "no-repeat", // Adjust as needed
    //     backgroundPosition: "right-end", // Adjust as needed
    //     // height: "100vh", // Adjust as needed
    //   };
  return (
    // <div  style={backgroundStyle}>
    <Row>
      <Col className="custom-margin-top">
        <div
          className="card"
          style={{
            width: "250px",
            height:"130px",
            border: "1px solid teal",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <div className="card-body">
            <p className="card-text text-muted">head</p>
            <h1
              className="card-title"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            >
              count
            </h1>
          </div>
        </div>
      </Col>
      <Col className="custom-margin-top">
        <div
          className="card"
          style={{
            width: "250px",
            border: "1px solid teal",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <div className="card-body">
            <p className="card-text text-muted">head</p>
            <h1
              className="card-title"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            >
              count
            </h1>
          </div>
        </div>
      </Col>
      <Col className="custom-margin-top">
        <div
          className="card"
          style={{
            width: "250px",
            border: "1px solid teal",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <div className="card-body">
            <p className="card-text text-muted">head</p>
            <h1
              className="card-title"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            >
              count
            </h1>
          </div>
        </div>
      </Col>
      <Col className="custom-margin-top">
        <div
          className="card"
          style={{
            width: "250px",
            border: "1px solid teal",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <div className="card-body">
            <p className="card-text text-muted">head</p>
            <h1
              className="card-title"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            >
              count
            </h1>
          </div>
        </div>
      </Col>
      <Col className="custom-margin-top">
        <div
          className="card"
          style={{
            width: "250px",
            border: "1px solid teal",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <div className="card-body">
            <p className="card-text text-muted">head</p>
            <h1
              className="card-title"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            >
              count
            </h1>
          </div>
        </div>
      </Col>
    </Row>
    // </div>
  );
};

export default Dashboard;
