import styles from "@/styles/Home.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaEye,
  FaEyeSlash,
  FaExternalLinkAlt
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { FaLocationDot, FaFilePdf } from "react-icons/fa6";
import { stack_sans_headline_200, stack_sans_headline_400 } from '@/fonts/stackssans';
import Link from "next/link";
import { use, useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState(false);
  return (
    <>
      <header
        id={"top"}
        className={`
        ${styles.header}
        ${styles.flex}
        ${styles.centerContent}`}>
        <h2
          className={`
        ${stack_sans_headline_400.className}
        ${styles.font28px}`}>Presentación de portafolio</h2>
      </header>
      <nav
        className={`
      ${styles.nav} 
      ${styles.grid}`}>
        <div className={styles.navDivMain}>
          <a
            href="#main"
            className={`
          ${styles.fontcolor} 
          ${styles.link} 
          ${stack_sans_headline_200.className} 
          ${styles.font18px}`}>Principal</a>
        </div>
        <div className={`
          ${styles.navDivSections} 
          ${styles.flexRow}`}>
          <a
            href="#aboutme"
            className={`
          ${styles.fontcolor} 
          ${styles.link} 
          ${stack_sans_headline_200.className} 
          ${styles.font18px}`}>Sobre mí</a>
          <a
            href="#technologies"
            className={`
          ${styles.fontcolor} 
          ${styles.link} 
          ${stack_sans_headline_200.className} 
          ${styles.font18px}`}>Tecnologías</a>
          <a
            href="#proyects"
            className={`
          ${styles.fontcolor} 
          ${styles.link} 
          ${stack_sans_headline_200.className} 
          ${styles.font18px}`}>Proyectos</a>
          <a
            href="#curriculum"
            className={`
          ${styles.fontcolor} 
          ${styles.link} 
          ${stack_sans_headline_200.className} 
          ${styles.font18px}`}>Curriculum Vitae</a>
          <a
            href="#contact"
            className={`
          ${styles.fontcolor} 
          ${styles.link} 
          ${stack_sans_headline_200.className} 
          ${styles.font18px}`}>Contacto</a>
        </div>
      </nav>
      <main className={`${styles.main} ${styles.flex} ${styles.flexColumn}`} >
        <section id="main" className={`${styles.flex} ${styles.flexColumn} ${styles.section}`}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`} >Principal</h2>
          <p className={`${styles.name} ${styles.noMargin} ${stack_sans_headline_400.className} ${styles.font32px} ${styles.centerContent}`} >Ismael Alejo Juárez</p>
          <p className={`${styles.jobTitle} ${stack_sans_headline_400.className} ${styles.font24px} ${styles.centerContent}`} >Desarrollador Backend Jr.</p>
          <img className={`${styles.centerItems} ${styles.centerContent} ${styles.centerSelf} ${styles.imgMe}`} src={"/perfil.jpg"} alt="perfil.jpg" />
          <div className={`${styles.social} ${styles.flexRow} ${styles.centerContent} ${styles.centerItems} ${styles.centerSelf}`} >
            <Link target="_blank" href="https://www.linkedin.com/in/ismael-alejo-2339573b4/">
              <FaLinkedin className={`${styles.icon} ${styles.link}`} />
            </Link>
            <Link target="_blank" href="https://github.com/Ismael-Alejo-Juarez">
              <FaGithub className={`${styles.icon} ${styles.link}`} />
            </Link>
          </div>
        </section>
        <section id="aboutme" className={styles.section}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`} >Sobre mi</h2>
          <p className={`${styles.noMargin} ${stack_sans_headline_400.className} ${styles.font18px}`} >Educación:</p>
          <div className={`${styles.education} ${styles.grid}`} >
            <div className={`${styles.educationInfo} ${styles.flex} ${styles.flexColumn}`} >
              <p className={`${styles.noMargin} ${stack_sans_headline_400.className} ${styles.font18px}`} >Ingeniería en Sistemas Computacionales</p>
              <p className={`${styles.noMargin} ${stack_sans_headline_200.className}`} >Universidad de la Sierra (2022 - 2026)</p>
            </div>
            <img className={`${styles.centerItems} ${styles.centerContent} ${styles.centerSelf} ${styles.imgUnisierra}`} src="/unisierra.jpg" alt="logo-unisierra" />
          </div>
          <p className={`${styles.noMargin} ${stack_sans_headline_400.className} ${styles.font18px}`} >Perfil:</p>
          <p className={`${styles.description} ${stack_sans_headline_200.className} ${styles.font18px}`} >
            Desarrollador de software en formación, estudiante de Ingeniería en Sistemas Computacionales en la
            Universidad de la Sierra. Actualmente busco un equipo de tecnología para realizar mis estadías
            profesionales. Mi mayor interés está en el desarrollo backend. Me especializo en la lógica de
            negocio, la transmisión de datos y el diseño de bases de datos. También puedo participar en el frontend, pero mi objetivo es especializarme
            en la arquitectura del sistema. Estoy listo para aprender, adaptarme a metodologías de trabajo ágiles y sumar mi esfuerzo a los
            proyectos.
          </p>
          <p className={`${styles.noMargin} ${stack_sans_headline_400.className} ${styles.font18px}`} >Idiomas:</p>
          <ul className={`${styles.languages} ${styles.noMargin} ${stack_sans_headline_200.className} ${styles.font18px}`} >
            <li>Inglés (A2)</li>
            <li>Español (Nativo)</li>
          </ul>
        </section>
        <section id="technologies" className={styles.section}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`} >Tecnologías</h2>
          <div className={`${styles.stack} ${styles.grid} ${styles.centerContent} ${styles.centerItems}`} >
            {/* AQUÍ VAN LOS ICONOS DE CADA TECONOLOGÍA */}
            <FaHtml5 className={styles.iconT} />
            <FaCss3Alt className={styles.iconT} />
            <FaJs className={styles.iconT} />
            <FaNodeJs className={styles.iconT} />
            <FaReact className={styles.iconT} />
            <SiNextdotjs className={styles.iconT} />
            <FaGitAlt className={styles.iconT} />
            <FaGithub className={styles.iconT} />
            <GrMysql className={styles.iconT} />
            <BiLogoPostgresql className={styles.iconT} />
            <DiSqllite className={styles.iconT} />
            <VscVscode className={styles.iconT} />
          </div>
        </section>
        <section id="proyects" className={styles.section}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`}>Proyectos</h2>
          <div className={`${styles.proyect} ${styles.grid} ${styles.centerItems}`}>
            <div>
              <p className={`${styles.font18px} ${stack_sans_headline_400.className}`}>Plataforma e-commerce "creArte"</p>
              <p className={`${styles.description} ${styles.font18px} ${stack_sans_headline_200.className}`}>Como proyecto personal, estoy desarrollando
                una plataforma e-commerce con el fin de dar un espacio a los negocios locales e independientes de promocionar y vender
                sus productos hechos a mano, como peluches de estambre, pinturas, esculturas, etc.
                <br />
                <FaLocationDot /> Nacozari de García, Sonora, México
              </p>
              <div className={`${styles.actionsProyect} ${styles.grid}`}>
                <Link href={"en-producción"} className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                  Visitar sitio <FaExternalLinkAlt />
                </Link>
                <Link href={"https://github.com/Ismael-Alejo-Juarez/creArte"} target="_blank" className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                  {"Visitar repositorio"} <FaGithub />
                </Link>
              </div>
            </div>
            <img src="/screen_crearte.png" alt="crearte_screen" />
          </div>
          <hr className={styles.separator} />
          <div className={`${styles.proyect} ${styles.grid} ${styles.centerItems}`}>
            <div>
              <p className={`${styles.font18px} ${stack_sans_headline_400.className}`}>Sistema de Tutorías para la Universidad de la Sierra</p>
              <p className={`${styles.description} ${styles.font18px} ${stack_sans_headline_200.className}`}>Proyecto académico. Sistema para los tutores de la
                Universidad de la Sierra, mejorando el control sobre sus tutorados y asesorías efectuadas durante el semestre.
                <br />
                <FaLocationDot /> Moctezuma, Sonora, México
              </p>
              <div className={`${styles.actionsProyect} ${styles.grid}`}>
                <Link href={"en-producción"} className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                  Visitar sitio <FaExternalLinkAlt />
                </Link>
                <Link href={"https://github.com/shishak5/Proyecto-U"} target="_blank" className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                  {"Visitar repositorio"} <FaGithub />
                </Link>
              </div>
            </div>
            <img src="/screen_crearte.png" alt="crearte_screen" />
          </div>
        </section>
        <section id="curriculum" className={styles.section}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`} >Curriculum</h2>
          <div className={`${styles.options} ${styles.flexColumn} ${styles.centerContent} ${styles.centerItems} ${styles.centerSelf}`}>
            <iframe className={`${preview ? styles.block : styles.none} ${styles.previewpdf}`} src="/preview_cv.pdf" width="90%" height="600px"></iframe>
            <img onClick={() => { preview ? setPreview(false) : setPreview(true) }} className={`${styles.preview} ${!preview ? styles.block : styles.none}`} src="/pdf_cv.png" alt="my-cv" title="Visualizar CV" />
            <div className={`${styles.actionsProyect} ${styles.grid}`}>
              <button
                className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}
                onClick={() => { preview ? setPreview(false) : setPreview(true) }}>
                {!preview ? (
                  <span className={`${styles.spanView} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                    Visualizar <FaEye />
                  </span>
                ) : (
                  <span className={`${styles.spanView} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                    Cerrar visualización <FaEyeSlash />
                  </span>
                )}
              </button>
              <Link href={"/preview_cv.pdf"} download={"CV-Ismael-Alejo-Juarez.pdf"} className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                Descargar PDF <FaFilePdf />
              </Link>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.section}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`} >Contáctame</h2>
          <div className={`${styles.form} ${styles.flexColumn} ${styles.centerContent} ${styles.centerItems}`}>
            <input
              className={`
              ${styles.input}
              ${stack_sans_headline_200.className}
              ${styles.font16px}`}
              type="text" name="email" id="" placeholder="Escribe tu correo" />
            <textarea
              className={`
              ${styles.input}
              ${styles.textarea}
              ${stack_sans_headline_200.className}
              ${styles.font16px}`}
              name="" id="" maxLength={500} placeholder="Escribe tu mensaje"></textarea>
            <button className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>Enviar mensaje</button>
          </div>
        </section>
      </main>
      <footer className={`${styles.footer} ${styles.flexColumn} ${styles.centerContent} ${styles.centerItems}`}>
        <hr width={200}/>
        <div className={`${styles.social} ${styles.flexRow} ${styles.centerContent} ${styles.centerItems} ${styles.centerSelf}`}>
          <Link target="_blank" href="https://www.linkedin.com/in/ismael-alejo-2339573b4/">
            <FaLinkedin className={`${styles.icon} ${styles.link}`} />
          </Link>
          <Link target="_blank" href="https://github.com/Ismael-Alejo-Juarez">
            <FaGithub className={`${styles.icon} ${styles.link}`} />
          </Link>
        </div>
      </footer>
    </>
  );
}
