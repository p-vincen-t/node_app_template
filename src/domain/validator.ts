
export interface Validator<T> {
    validate(object: T, scenario: any): { error: any }
}

const buildMakeObject = <T>(validator: Validator<T>) => (t: T, scenario: any) => {
    let { error } = validator.validate(t, scenario)
    if (error) throw error
    return t
}

export default buildMakeObject