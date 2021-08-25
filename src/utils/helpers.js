
export const actionMapHelper = (data, key, fieldName, valuesObj) => {
    return data.map(e => {
        if (e[fieldName] === key) {
            return {...e, ...valuesObj}
        }
        return e
    })
}