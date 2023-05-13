const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type clientType{
        _id:String
        name:String
        email:String
        phone:String
    }
    type projectType{
        _id:String
        name:String
        description:String
        status:String
        client:clientType
        clientId:String 
    }

    type Query{
        getAllClients : [clientType]
        getClient(id:String) : clientType
        getAllProjects : [projectType]
        getProject(id:String) : projectType 
        getProjectAndClient(id:String):projectType
    }

    type Mutation{
        addClient(name:String,email:String,phone:String) : clientType
        deleteClient(id:String): String
        addProject(name:String,description:String,status:String,clientId:String):projectType
        deleteProject(id:String):String
        updateProject(id:String,name:String,description:String,status:String):String
    }

`)

module.exports = schema