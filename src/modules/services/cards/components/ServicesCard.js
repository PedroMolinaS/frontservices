import React, { useContext } from 'react'
import AuthContext from '../../../../context/auth/authContext'
import SpinnerCuadrado from '../../../helpers/SpinnerCuadrado'
import useCards from '../../../hooks/useCards'

const ServicesCard = ({ card }) => {

    const { globalAuthenticate } = useContext(AuthContext)

    const {cargando, editarCard, eliminarCard} = useCards(card)

    // decodeURI: Para formatear tíldes en caso el backend no lo envie en UFT8

    return (
        <>
            {
                cargando && <SpinnerCuadrado />
            }
            <div className="services__card">
                <div className="card__title">
                    {decodeURI(card.nombre)}
                </div>
                <div className="card__text">
                    {decodeURI(card.descripcion)}
                </div>
                <div className="card__footer">
                    {globalAuthenticate
                        ? <>
                            <p onClick={editarCard}>Editar</p>
                            <p onClick={eliminarCard}>Eliminar</p>
                        </>
                        : <p></p>
                    }
                </div>
            </div>
        </>
    )
}

export default ServicesCard