import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
// import axios from "axios"; // Make sure you've installed Axios
// import { useHistory } from "react-router-dom";

const CreateProject = () => {
  //   const [check, setCheck] = useState(false);
  //   const [data, setData] = useState({});
  //   const history = useHistory();

  //   const handleChange = (e) => {
  //     const { value, name } = e.target;

  //     setData({
  //       ...data,
  //       [name]: value,
  //     });
  //   };

  //   const handleSubmit = () => {
  //     if (!data.ProjectName) {
  //       return setCheck(true);
  //     }
  //     setCheck(false);

  //     if (
  //       !data.StartDate ||
  //       !data.EndDate ||
  //       !data.Reason ||
  //       !data.Type ||
  //       !data.Division ||
  //       !data.Category ||
  //       !data.Priority ||
  //       !data.Department ||
  //       !data.Location
  //     ) {
  //       alert("Fill all the Fields"); // Replace with your desired alert mechanism
  //       return;
  //     }

  // try {
  //   axios
  //     .post("https://tech-prime-lab.onrender.com/project/addProject", data)
  //     .then((res) => {
  //       if (res.data.err) {
  //         alert(res.data.msg); // Replace with your desired alert mechanism
  //       } else {
  //         alert(res.data.msg); // Replace with your desired alert mechanism
  //         history.push("/projects"); // Redirect to projects page
  //       }
  //     });
  // } catch (err) {
  //   console.log(err);
  // }
  //   };

  return (
    <div className="container mt-4">
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="exampleFormControlTextarea1">
              <Form.Label>Project Theme</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="ProjectName"
                // onChange={handleChange}
                placeholder="Enter Project Theme"
              />
              {/* {check && <Form.Text className="text-danger">Project Theme Required</Form.Text>} */}
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-end">
            <Button
              variant="primary"
              type="button"
              //   onClick={handleSubmit}
            >
              Save Project
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="reason">
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="select"
                name="Reason"
                // onChange={handleChange}
              >
                <option value="Business">Business</option>
                <option value="Dealership">Dealership</option>
                <option value="Transport">Transport</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                name="Type"
                // onChange={handleChange}
              >
                <option value="Internal">Internal</option>
                <option value="External">External</option>
                <option value="Vendor">Vendor</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="division">
              <Form.Label>Division</Form.Label>
              <Form.Control
                as="select"
                name="Division"
                // onChange={handleChange}
              >
                <option value="Filters">Filters</option>
                <option value="Compressor">Compressor</option>
                <option value="Pumps">Pumps</option>
                <option value="Glass">Glass</option>
                <option value="Water Heater">Water Heater</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="Category"
                // onChange={handleChange}
              >
                <option value="Quality A">Quality A</option>
                <option value="Quality B">Quality B</option>
                <option value="Quality C">Quality C</option>
                <option value="Quality D">Quality D</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                name="Priority"
                // onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                as="select"
                name="Department"
                // onChange={handleChange}
              >
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Stores">Stores</option>
                <option value="Strategy">Strategy</option>
                <option value="Quality">Quality</option>
                <option value="Maintenance">Maintenance</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date as per Project Plan</Form.Label>
              <Form.Control
                type="date"
                name="StartDate"
                // onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="endDate">
              <Form.Label>End Date as per Project Plan</Form.Label>
              <Form.Control
                type="date"
                name="EndDate"
                // onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            {/* <Form.Group controlId="location"> */}
              {/* <Form.Label>Location</Form.Label> */}
              <label>Location</label>
              <select className="form-select" aria-label="Default select example" 
              // onChange={handleChange} 
              >
              <option value="Chennai">Select opction</option>
                <option value="Bengaluru">Chennai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Pune">Pune</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
              </select>
            {/* </Form.Group> */}
          </Col>
        </Row>
      </Form>

      {/* <div className="text-center mt-4">
        <Button
          variant="primary"
          type="button"
        //   onClick={handleSubmit}
        >
          Save the Project
        </Button>
      </div> */}
    </div>
  );
};

export default CreateProject;
