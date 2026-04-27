import styles from "@/styles/Home.module.css";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { stack_sans_headline_400 } from '@/fonts/stackssans';

export const Technologies = () => (
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
);