import React from "react";
import { Container, Row } from "react-bootstrap";
import Column from "./Column";
import Projects from "../json/Projects.json";
import { ProjectProvider } from "../context/ProjectContext";

function Home() {
  const style = {
    title: {
      marginTop: "10px",
      fontSize: "26",
      padding: "20px",
      backgroundColor: "red",
    },
  };
  return (
    <>
      <Container>
        <h1 style={style.title}>Basic Projects</h1>
        <Row>
          {Projects.map((project) => (
            <ProjectProvider value={project}>
              <Column />
            </ProjectProvider>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
