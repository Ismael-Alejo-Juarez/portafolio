import styles from "@/styles/Home.module.css";
import { stack_sans_headline_200, stack_sans_headline_400 } from '@/fonts/stackssans';

export const AboutMe = () => (
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
);