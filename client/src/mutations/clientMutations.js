import { gql } from "@apollo/client";


const ADD_CLIENT = gql`
    mutation addClient($name:String,$email:String,$phone:String){
        addClient(name:$name,email:$email,phone:$phone){
        _id
        name
        email
        phone
        }
    }

`
const DELETE_CLIENT = gql`
    mutation deleteClient($id:String){
        deleteClient(id:$id)
    }
`
export {DELETE_CLIENT,ADD_CLIENT}