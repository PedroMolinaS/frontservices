import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'
import GeneralRegisterItem from './GeneralRegisterItem'
import GeneralRegisterLogout from './GeneralRegisterLogout'

const GeneralRegister = () => {

    const { globalAuthenticate } = useContext(AuthContext)


    return (
        <div className="services__register">
            <div className="register__card">
                {globalAuthenticate
                    ? <GeneralRegisterItem />
                    : <GeneralRegisterLogout />
                }
            </div>
        </div>
    )


}

export default GeneralRegister