import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	// Cargar datos del paciente a editar
	useEffect(() => {
		if(Object.keys(paciente).length) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);
	
	// Generar ID
	const generarId = () => {
		const random = Math.random().toString(36).slice(2);
		const fecha = Date.now().toString(36)

		return random + fecha;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validar
		if([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true);
			return;
		}

		setError(false);

		// Crear el objeto
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas
		};

		// Editar o Agregar Paciente
		if(paciente.id) {
			// Editar Paciente
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			// Agregar Paciente
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}
		
		// Resetear el formulario
		setNombre('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
	}

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

			<p className="text-lg mt-5 text-center mb-10">
				Añade Pacientes y {" "}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>

			<form className="bg-white m-3 shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>

				{error && <Error> <p>Todos los campos son obligatorios</p> </Error>}

				<div className="mb-5">
					<label className="block text-gray-700 font-bold uppercase" htmlFor="nombre">
						Nombre Mascota
					</label>
					<input
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						id="nombre"
						placeholder="Nombre de la Mascota"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				
				<div className="mb-5">
					<label className="block text-gray-700 font-bold uppercase" htmlFor="propietario">
						Nombre Propietario
					</label>
					<input
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						id="propietario"
						placeholder="Nombre del Propietario"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 font-bold uppercase" htmlFor="email">
						Email
					</label>
					<input
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="email"
						id="email"
						placeholder="Email del Propietario"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 font-bold uppercase" htmlFor="fecha">
						Fecha
					</label>
					<input
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="date"
						id="fecha"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 font-bold uppercase" htmlFor="sintomas">
						Síntomas
					</label>
					<textarea
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						id="sintomas"
						placeholder="Síntomas del Paciente"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					></textarea>
				</div>

				<input 
					type="submit" 
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-colors"
					// Agregar o Editar Paciente
					value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
				/>
			</form>
		</div>
	);
};

export default Formulario;
