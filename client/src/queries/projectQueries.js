import{gql} from '@apollo/client'

const GET_PROJECTS = gql`
    query getAllProjects{
        getAllProjects{
        _id
        name
        status
        description
        }
    }
`
const GET_SINGLE_PROJECT = gql`
    query getProject($id:String){
        getProject(id:$id){
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

export {GET_PROJECTS,GET_SINGLE_PROJECT}