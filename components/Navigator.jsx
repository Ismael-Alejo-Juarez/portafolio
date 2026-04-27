import styles from "@/styles/Home.module.css";
import { stack_sans_headline_200 } from '@/fonts/stackssans';

export const Navigator = () => (
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
);