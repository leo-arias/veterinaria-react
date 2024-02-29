const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Estás seguro de eliminar el paciente?');

        if(respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="m-3 mt-0 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
                <span className="font-normal normal-case">
                    {nombre}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
                <span className="font-normal normal-case">
                    {propietario}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {" "}
                <span className="font-normal normal-case">
                    {fecha}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>

            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-10 font-bold rounded-lg uppercase"  
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-10 font-bold rounded-lg uppercase"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente