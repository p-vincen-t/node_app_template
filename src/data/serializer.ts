const serializer = (_serializeSingle: { (arg0: any): any; (value: any, index: number, array: any[]): unknown }) => {
    return (data: any) => {
        if (!data) {
            return null
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingle)
        }
        return _serializeSingle(data)
    }

}

export default serializer