import styles from "@/styles/Home.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { stack_sans_headline_400 } from '@/fonts/stackssans';
import Link from "next/link";
import { useState } from "react";

// IMPORTAR COMPONENTES
import { Navigator } from "@/components/Navigator";
import { Main } from "@/components/Main";
import { AboutMe } from "@/components/AboutMe";
import { Technologies } from "@/components/Technologies";
import { Proyect } from "@/components/Proyect";
import { Curriculum } from "@/components/Curriculum";
import { Contact } from "@/components/Contact";
import { NavigatorBurger } from "@/components/NavigatorBurger";

export default function Home() {
  const [preview, setPreview] = useState(false);
  const proyects = [
    {
      id: 1,
      name: `Plataforma e-commerce "creArte"`,
      description: `Como proyecto personal, estoy desarrollando
                una plataforma e-commerce con el fin de dar un 
                espacio a los negocios locales e independientes 
                de promocionar y vender sus productos hechos a 
                mano, como peluches de estambre, pinturas, esculturas, etc.`,
      location: "Nacozari de García, Sonora, México",
      site: "in-deploment",
      repository: "https://github.com/Ismael-Alejo-Juarez/creArte",
      img: "/screen_crearte.png"
    },
    {
      id: 2,
      name: `Sistema de Tutorías para la Universidad de la Sierra`,
      description: `Proyecto académico. Sistema para los tutores de la
                Universidad de la Sierra, mejorando el control sobre 
                sus tutorados y asesorías efectuadas durante el semestre.`,
      location: "Moctezuma, Sonora, México",
      site: "in-deploment",
      repository: "https://github.com/shishak5/Proyecto-U",
      img: "/screen_crearte.png"
    }
  ];

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
      <Navigator />
      <NavigatorBurger />
      <main className={`${styles.main} ${styles.flex} ${styles.flexColumn}`} >
        <Main />
        <AboutMe />
        <Technologies />
        <section id="proyects" className={styles.section}>
          <h2 className={`${stack_sans_headline_400.className} ${styles.font24px}`}>Proyectos</h2>
          {proyects.map((proyect) => (
            <div key={proyect.id}>
              <Proyect
                name={proyect.name}
                description={proyect.description}
                location={proyect.location}
                site={proyect.site}
                repository={proyect.repository}
                img={proyect.img} />
              <hr className={styles.separator} />
            </div>
          ))}
        </section>
        <Curriculum preview={preview} setPreview={setPreview}/>
        <Contact />
      </main>
      <footer className={`${styles.footer} ${styles.flexColumn} ${styles.centerContent} ${styles.centerItems}`}>
        <hr width={200} />
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
