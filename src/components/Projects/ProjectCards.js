import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { 
  TbBrandBehance,
  TbPlayerPlay,
  TbBrandGithub,
} from "react-icons/tb";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="img-card-view" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.behanceLink && (
          <Button 
            variant="primary" 
            href={props.behanceLink} 
            target="_blank"
          >
            <TbBrandBehance /> &nbsp;
            {props.isBlog ? "Blog" : "Behance"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.githubLink && (
          <Button
            variant="primary"
            href={props.githubLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <TbBrandGithub /> &nbsp;
            {"Github"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <TbPlayerPlay /> &nbsp;
            {"Demo"}
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
