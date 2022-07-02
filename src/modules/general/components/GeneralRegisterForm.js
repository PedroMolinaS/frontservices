import React, { useState } from 'react'

const GeneralRegisterForm = () => {

    const [form, setForm] = useState({
        name: '',
        description: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

    }
 
    const resetForm = () => {
        setForm({
            name: '',
            description: '',
        })
    }
    
    return (
        <form className="register__form" onSubmit={handleSubmitForm}>
            <div className="register__body">
                <div className="register__group">
                    <label>
                        <p>Nombre:</p>
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            name='name'
                            onChange = {handleChange}
                            value={form.name}
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
                            onChange = {handleChange}
                            value={form.description}
                        />
                    </label>
                </div>
            </div>
            <div className="register__footer">
                <button type='Submit'>Grabar</button>
                <button onClick={resetForm}>Cancelar</button>
            </div>

        </form>
    )
}

export default GeneralRegisterForm