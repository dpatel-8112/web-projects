import React from "react";
import { Card } from "react-bootstrap";
import { ProjectContext } from "../context/ProjectContext";
import style from "../style/ProjectCard.module.css";
import { Button } from "react-bootstrap";

function ProjectCard() {
  const project = React.useContext(ProjectContext);

  //   console.log(project);
  return (
    <>
      <Card
        style={{ backgroundColor: `${project.bgColor}` }}
        className={style.Card}
      >
        <Card.Img
          onClick={() =>
            window.open(`${project.link1}/${project.link2}`, "_blank")
          }
          className={style.Image}
          variant="top"
          src={require("../img" + project.imgURL).default}
        />
        <Card.Body>
          <Card.Text className={style.Title}>{project.heading}</Card.Text>
          <Card.Text className={style.Buttons}>
            <div>
              <Button
                onClick={() =>
                  window.open(`${project.githubURL}/${project.link2}`, "_blank")
                }
                className={style.Button}
                variant="primary"
              >
                Github
              </Button>
            </div>
            <div>
              <Button
                onClick={() =>
                  window.open(`${project.link1}/${project.link2}`, "_blank")
                }
                className={style.Button}
                variant="primary"
              >
                Live
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
