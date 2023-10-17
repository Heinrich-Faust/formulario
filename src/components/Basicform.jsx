import React, { Component } from "react";

class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre: this.state.nombre,
      email: this.state.email,
    };

    fetch("/ruta-del-backend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Datos enviados con éxito");
      })
      .catch((error) => {
        console.error("Error al enviar datos", error);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={this.state.nombre}
          onChange={this.handleChange}
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        {/* Agregar otros campos aquí */}
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default BasicForm;