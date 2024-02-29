import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        // Obtenemos los pacientes del localStorage al inicio
        const obtenerLS = () => {
            const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
            setPacientes(pacientesLS); // Actualizamos el estado con los pacientes del localStorage
        }

        obtenerLS();
    }, []);

    useEffect(() => {
        // Guardamos los pacientes en el localStorage cada vez que cambie la lista de pacientes
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);
    
    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
        setPacientes(pacientesActualizados);
    }

    return (
        <div className="container mx-auto mt-10">
            <Header />

            <div className="mt-12 md:flex">
                <Formulario 
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes 
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
