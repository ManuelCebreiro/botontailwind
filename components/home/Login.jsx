import React from "react";

function Login() {
  return (
    <div className="flex flex-col">
      <h3>Inicia sesión o regístrate</h3>
      <p className="mt-5">
        Descubre cómo se vive en ese piso antes de entrar a vivir en él y ayuda
        a otras personas en su proceso de búsqueda compartiendo tu experiencia.
      </p>
      <label htmlFor="email">Correo electrónico</label>
      <input
        placeholder="Escribe tu dirección de correo"
        id="email"
        type="text"
      ></input>
      <button className="btn btn-terciary self-end mt-8">Continuar</button>
    </div>
  );
}

export default Login;
