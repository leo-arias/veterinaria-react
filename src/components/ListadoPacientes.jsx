import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

	return (
		<div className="md:w-1/2 lg:w-3/5">

			{pacientes && pacientes.length ? (
				<>	
					<h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
		
					<p className="text-xl mt-5 mb-10 text-center">
						Admininistra tus {" "}
						<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
					</p>
		
					<div className="md:h-screen overflow-y-scroll">
						{pacientes.map(paciente => (
							<Paciente 
								key={paciente.id}
								paciente={paciente}
								setPaciente={setPaciente}
								eliminarPaciente={eliminarPaciente}
							/>
						))}
					</div>
				</>
			) : (
				<>
					<h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
		
					<p className="text-xl mt-5 mb-10 text-center">
						Comienza a crear tus {" "}
						<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
					</p>
				</>
			)}
				
		</div>
	)
}

export default ListadoPacientes