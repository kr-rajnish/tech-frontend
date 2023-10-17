import React, { useState } from "react";
import bgImg from "../Images/login-bg.svg";
import logo from "../Images/Logo.svg";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";

const LoginPage = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setCheckEmail(false);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
    setCheckPass(false);
  };

  const handleSubmit = () => {
    if (email.trim() === "") {
      setCheckEmail(true);
    }
    if (password.trim() === "") {
      setCheckPass(true);
    }
    // if (!email === "" && !password === "") {
    //   setLoading(true);
    //   axios
    //     .post("https://tech-prime-lab.onrender.com/user/login", {
    //       email,
    //       password,
    //     })
    //     .then((res) => {
    //       console.log(res.data.msg);
    //       setLoading(false);
    //       setError("");
    //       saveData("userInfo", true);
    //       navigate("/projects"); // Use navigate to change routes
    //     })
    //     .catch((err) => {
    //       setError(err.response.data.msg);
    //       setLoading(false);
    //     });
    // }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6}>
          <div
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "80vh",
            }}
          ></div>
        </Col>
        <Col xs={12} lg={6} className="d-flex flex-column align-items-center">
          <Image src={logo} className="mt-5" />
          <p className="text-center text-white font-weight-bold">
            Online Project Management
          </p>
          <div className="login-form">
            <h3 className="text-center font-weight-bold mb-4">Login to get Started</h3>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  isInvalid={checkEmail}
                />
                {checkEmail && (
                  <Form.Text className="text-danger">Email is required.</Form.Text>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleChangePass}
                    isInvalid={checkPass}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {/* {showPassword ? <BsEyeSlash /> : <BsEye />} */}
                      button
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                {checkPass && (
                  <Form.Text className="text-danger">Password is required.</Form.Text>
                )}
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleSubmit}
                // disabled={loading}
              >
                {/* {loading ? "Logging..." : "Login"} */}
              </Button>
            </Form>
            {error && (
              <p className="text-danger mt-3 text-center">{error}</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
