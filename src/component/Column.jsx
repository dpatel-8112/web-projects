import React from "react";
import { Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import style from "../style/ProjectCard.module.css";

function Column() {
  return (
    <>
      <Col className={style.column} sm={12} md={6} lg={4}>
        <ProjectCard />
      </Col>
    </>
  );
}

export default Column;
