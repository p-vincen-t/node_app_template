import { GraphQLObjectType, GraphQLString } from 'graphql'
import { userDatabase } from "@data/index"

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLString }
    })
})


export const UserField = {
    type: UserType,
    args: {
        id: {
            type: GraphQLString
        }
    },
    resolve: (_: any, args: any) => {
        return userDatabase.findUser('id', args.id)
    }
}


export default UserField


