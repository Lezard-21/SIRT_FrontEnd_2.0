import PropTypes, { element } from 'prop-types';
import { useState, useEffect } from "react";
import NumberInput from "./NumberInput";
import TextAreaInput from "./TextAreaInput";
import SelectInput from "./SelectInput";
import RangeInput from "./rangeInput";
import { getDocentes } from '../../servers/Docentes.server';
import { getEEs } from '../../servers/EEs.server';
import {problemasEscolares} from "../../Constants/ProblemasAcademicos"

export default function ProblemasForm({ onChange }) {
    const [profesor, setProfesor] = useState("")
    const [experienciaEducativa, setExperienciaEducativa] = useState("")
    const [descripcionProblema, setDescripcionProblema] = useState("")
    const [numeroAlumnosProblema, setNumeroAlumnosProblema] = useState(0)
    const [selectedTipoProblema, setSelectedTipoProblema] = useState("")
    const [selectedRange, setSelectedRange] = useState("Media")
    const [isProblemFormVisible, setIsProblemFormVisible] = useState(false);
    const [resetInputs, setResetInputs] = useState(false)
    const [errors, setErrors] = useState({});

    const [docentesOptions, setDocentesOptions] = useState([])
    const [EEptions, setEEOptions] = useState([])

    useEffect(() => {
        const asignarOptions = async () => {
            try {
                let responseDocentes = await getDocentes()
                let responseEE = await getEEs()
                // let responseRelacion = await getRelacionesDocenteEE()
                let arrayDocentes = [];
                for (const element of responseDocentes.data) {
                    arrayDocentes.push(element.nombre);
                }
                let arrayEE = [];
                for (const element of responseEE.data) {
                    arrayEE.push(element.nombre);
                }

                setDocentesOptions(arrayDocentes)
                setEEOptions(arrayEE)

            } catch (error) {
                console.log(error)
            }
        }
        asignarOptions()
    }, [])


    const handleCreateProblema = () => {
        const newErrors = validateFields();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const problema = {
            Descripcion: descripcionProblema,
            TipoProblema: selectedTipoProblema,
            Prioridad: selectedRange,
            NumeroAlumnos: numeroAlumnosProblema,
            Docente: profesor,
            ExperienciaEducativa: experienciaEducativa
        };

        const newArray = (prevProblemas) => [...prevProblemas, problema];
        onChange(newArray);

        cleanInputs();
    };

    const validateFields = () => {
        const newErrors = {};

        if (!profesor) {
            newErrors.profesor = "*El nombre del profesor es requerido.";
        }

        if (!experienciaEducativa) {
            newErrors.experienciaEducativa = "*La experiencia educativa es requerida.";
        }

        if (!descripcionProblema) {
            newErrors.descripcionProblema = "*La descripción del problema es requerida.";
        }

        if (!selectedTipoProblema) {
            newErrors.selectedTipoProblema = "*Debes seleccionar un tipo de problema.";
        }

        return newErrors;
    };

    const cleanInputs = () => {
        setResetInputs(true)
        setProfesor("");
        setExperienciaEducativa("");
        setDescripcionProblema("");
        setNumeroAlumnosProblema(0);
        setSelectedTipoProblema("");
        setSelectedRange("Media");
        setIsProblemFormVisible(false);
        setErrors({});
        setTimeout(() => setResetInputs(false), 100)
    };

    const handleCancel = () => {
        cleanInputs()
        setIsProblemFormVisible(!isProblemFormVisible)
    }
    return (
        <>
            <div className={`${isProblemFormVisible ? '' : 'hidden'} flex-col space-y-5`}>
                <SelectInput
                    labelText="Experiencia educativa"
                    defaultText="Selecciona un Experiencia Educativa"
                    key="EE"
                    options={EEptions}
                    reset={resetInputs}
                    onChange={value => setExperienciaEducativa(value)}
                    onError={errors.experienciaEducativa}
                />
                <SelectInput
                    labelText="Docente"
                    defaultText="Selecciona un docente"
                    key="docente"
                    options={docentesOptions}
                    reset={resetInputs}
                    onChange={value => setProfesor(value)}
                    onError={errors.profesor}
                />
                <TextAreaInput
                    labelText="Descripción del problema"
                    key="dproblema"
                    onChange={value => setDescripcionProblema(value)}
                    reset={resetInputs}
                    onError={errors.descripcionProblema}
                />
                <SelectInput
                    labelText="Selecciona el tipo de problema"
                    defaultText="Selecciona problema"
                    key="tproblema"
                    reset={resetInputs}
                    options={problemasEscolares}
                    onChange={value => setSelectedTipoProblema(value)}
                    onError={errors.selectedTipoProblema}
                />
                <RangeInput
                    labelText="Selecciona la gravedad del problema"
                    reset={resetInputs}
                    key="gproblema"
                    onChange={value => setSelectedRange(value)}
                />
                <NumberInput
                    labelText="Número de alumnos"
                    defaultText="0"
                    reset={resetInputs}
                    key="nalumnos"
                    onChange={value => setNumeroAlumnosProblema(value)}
                />

                <div className="w-full flex justify-center space-x-7 mt-6">
                    <button className="h-fit" onClick={() => { handleCancel() }}>
                        <img src="/btnSmallCancelar.svg" alt="Cancela la cración del reporte" />
                    </button>
                    <button className="h-fit" onClick={() => { handleCreateProblema() }}>
                        <img src="/btnAceptar.svg" alt="Crea el reporte" />
                    </button>
                </div>

                <hr className="mt-5" />
            </div>
            <div className={`w-full flex justify-center mt-5 ${!isProblemFormVisible ? '' : 'hidden'}`}>
                <button className="h-fit" onClick={() => setIsProblemFormVisible(!isProblemFormVisible)}>
                    <img src="/agregarProblema.svg" />
                </button>
            </div>
        </>
    )
}

ProblemasForm.propTypes = {
    onChange: PropTypes.func.isRequired,
};
