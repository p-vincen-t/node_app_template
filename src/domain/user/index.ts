
import Joi from 'joi'
import buildMakeObject from '@domain/validator'

export type UserType = {
    id: string | undefined,
    names: string,
    email: string,
    phone_number: string,
    admin: boolean,
}

// export const userValidator = Joi.object().keys({
//     names: Joi.string().required().error(() => 'must have names as string'),
//     email: Joi.string().error(() => 'email must be a email'),
//     phone_number: Joi.string().error(() => 'phone number must be a string'),
//     admin: Joi.boolean().error(() => 'admin must be a boolean')
// })

const makeUser = buildMakeObject<UserType>(Joi.object().keys({
    names: Joi.string().required().error(() => 'must have names as string'),
    email: Joi.string().error(() => 'email must be a email'),
    phone_number: Joi.string().error(() => 'phone number must be a string'),
    admin: Joi.boolean().error(() => 'admin must be a boolean')
}))

export default makeUser