import { Resolver, Mutation, Arg } from 'type-graphql'


@Resolver()
export default class UserResolver {
   @Mutation(() => Boolean)
   createUser(@Arg("name", () => String) name: string) {
       console.log(name)
       return true
   }
}



