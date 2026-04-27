import styles from "@/styles/Home.module.css";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { stack_sans_headline_200, stack_sans_headline_400 } from '@/fonts/stackssans';
import Link from "next/link";

export const Proyect = ({name, description, location, site, repository, img}) => (
    <div className={`${styles.proyect} ${styles.grid} ${styles.centerItems}`}>
        <div>
            <p className={`${styles.font18px} ${stack_sans_headline_400.className}`}>{name}</p>
            <p className={`${styles.description} ${styles.font18px} ${stack_sans_headline_200.className}`}>
                {description}
                <br />
                <FaLocationDot /> {location}
            </p>
            <div className={`${styles.actionsProyect} ${styles.grid}`}>
                <Link href={site} className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                    Visitar sitio <FaExternalLinkAlt />
                </Link>
                <Link href={repository} target="_blank" className={`${styles.action} ${styles.link} ${styles.centerItems} ${styles.centerContent} ${styles.flexRow} ${stack_sans_headline_400.className} ${styles.font18px}`}>
                    Visitar repositorio <FaGithub />
                </Link>
            </div>
        </div>
        <img src={img} alt="crearte_screen" />
    </div>
);