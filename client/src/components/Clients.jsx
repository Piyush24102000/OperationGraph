import React from "react";
import {  useQuery } from "@apollo/client";
import ClientRow from './ClientRow'
import { GET_All_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";
  
const Clients = () => {
  const { loading, error, data } = useQuery(GET_All_CLIENTS);
  if (loading) {
    return <Spinner/>
  }
  if (error) {
    return <p>Something Went Wrong </p>;
  }

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              data.getAllClients.map(i => (
                <ClientRow key = {i._id} client={i} />
              ))
            }
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
