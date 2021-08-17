import React, { Component } from 'react'

export class FormClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onChangeUsername(e){
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e){
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  handleClick(){
    alert(
      this.state.username && this.state.password 
      ? `${this.state.username} - ${this.state.password}`
      :'Formulario nulo'
    )
  }

  render() {
    return (
      <div className="form_login">
      <div className="form_login_input_group">
        <label htmlFor="username">Nombre de Usuario</label>
        <input 
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.onChangeUsername}
        />
      </div>
      <div className="form_login_input_group">
        <label htmlFor="password">Contrasena</label>
        <input 
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onChangePassword}
        />
      </div>
      <div className="form_login_button">
        <button onClick={this.handleClick}>Iniciar Sesion</button>
      </div>
    </div>
    )
  }
}
