import React from "react";
import tidyhiveFE from "../images/tidyhive-fe.png";
import tidyhiveBE from "../images/tidyhive-be.png";
import schoolReport from "../images/schoolreport.png";
import { Card, Image } from "semantic-ui-react";

const Projects = () => {
  return (
    <div div id="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="card-centered">
        <Card.Group stackable={true} centered={true}>
          <Card>
            <Image src={tidyhiveFE} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Tidy Hive Front End</Card.Header>
              <Card.Description>
                The front end of my final project for Lambda School. I worked on
                testing, CRUD operations, and general app functionality.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <img
              src={tidyhiveBE}
              alt="Tidy Hive Back End"
              className="tidy-be-img"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Tidy Hive Front End</Card.Header>
              <Card.Description>
                The front end of my final project for Lambda School. I worked on
                testing, CRUD operations, and general app functionality.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={schoolReport} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Tidy Hive Front End</Card.Header>
              <Card.Description>
                The front end of my final project for Lambda School. I worked on
                testing, CRUD operations, and general app functionality.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src={schoolReport} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Tidy Hive Front End</Card.Header>
              <Card.Description>
                The front end of my final project for Lambda School. I worked on
                testing, CRUD operations, and general app functionality.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default Projects;
