// extract methods
async function permittedCharacters() {
    let permitted = []
    if (process.env.UPPERCASE_LETTERS === "true"){
        permitted.push(..."ABCDEFGHIJLMNOPQRSTUVXZ")
    }

    if (process.env.LOWERCASE_LETTERS === "true"){
        permitted.push(... "abcdefghijlmnopqrstuvxz")
    }

    if (process.env.NUMBERS === "true"){
        permitted.push(..."0123456789")
    }
    if (process.env.SPECIAL_CHARACTERS === "true"){
        permitted.push(..."#$%@&")
    }

    return permitted
}


export default permittedCharacters