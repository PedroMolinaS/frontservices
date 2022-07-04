import { useContext } from 'react'
import ServicesContext from '../../../../context/services/servicesContext'
import GeneralRegisterForm from './GeneralRegisterForm'

const GeneralRegisterItem = ({handleFormChange, form, setForm}) => {

    const {globalAction} = useContext(ServicesContext)

    return (
        <>
            <div className="register__title">
                {globalAction} Servicio
            </div>
            <GeneralRegisterForm form={form} setForm={setForm} handleFormChange={handleFormChange} />
        </>
    )
}

export default GeneralRegisterItem