const projectModel = require('./models/projectModel')
const clientModel = require('./models/clientModel')

const resolvers = {
    getAllClients: async () => {
        try {
            const result = await clientModel.find()
            return result
        } catch (error) {
            console.log(error)
        }
    },
    getClient: async (args) => {
        try {
            const result = await clientModel.findById(args.id)
            return result
        } catch (error) {
            console.log(error)
        }
    },
    getAllProjects: async () => {
        try {
            const result = await projectModel.find()
            return result
        } catch (error) {
            console.log(error)
        }
    },
    getProject: async (args) => {
        try {
            const project = await projectModel.findById(args.id)
            const client = await clientModel.findById(project.clientId)
            return {...project._doc,client}
        } catch (error) {
            console.log(error)
        }
    },
    getProjectAndClient: async (args) => {
        try {
            const project = await projectModel.findById(args.id)
            const client = await clientModel.findOne({ _id: project.clientId })
            console.log(project, client)
            return { project, client }
        } catch (error) {
            console.log(error)
        }
    },

    /////// Mutations below //////
    addClient: async (args) => {
        try {
            const createClient = await clientModel.create({ name: args.name, email: args.email, phone: args.phone })
            return createClient
        } catch (error) {
            console.log(error)
        }
    },
    deleteClient: async (args) => {
        try {
            await clientModel.findByIdAndDelete(args.id)
            const getProjectId = await projectModel.findOne({clientId:args.id})
            await projectModel.findByIdAndDelete(getProjectId._id)
            return "Client Deleted Successfully"
        } catch (error) {
            console.log(error)
        }
    },
    addProject: async (args) => {
        try {
            const createProject = await projectModel.create({ name: args.name, description: args.description, status: args.status, clientId: args.clientId })
            return createProject
        } catch (error) {
            console.log(error)
        }
    },
    deleteProject: async (args) => {
        try {
            const deleteProject = await projectModel.findByIdAndDelete(args.id)
            return "Project Deleted Successfully"
        } catch (error) {
            console.log(error)
        }
    },
    updateProject: async (args) => {
        try {
            const updateProject = await projectModel.findByIdAndUpdate(args.id,{$set:{name:args.name,description:args.description,status:args.status}},{new:true})
            return "Project updated Successfully"
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = resolvers                          