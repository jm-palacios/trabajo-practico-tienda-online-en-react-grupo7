import { useState } from "react";

function FormularioCompra({ onCompraConfirmada }) { // guardamos todos los datos que usaremos, iniciandolos como vacios, exepto domicilio.
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [metodoEntrega, setMetodoEntrega] = useState("domicilio");
  const [aclaraciones, setAclaraciones] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    {/*trim() eliminar el espacio al comienzo y final del texto.*/}
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      email.trim() === "" ||
      telefono.trim() === "" ||
      direccion.trim() === "" ||
      localidad.trim() === ""
    ) {
      setMensaje("Completá todos los campos obligatorios.");
      return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
      setMensaje("Ingresá un correo electrónico válido.");
      return;
    }

    if (typeof onCompraConfirmada === "function") {
      onCompraConfirmada({
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        email: email.trim(),
        telefono: telefono.trim(),
        direccion: direccion.trim(),
        localidad: localidad.trim(),
        metodoEntrega,
        aclaraciones: aclaraciones.trim(),
      });
    } else {
      setMensaje(
        `¡Gracias, ${nombre.trim()} ${apellido.trim()}! Tu formulario se envió correctamente.`
    );
  }
}

  return (
    <section className="formulario-compra card bg-dark text-white border-secondary shadow-sm p-4 p-md-5">
      <div className="mb-4">
        <h2 className="fw-bold mb-2">Formulario de compra</h2>
        <p className="text-secondary mb-0">
          Completá tus datos para confirmar el pedido.
        </p>
      </div>

      <form onSubmit={manejarEnvio} className="row g-3">

        {/*campo de Nombre, el "type" indica que se espera un dato de tipo nombre,impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="form-control"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(evento) => {
              setNombre(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Apellido, impide que enviemos el formulario con el campo vacio, por eso use "required"*/}
        <div className="col-md-6">
          <label htmlFor="apellido" className="form-label">Apellido:</label>
          <input
            id="apellido"
            type="text"
            className="form-control"
            placeholder="Tu apellido"
            value={apellido}
            onChange={(evento) => {
              setApellido(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Email, el "type" indica que se espera un dato de tipo email,impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div className="col-12">
          <label htmlFor="email" className="form-label">Correo electrónico:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(evento) => {
              setEmail(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Telefono, el "type" indica que se espera un dato de tipo telefono, impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div className="col-md-6">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input
            id="telefono"
            type="tel"
            className="form-control"
            placeholder="Tu número de Teléfono"
            value={telefono}
            onChange={(evento) => {
              setTelefono(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Direccion, el "type" indica que se espera un dato de tipo direccion,impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div className="col-md-6">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input
            id="direccion"
            type="text"
            className="form-control"
            placeholder="Tu Dirección"
            value={direccion}
            onChange={(evento) => {
              setDireccion(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Localidad, impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div className="col-md-6">
          <label htmlFor="localidad" className="form-label">Localidad:</label>
          <input
            id="localidad"
            type="text"
            className="form-control"
            placeholder="Tu localidad"
            value={localidad}
            onChange={(evento) => {
              setLocalidad(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*Campo de Método de Entrega, Ya empieza con una opción de base, evitando que el campo esté vacio.*/}
        <div className="col-md-6">
          <label htmlFor="metodoEntrega" className="form-label">Método de entrega:</label>
          <select
            id="metodoEntrega"
            className="form-control"
            value={metodoEntrega}
            onChange={(evento) => {
              setMetodoEntrega(evento.target.value);
              setMensaje("");
            }}>
            {/*la parte de "option" nos permite elegir el metodo de entrega. */}
            <option value="domicilio">Envío a domicilio</option>
            <option value="retiro">Retiro en el local</option>
          </select>
        </div>

        {/*Campo de Aclaraciones/Comentarios, es opcional por lo que no necesita un tag Required.*/ }
        <div className="col-md-6">
          <label htmlFor="aclaraciones" className="form-label">
            Aclaraciones adicionales (opcional):
          </label>
          {/*nos permite escribir las aclaraciones adicionales, en el campo "aclaraciones"*/}
          <textarea
            id="aclaraciones"
            className="form-control"
            placeholder="Comente sus aclaraciones"
            value={aclaraciones}
            onChange={(evento) => {
              setAclaraciones(evento.target.value);
              setMensaje("");
            }}
            rows="3"
          />
        </div>
        
        <div className="col-12 mt-4">
            <button
             type="submit"
             className="btn btn-primary btn-lg w-100"
            >
              Confirmar compra
            </button>
        </div>
      </form>

      {mensaje !== "" && 
        (<p className="alert alert-info mt-3 mb-0" role="status">
          {mensaje}
        </p>
      )}
    </section>
  );
}
// {mensaje !== "" && <p role="status">{mensaje}</p>} indica si hay
export default FormularioCompra;
