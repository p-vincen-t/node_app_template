
import Joi from 'joi'

export type UserType = {
    id: string,
    names: string,
    email: string,
    phone_number: string,
    admin: boolean,
}

export const userValidator = Joi.object().keys({
    names: Joi.string().required().error(() => 'must have names as string'),
    email: Joi.string().error(() => 'email must be a email'),
    phone_number: Joi.string().error(() => 'phone number must be a string'),
    admin: Joi.boolean().error(() => 'admin must be a boolean')
})

export const buildMakeUser = (validator: (arg0: UserType) => { error: any }) => {
    return (user: UserType) => {
        let { error } = validator(user)
        if (error) throw new Error(error)
        return user
    }
}

const makeUser = buildMakeUser(userValidator)

export default makeUser