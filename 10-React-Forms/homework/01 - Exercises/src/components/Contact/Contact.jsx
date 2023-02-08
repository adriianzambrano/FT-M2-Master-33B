import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate (inputs) {
 const errors = {};

 if (inputs.name === '') {
    errors.name = "Se requiere un nombre";
 }if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
 }if (inputs.phone <= 0) {
    errors.phone = "Sólo números positivos";
 }if (inputs.subject === '') {
    errors.subject = "Se requiere un asunto";
 }if (inputs.message === '') {
    errors.message = "Se requiere un mensaje";
 }
 return errors;

}

export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: ""
  })

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (event)=>{
    const property = event.target.name
    const value = event.target.value
    setInputs({
      ...inputs,
      [property] : value
    })
    setErrors(
      validate({
        ...inputs,
        [property]: value
      })
    )

  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    if (!Object.keys(errors).length) {
      alert("Datos completos")
      setErrors({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: ""
      })
    }else{
      alert('Debe llenar todos los campos')
    }


  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor='name'>Nombre:</label>
        <input 
          type="text" 
          value={inputs.name} 
          name='name' 
          placeholder='Escribe tu nombre...' 
          onChange={handleChange} 
          className={errors.name && 'warning'}
          />
          <p className='danger'>{errors.name}</p>
        <br />
        <br />
        <label htmlFor='email' >Correo Electrónico:</label>
        <input 
          type="text" 
          value={inputs.email} 
          name='email' 
          placeholder='Escribe tu email...' 
          onChange={handleChange} 
          className={errors.email && 'warning'} 
          />
          <p className='danger'>{errors.email}</p>
        <br />
        <br />
        <label htmlFor='phone'>Teléfono:</label>
        <input 
          type="number" 
          value={inputs.phone} 
          name='phone' 
          placeholder='Escribe un teléfono...' 
          onChange={handleChange} 
          className={errors.phone && 'warning'}
          />
          <p className='danger'>{errors.phone}</p>
        <br />
        <br />
        <label htmlFor="subject">Asunto:</label>
        <input 
          type="text" 
          value={inputs.subject} 
          name='subject' 
          placeholder='Escribe el asunto...' 
          onChange={handleChange} 
          className={errors.subject && 'warning'}
          />
          <p className='danger'>{errors.subject}</p>
        <br/>
        <br/>
        <label htmlFor="message">Mensaje:</label>
        <textarea 
          name="message" 
          cols="30" 
          rows="10" 
          type='text' 
          value={inputs.message} 
          placeholder='Escribe tu mensaje...' 
          onChange={handleChange} 
          className={errors.message && 'warning'}
          /> 
          <p className='danger'>{errors.message}</p>
        <br />
        <br />

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
  
  

}
