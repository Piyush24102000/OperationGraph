import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation addProject($name:String,$description:String,$status:String,$clientId:String ){
        addProject(name:$name,description:$description,status:$status,clientId:$clientId){
            _id
            name
            description
            status
            client{
                _id
                name
                email
                phone
            }
        }
    }
`
const DELETE_PROJECT = gql`
    mutation deleteProject($id:String){
    deleteProject(id:$id)
    }
`

const UPDATE_PROJECT = gql`
    mutation updateProject($id:String,$name:String,$description:String,$status:String){
        updateProject(id:$id,name:$name,description:$description,status:$status)
    }
`
export { ADD_PROJECT, DELETE_PROJECT ,UPDATE_PROJECT}