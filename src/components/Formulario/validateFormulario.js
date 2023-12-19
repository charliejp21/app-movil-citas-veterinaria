const validateForm = (paciente, propietario, email, tel, fecha, sintomas) => {

    if([paciente, propietario, email, tel, fecha, sintomas].includes('')){

        throw new Error("Por favor llena los campos del formulario")
    }
}

module.exports = validateForm;