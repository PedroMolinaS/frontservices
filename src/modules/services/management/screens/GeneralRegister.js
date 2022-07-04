import React, { useContext } from 'react'
import AuthContext from '../../../../context/auth/authContext'
import GeneralRegisterItem from '../components/GeneralRegisterItem'
import GeneralRegisterLogout from '../components/GeneralRegisterLogout'

const GeneralRegister = ({form, setForm, handleFormChange}) => {

    const { globalAuthenticate } = useContext(AuthContext)
    return (
        <div className="services__register">
            <div className="register__card">
                {globalAuthenticate
                    ? <GeneralRegisterItem form={form} setForm={setForm} handleFormChange={handleFormChange} />
                    : <GeneralRegisterLogout />
                }
            </div>
        </div>
    )
}

export default GeneralRegister