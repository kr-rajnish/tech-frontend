import React, { useEffect, useState } from "react";
import { Container, Image, Tab, TabContent, Tabs } from "react-bootstrap";
import bgImg from "../Images/dashboardImage.svg";
import logo from "../Images/Logo.svg";
import logoutImg from "../Images/Logout.svg";
import createProjectImg from "../Images/create-project-active.svg";
import dashboardImg from "../Images/Dashboard-active.svg";
import projectListImg from "../Images/Project-list-active.svg";
// import Dashboard from "../Components/Dashboard";
import Dashboard from "../Components/Dashboard";
import CreateProject from "../Components/CreateProject";
import ProjectListing from "../Components/ProjectListing";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { removeData } from "../Components/utils/localStorage";

const HomePage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [activeTab, setActiveTab] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const tabs = ["Dashboard", "Project Listing", "Create Project"];
  // const navigate = useNavigate();

  const handleTab = (tab) => {
    if (tab === activeTab) {
      return;
    }

    setActiveTab(tab);
    // fetchData(tab);
  };

  // const fetchData = async (tab) => {
  //   setLoading(true);
  //   try{
  //     const fetch1 = await axios.get("");
  //     const fetch2 = await axios.get("");

  //     const data1 = fetch1.data;
  //     const data2 = fetch2.data;

  //     setData(data1);
  //     setChartData(data2);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(activeTab);
  // }, [activeTab]);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  // const handleLogout = () => {
  //   removeData("userInfo");
  //   navigate("/");
  // };

  return (
    <Container fluid>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "30vh",
        }}
      >
        {/* <Dashboard /> */}
      </div>

      <div className="d-flex justify-content-between mt-5">
        <h1 className="fw-500 pl-4"> {tabs[currentTab]}</h1>
        <Image src={logo} height={70} />
      </div>

      <Tabs
        activeKey={currentTab}
        onSelect={handleTabChange}
        id="controlled-tab-example"
        className="bg-transparent mt-4"
        fill
      >
        {/* <TabContent> */}
        <Tab
          eventKey={0}
          onClick={() => handleTab("tab1")}
          title={
            <Image
              src={dashboardImg}
              style={{ cursor: "pointer" }}
              className="m-4"
            />
          }
        ></Tab>
        <Tab
            eventKey={1}
            onClick={() => handleTab("Tab2")}
            title={
              <Image
                src={projectListImg}
                style={{ cursor: "pointer" }}
                className="m-4"
              />
            }
          ></Tab>
          <Tab
            eventKey={2}
            title={
              <Image
                src={createProjectImg}
                style={{ cursor: "pointer" }}
                className="m-4"
              />
            }
          ></Tab>
          <Tab
            eventKey={3}
            title={
              <Image
                src={logoutImg}
                style={{ cursor: "pointer" }}
                // onClick={handleLogout}
                className="m-4"
              />
            }
          ></Tab>
        {/* </TabContent> */}

        <div className="tab-panel">
            <Tab.Content>
                <Tab.Pane eventKey={0}>
                    <Dashboard />
                </Tab.Pane>
                <Tab.Pane eventKey={1}>
                    <ProjectListing />
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                    <CreateProject />
                </Tab.Pane>
            </Tab.Content>
        </div>
      </Tabs>
    </Container>
  );
};

export default HomePage;
