// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <Card
      className="project-card-view"
      style={{
        maxWidth: "300px",
        margin: "10px",
        padding: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} preview`}
        style={{
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <Card.Body style={{ padding: "15px" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;{isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
