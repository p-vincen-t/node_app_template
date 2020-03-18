import Joi from 'joi';
declare const buildMakeObject: <T>(validator: Joi.ObjectSchema) => (t: T) => T;
export default buildMakeObject;
