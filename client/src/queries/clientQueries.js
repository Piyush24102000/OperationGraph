import { gql } from "@apollo/client";

const GET_All_CLIENTS = gql`
  query getAllClients {
    getAllClients {
      _id
      name
      email
      phone
    }
  }
`
export {GET_All_CLIENTS}