import React, { useContext } from 'react'
import AuthContext from '../../../../context/auth/authContext'

const ServicesCard = ({ card }) => {

    const { globalAuthenticate } = useContext(AuthContext)

    return (
        <div className="services__card">
            <div className="card__title">
                {card.nombre}
            </div>
            <div className="card__text">
                {card.descripcion}
            </div>
            <div className="card__footer">
                {globalAuthenticate
                    ? <>
                        <p>Editar</p>
                        <p>Eliminar</p>
                    </>
                    : <p></p>
                }
            </div>
        </div>
    )
}

export default ServicesCard