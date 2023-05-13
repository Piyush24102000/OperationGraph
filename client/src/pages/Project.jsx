import React from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_PROJECT } from "../queries/projectQueries";
import ClientsInfo from "../components/ClientsInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.getProject.name}</h1>
          <p>{data.getProject.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.getProject.status}</p>

          <ClientsInfo client={data.getProject.client} />
         
          <EditProjectForm project={data.getProject} />
          
          <DeleteProjectButton projectId={data.getProject._id} />
        </div>
      )}
    </>
  );
};

export default Project;
