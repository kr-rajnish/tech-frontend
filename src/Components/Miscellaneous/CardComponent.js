import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardComponent = (
//     {
//   ProjectName,
//   StartDate,
//   EndDate,
//   Reason,
//   Type,
//   Division,
//   Category,
//   Priority,
//   Department,
//   Location,
//   Status,
//   handleUpdate,
//   id,
// }
) => {
//   const monthNumberToWord = (monthNumber) => {
//     const date = new Date();
//     date.setMonth(monthNumber - 1); // Months are zero-based in JavaScript Date object
//     return date.toLocaleString("en-US", { month: "short" });
//   };

  return (
    <Card className="mb-5" style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)" }}>
  <Card.Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "-8" }}>
    <Row>
      <Col xs={8}>
        <h6 style={{ color: "gray.700" }}>projectname</h6>
        <p style={{ color: "gray.500", fontSize: "12px" }}>
          pages
        </p>
      </Col>
      <Col xs={4}>
        <h6 style={{ color: "gray.700", fontSize: "13px", textAlign: "right" }}>
          Status:5
        </h6>
      </Col>
    </Row>
    <Row style={{ fontSize: "14px", textAlign: "left" }}>
      <Col>
        <p style={{ marginBottom: "1", color: "gray.500" }}>
          Reason: <span style={{ color: "black", marginLeft: "5px" }}>
            Reason
          </span>
        </p>
      </Col>
      <Col>
        <p style={{ color: "gray.500" }}>
          Type: <span style={{ color: "black", marginLeft: "5px" }}>
            Type
          </span>
        </p>
      </Col>
      <Col>
        <p style={{ color: "gray.500" }}>
          Category: <span style={{ color: "black", marginLeft: "5px" }}>
            Category
          </span>
        </p>
      </Col>
      <Col>
        <p style={{ color: "gray.500" }}>
          Division: <span style={{ color: "black", marginLeft: "5px" }}>
            Division
          </span>
        </p>
      </Col>
      <Col>
        <p style={{ color: "gray.500" }}>
          Dept: <span style={{ color: "black", marginLeft: "5px" }}>
            Department
          </span>
        </p>
      </Col>
      <Col>
        <p style={{ color: "gray.500" }}>
          Location: <span style={{ color: "black", marginLeft: "5px" }}>
            Location
          </span>
        </p>
      </Col>
    </Row>
    <Card.Footer>
      <Row style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            size="sm"
            variant="primary"
            // onClick={() => handleUpdate("Running", id)}
            style={{ borderRadius: "20", fontWeight: "400" }}
          >
            Start
          </Button>
          <Button
            size="sm"
            variant="outline-primary"
            // onClick={() => handleUpdate("Closed", id)}
            style={{ borderRadius: "20", fontWeight: "400" }}
          >
            Close
          </Button>
          <Button
            size="sm"
            variant="outline-primary"
            // onClick={() => handleUpdate("Cancelled", id)}
            style={{ fontWeight: "400" }}
          >
            Cancel
          </Button>
        </div>
      </Row>
    </Card.Footer>
  </Card.Header>
</Card>

  );
};

export default CardComponent;
