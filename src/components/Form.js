import { useState } from 'react'
//import { useInput } from './../hooks/useInput'

export const FormLogin = () => {
 // const username = useInput({ type: 'text' })
  //const password = useInput({ type: 'password' })
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUsername = e => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }

  const onChangePassword = e => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleClick = () => {
    alert(
      username && password 
      ? `${username} - ${password}`
      :'Formulario nulo'
    )
  }

  return (
    <div className="form_login">
      <div className="form_login_input_group">
        <label htmlFor="username">Nombre de Usuario</label>
        <input 
          name="username"
          type="text"
          value={username}
          onChange={onChangeUsername}
        />
      </div>
      <div className="form_login_input_group">
        <label htmlFor="password">Contrasena</label>
        <input 
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className="form_login_button">
        <button onClick={handleClick}>Iniciar Sesion</button>
      </div>
    </div>
  )
}