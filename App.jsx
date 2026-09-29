import { useState } from "react";

export default function App() {
  const [vistaActual, setVistaActual] = useState("inicio");
  const [animando, setAnimando] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  const mascotas = [
    {
      id: 1,
      nombre: "Sky",
      especie: "Perro (Chihuahua)",
      edad: "1 año",
      descripcion: "Sky es una cachorrita llena de luz y dulzura. Le encantan los mimos en la pancita, jugar con moñitos y tomar la siesta bajo el sol. ¡Es perfecta para llenar tu hogar de sonrisas!",
      imagen: "sky.png",
      textoAlt: "Chihuahua color gris azulado",
    },
    {
      id: 2,
      nombre: "Canela",
      especie: "Perro (Dachshund / Salchicha)",
      edad: "1 año",
      descripcion: "Canela es súper juguetona y tierna. Amante de las carreras en el jardín y de acurrucarse en las cobijas calientitas en las tardes de cine.",
      imagen: "canela.png",
      textoAlt: "Cachorro salchicha",
    },
    {
      id: 3,
      nombre: "Chicharrón",
      especie: "Perro (Pug)",
      edad: "1 año",
      descripcion: "Chicharrón es un noble perrito que enamora a todos con su carita curiosa. Muy tranquilo, educado y sobre todo fiel compañero.",
      imagen: "chicarron.png",
      textoAlt: "Cachorro Pug",
    },
    {
      id: 4,
      nombre: "Bombón",
      especie: "Perro (Mestizo)",
      edad: "1 año",
      descripcion: "Bombón es un perrito súper inteligente y carismático. Se lleva excelente con otros perritos y le encantan los paseos al aire libre.",
      imagen: "bombón.png",
      textoAlt: "Cachorro mestizo",
    },
  ];

  function cambiarVista(nuevaVista) {
    setAnimando(true);
    setTimeout(() => {
      setVistaActual(nuevaVista);
      setAnimando(false);
    }, 400);
  }

  function verDetalleMascota(mascota) {
    setMascotaSeleccionada(mascota);
    cambiarVista("detalle");
  }

  return (
    <div className={`pantalla-completa ${animando ? "animar-salida" : "animar-entrada"}`}>
      
      {/* NAVBAR (Se oculta en el Menú de Inicio) */}
      {vistaActual !== "inicio" && (
        <header className="navbar">
          <div className="logo" onClick={() => cambiarVista("inicio")}>🐾 Patitas Felices</div>
          <nav className="nav-links">
            <button className={`nav-btn ${vistaActual === "catalogo" ? "activo" : ""}`} onClick={() => cambiarVista("catalogo")}>Mascotas</button>
            <button className={`nav-btn ${vistaActual === "proceso" ? "activo" : ""}`} onClick={() => cambiarVista("proceso")}>¿Cómo adoptar?</button>
            <button className={`nav-btn ${vistaActual === "visita" ? "activo" : ""}`} onClick={() => cambiarVista("visita")}>Solicitar visita</button>
          </nav>
        </header>
      )}

      {/* VISTA INICIO */}
      {vistaActual === "inicio" && (
        <div className="hero-card">
          <div className="badge-brillo">✨ Un refugio lleno de amor ✨</div>
          <h1>Patitas Felices 🐾</h1>
          <p>El lugar donde nacen las historias de amor más bonitas de cuatro patas.</p>
          <button className="btn-principal" onClick={() => cambiarVista("catalogo")}>
            ¡Explorar Mascotas! 💖
          </button>
        </div>
      )}

      {/* VISTA CATÁLOGO */}
      {vistaActual === "catalogo" && (
        <div className="contenido-vista">
          <h2 class="titulo-bonito">Conoce a tus próximos mejores amigos 🎀</h2>
          <p class="subtitulo-bonito">Toca cualquier tarjeta para ver su perfil completo</p>

          <div className="galeria-grid">
            {mascotas.map((m) => (
              <article key={m.id} className="tarjeta-perro" onClick={() => verDetalleMascota(m)}>
                <div className="badge-foto">¡Adóptame! 💕</div>
                <img src={m.imagen} alt={m.textoAlt} />
                <h3>{m.nombre}</h3>
                <p className="raza">{m.especie}</p>
                <span className="btn-ver-mas">Conóceme más 🐾</span>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* VISTA DETALLE */}
      {vistaActual === "detalle" && mascotaSeleccionada && (
        <div className="detalle-card">
          <button className="btn-regresar" onClick={() => cambiarVista("catalogo")}>← Volver al catálogo</button>
          <div className="detalle-grid">
            <div className="detalle-img-container">
              <img src={mascotaSeleccionada.imagen} alt={mascotaSeleccionada.textoAlt} />
            </div>
            <div className="detalle-info">
              <span className="badge-edad">{mascotaSeleccionada.edad}</span>
              <h2>{mascotaSeleccionada.nombre}</h2>
              <p className="det-especie">{mascotaSeleccionada.especie}</p>
              <p className="det-descripcion">{mascotaSeleccionada.descripcion}</p>

              <button className="btn-principal" onClick={() => cambiarVista("visita")}>
                ¡Quiero conocerle en persona! 💌
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VISTA PROCESO */}
      {vistaActual === "proceso" && (
        <div className="contenido-vista">
          <h2 className="titulo-bonito">El camino hacia tu nuevo amor 💖</h2>
          <div className="pasos-rosa">
            <div className="paso-item">
              <div className="paso-icono">1️⃣</div>
              <h3>Enamórate</h3>
              <p>Explora a nuestros perritos y descubre tu conexión especial.</p>
            </div>
            <div className="paso-item">
              <div className="paso-icono">2️⃣</div>
              <h3>Agenda</h3>
              <p>Llena el formulario para coordinar tu cita en el refugio.</p>
            </div>
            <div className="paso-item">
              <div className="paso-icono">3️⃣</div>
              <h3>Conoce</h3>
              <p>Visítanos, juega con la mascota y platica con el equipo.</p>
            </div>
            <div className="paso-item">
              <div className="paso-icono">4️⃣</div>
              <h3>¡A casa!</h3>
              <p>Firma la adopción y prepárate para dar mucho amor.</p>
            </div>
          </div>
        </div>
      )}

      {/* VISTA VISITA */}
      {vistaActual === "visita" && <FormularioVisita alVolver={() => cambiarVista("catalogo")} />}

    </div>
  );
}

function FormularioVisita({ alVolver }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="contenido-vista">
      <div className="card-formulario">
        {enviado ? (
          <div className="exito-animado">
            <span className="icono-exito">🎉💖</span>
            <h2>¡Solicitud enviada con éxito!</h2>
            <p>Muchas gracias, <strong>{nombre}</strong>. Nos pondremos en contacto contigo al correo <strong>{correo}</strong> muy pronto para recibirte en el refugio.</p>
            <button className="btn-principal" onClick={alVolver}>Volver a las mascotas 🐾</button>
          </div>
        ) : (
          <>
            <h2 className="titulo-bonito">Agenda una visita guiada ✨</h2>
            <form onSubmit={manejarEnvio}>
              <div className="input-group">
                <label>Tu nombre completo</label>
                <input
                  type="text"
                  placeholder="Ej. María López"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Tu correo electrónico</label>
                <input
                  type="email"
                  placeholder="hola@ejemplo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-principal">Enviar Solicitud con Amor 💕</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}