import styles from "@/styles/Home.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { stack_sans_headline_400 } from '@/fonts/stackssans';
import Link from "next/link";

export const Main = () => (
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
);