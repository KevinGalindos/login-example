import { useInput } from './../hooks/useInput'

export const FormLogin = () => {
  const username = useInput({ type: 'text' })
  const password = useInput({ type: 'password' })

  const handleClick = () => {
    alert(
      username.value && password.value 
      ? `${username.value} - ${password.value}`
      :'Formulario nulo'
    )
  }

  return (
    <div className="form_login">
      <div className="form_login_input_group">
        <label htmlFor="username">Nombre de Usuario</label>
        <input 
          name="username"
          type={username.type}
          value={username.value}
          onChange={username.onChange}
        />
      </div>
      <div className="form_login_input_group">
        <label htmlFor="password">Contrasena</label>
        <input 
          name="password"
          type={password.type}
          value={password.value}
          onChange={password.onChange}
        />
      </div>
      <div className="form_login_button">
        <button onClick={handleClick}>Iniciar Sesion</button>
      </div>
    </div>
  )
}