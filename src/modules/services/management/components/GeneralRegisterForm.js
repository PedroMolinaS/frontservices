import React, { useContext, useState } from 'react'
import ServicesContext from '../../../../context/services/servicesContext'
import { COD_RECAPTCHA_V3 } from '../../../../enviroments/enviroment'
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import SpinnerCuadrado from '../../../helpers/SpinnerCuadrado'
import useForm from '../../../hooks/useForm'

const GeneralRegisterForm = () => {

    const { globalCategorias, globalForm } = useContext(ServicesContext)
    const [robot, setRobot] = useState(false)
    const [validaCaptcha, setValidaCaptcha] = useState(null)

    const { handleChange, handleSubmitForm, resetForm, cargando } = useForm()

    const generaTokenCaptcha = (token) => {
        if (!validaCaptcha) {
            setValidaCaptcha(token)
            setRobot(false)
        }
    }

    const handlePFormPrincipal = (e) => {
        e.preventDefault()
        if (!validaCaptcha) {
            setRobot(true)
            return
        }
        handleSubmitForm(e)
    }

    return (
        <>
            {
                cargando && <SpinnerCuadrado />
            }
            <GoogleReCaptchaProvider reCaptchaKey={COD_RECAPTCHA_V3}>


                <form className="register__form" onSubmit={handlePFormPrincipal}>
                    <div className="register__body">
                        <div className="register__group">
                            <label>
                                <p> Categoria:</p>
                                <select
                                    name="category"
                                    value={globalForm.category}
                                    onChange={handleChange}
                                >
                                    <option value='Seleccionar'>Seleccionar</option>
                                    {globalCategorias.filter(c => c !== 'TODOS').map(cat => {
                                        return (
                                            <option key={cat} value={cat}
                                            >{cat}</option>
                                        );
                                    })}
                                </select>
                            </label>
                        </div>
                        <div className="register__group">
                            <label>
                                <p>Nombre:</p>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name='name'
                                    onChange={handleChange}
                                    value={globalForm.name}
                                />
                            </label>
                        </div>
                        <div className="register__group">
                            <label>
                                <p>Descripción:</p>
                                <input
                                    type="text"
                                    placeholder="Descripción"
                                    name='description'
                                    onChange={handleChange}
                                    value={globalForm.description}
                                />
                            </label>
                        </div>
                    </div>

                    <GoogleReCaptcha onVerify={generaTokenCaptcha} />
                    {
                        robot ? <div className="robot">Robot detectado</div> : null
                    }
                    
                    <div className="register__footer">
                        <button type='Submit'>Grabar</button>
                        <button onClick={resetForm}>Cancelar</button>
                    </div>


                </form>
            </GoogleReCaptchaProvider>
        </>
    )
}

export default GeneralRegisterForm