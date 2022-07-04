import { useContext } from 'react'
import ServicesContext from '../../../../context/services/servicesContext'
import GeneralRegisterForm from './GeneralRegisterForm'

const GeneralRegisterItem = () => {

    const { globalAction } = useContext(ServicesContext)

    return (
        <>
            <div className="register__title">
                <img src="/assets/img/services_icon.png" alt="logo" />
                {globalAction} Servicio
            </div>
            <GeneralRegisterForm />
        </>
    )
}

export default GeneralRegisterItem