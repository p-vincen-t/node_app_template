import "reflect-metadata";
import UserResolver from "@ui/express/graphql/user";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Query, Resolver } from 'type-graphql';

@Resolver()
class HelloResolver {
    @Query(() => String)
    hello() {
        return "hello"
    }
}

const createGraphQlServer = async (app: any) => {
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                HelloResolver,
                UserResolver
            ]
        }),
        context: ({ req, res }) => ({ req, res })
    })
    apolloServer.applyMiddleware({ app, cors: false })
}

export default createGraphQlServer
