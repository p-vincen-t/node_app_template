declare const serializer: (_serializeSingle: {
    (arg0: any): any;
    (value: any, index: number, array: any[]): unknown;
}) => (data: any) => any;
export default serializer;
