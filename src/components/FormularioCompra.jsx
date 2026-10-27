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
    <section>
      <h2>Formulario de compra</h2>

      <form onSubmit={manejarEnvio}>
        {/*campo de Nombre, el "type" indica que se espera un dato de tipo nombre,impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(evento) => {
              setNombre(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Apellido, impide que enviemos el formulario con el campo vacio, por eso use "required"*/}
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            id="apellido"
            type="text"
            value={apellido}
            onChange={(evento) => {
              setApellido(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Email, el "type" indica que se espera un dato de tipo email,impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(evento) => {
              setEmail(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo deTelefono, el "type" indica que se espera un dato de tipo telefono, impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            type="tel"
            value={telefono}
            onChange={(evento) => {
              setTelefono(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Direccion, el "type" indica que se espera un dato de tipo direccion,impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            id="direccion"
            type="text"
            value={direccion}
            onChange={(evento) => {
              setDireccion(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        {/*campo de Direccion, impide que enviemos el formulario con el campos vacio, por eso use "required"*/}
        <div>
          <label htmlFor="localidad">Localidad:</label>
          <input
            id="localidad"
            type="text"
            value={localidad}
            onChange={(evento) => {
              setLocalidad(evento.target.value);
              setMensaje("");
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="metodoEntrega">Método de entrega:</label>
          <select
            id="metodoEntrega"
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

        <div>
          <label htmlFor="aclaraciones">
            Aclaraciones adicionales (opcional):
          </label>
          {/*nos permite escribir las aclaraciones adicionales, en el campo "aclaraciones"*/}
          <textarea
            id="aclaraciones"
            value={aclaraciones}
            onChange={(evento) => {
              setAclaraciones(evento.target.value);
              setMensaje("");
            }}
            rows="3"
          />
        </div>

        <button type="submit">Confirmar compra</button>
      </form>

      {mensaje !== "" && <p role="status">{mensaje}</p>}
    </section>
  );
}
// {mensaje !== "" && <p role="status">{mensaje}</p>} indica si hay
export default FormularioCompra;
