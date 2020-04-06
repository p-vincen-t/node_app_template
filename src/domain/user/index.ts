
import buildMakeObject, { Validator } from '@domain/validator'

export const VALIDATOR_SCENARIOS = {
    CREATE_USER: 'createUser'
}

export type UserType = {
    id: string | undefined,
    names: string,
    email: string,
    phone_number: string,
    admin: boolean,
}

class UserValidator implements Validator<UserType> {

    validate(_object: UserType, scenario: any): { error: any } {
       switch(scenario) {
           case VALIDATOR_SCENARIOS.CREATE_USER: {
                return { error: undefined}
           }
       }

       return { error : 'cant validate user'}
    }

}

// export const userValidator = Joi.object().keys({
//     names: Joi.string().required().error(() => 'must have names as string'),
//     email: Joi.string().error(() => 'email must be a email'),
//     phone_number: Joi.string().error(() => 'phone number must be a string'),
//     admin: Joi.boolean().error(() => 'admin must be a boolean')
// })

const makeUser = buildMakeObject<UserType>(new UserValidator())

export default makeUser