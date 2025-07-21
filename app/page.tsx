import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <Image
          id="logo"
          className="logojv"
          src="/img/logoFondoBlanco.png"
          alt="logoJV"
          width={150}
          height={50}
        />
        <nav>
          <ul className="topnav" id="myTopnav">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#aboutMe">What I do</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <button className="iconMenu" onClick={() => menuResponsive()}>
                <i className="fa fa-bars"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <h1 className="tituloPresentacion">
          I´m Julian Vargas.<br /> Python<br /> Developer.
        </h1>
        <div className="contenidoHome"></div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2 className="tituloPrincipal">Portfolio</h2>
        <div className="contenidoPortfolio">
          <ul className="listaProyectos">
            <li className="proyectos">
              <Image
                className="imgProyecto"
                src="/img/cloud.jpeg"
                alt="Project Image"
                width={300}
                height={200}
              />
              <div className="proyecto">
                <h4>Bancolombia - Collective Investment Funds App</h4>
                <p>Developed with: Python, Pandas, Streamlit</p>
                <a
                  target="_blank"
                  href="https://dbfics2.streamlit.app/"
                  rel="noopener noreferrer"
                >
                  Check it out!
                </a>
              </div>
            </li>
            {/* Add other projects similarly */}
          </ul>
        </div>
      </section>

      <section id="aboutMe" className="aboutMe">
        <div className="contenidoAboutMe">
          <h2 className="tituloPrincipal">What I do</h2>
          <p className="descripcionAboutMe">
            Python Developer with expertise in asset management, automating reports
            for 600+ investment funds at Bancolombia, and processing 500,000+ daily
            data points using Python, Pandas, NumPy, and Streamlit.
          </p>
        </div>
        <Image
          className="imagenAboutMe"
          src="/img/code.png"
          alt="Moon"
          width={400}
          height={300}
        />
      </section>

      <section id="skills" className="skills">
        <h2 className="tituloPrincipal">Skills</h2>
        <div className="contenidoSkills">
          {[
            { src: "/img/JavaScript.png", alt: "JavaScript" },
            { src: "/img/590px-Node.js_logo.svg.png", alt: "NodeJS" },
            { src: "/img/React-icon.svg.png", alt: "React" },
            { src: "/img/Python-logo-notext.svg.png", alt: "Python" },
          ].map((skill, index) => (
            <Image
              key={index}
              className="imgSkill"
              src={skill.src}
              alt={skill.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="tituloPrincipal">Contact</h2>
        <form
          name="formularioContacto"
          action="https://formsubmit.io/send/julianvargastrb@gmail.com"
          method="POST"
        >
          <label htmlFor="nombre">Name</label>
          <input
            className="inputContacto"
            name="text"
            type="text"
            id="nombre"
            required
          />

          <label htmlFor="correo">Email</label>
          <input
            className="inputContacto"
            name="email"
            type="email"
            id="correo"
            placeholder="email@domain.com"
            required
          />

          <label htmlFor="mensaje">Message</label>
          <textarea
            className="inputContacto"
            name="mensaje"
            id="mensaje"
            cols={30}
            rows={10}
            required
          ></textarea>

          <input
            name="_formsubmit_id"
            type="text"
            style={{ display: "none" }}
          />

          <input
            id="enviarCorreo"
            className="enviar"
            value="Submit"
            type="submit"
          />
        </form>
      </section>

      <footer>
        <Link href="#home">
          <Image
            className="imgJVBlanco"
            src="/img/jv_logo_blanco-removebg-preview.png"
            alt="logo_jv"
            width={100}
            height={100}
          />
        </Link>
        <div className="icons">
          {[
            {
              href: "https://github.com/pJulianV",
              src: "/img/bxl-github.svg",
              alt: "github",
            },
            {
              href: "https://www.linkedin.com/in/julian-david-vargas-avendaño-139b05234/",
              src: "/img/bxl-linkedin-square.svg",
              alt: "linkedin",
            },
            {
              href: "https://twitter.com/JulianVargasAv",
              src: "/img/bxl-twitter.svg",
              alt: "twitter",
            },
          ].map((social, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              target="_blank"
              href={social.href}
            >
              <Image
                className="icon"
                src={social.src}
                alt={social.alt}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}