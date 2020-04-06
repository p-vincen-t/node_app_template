export interface Validator<T> {
    validate(object: T, scenario: any): {
        error: any;
    };
}
declare const buildMakeObject: <T>(validator: Validator<T>) => (t: T, scenario: any) => T;
export default buildMakeObject;
