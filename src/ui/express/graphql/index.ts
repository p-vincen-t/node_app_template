import UserField from '@ui/express/graphql/user'
import graphqlHTTP from 'express-graphql'
import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { Router } from 'express'

const gqlRouter = Router()

const graphqlMetaData = graphqlHTTP({
    schema: new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'RouteQueryType',
            fields: {
                user: UserField
            }
        })
    }),
    graphiql: true
})

gqlRouter.get('gql', graphqlMetaData)

export default gqlRouter