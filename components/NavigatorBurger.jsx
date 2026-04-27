import styles from "@/styles/Home.module.css"
import { stack_sans_headline_200 } from '@/fonts/stackssans';
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export const NavigatorBurger = () => (
    <details className={`${styles.navBurger} ${styles.flexColumn}`}>
        <summary className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font28px}`}>
            <IoMenu />
        </summary>
        <div className={`${styles.burgerOptions} ${styles.flexColumn}`}>
            <Link href="#main" className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font18px}`}>Principal</Link>
            <Link href="#aboutme" className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font18px}`}>Sobre mi</Link>
            <Link href="#technologies" className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font18px}`}>Tecnologías</Link>
            <Link href="#proyects" className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font18px}`}>Proyectos</Link>
            <Link href="#curriculum" className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font18px}`}>Curriculum Vitae</Link>
            <Link href="#contact" className={`
                ${styles.fontcolor} 
                ${styles.link} 
                ${stack_sans_headline_200.className} 
                ${styles.font18px}`}>Contacto</Link>
        </div>
    </details>
);