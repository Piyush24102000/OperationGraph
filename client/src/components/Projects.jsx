import React from "react";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
  <>
  {
    data.getAllProjects.length > 0 ? (
        <div className="row mt-4">
            {data.getAllProjects.map((i)=>(
                <ProjectCard key={i.id} project={i}/>
            ))}
        </div>
    ) : ( 
        <p>No projects</p>
    )
  }
  </>
  )
};

export default Projects;
