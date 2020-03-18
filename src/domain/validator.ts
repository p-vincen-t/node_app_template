import Joi from 'joi'


const buildMakeObject = <T>(validator: Joi.ObjectSchema) => {
    return (t: T) => {
        let { error } = validator.validate(t)
        if (error) throw error
        return t
    }
}

export default buildMakeObject