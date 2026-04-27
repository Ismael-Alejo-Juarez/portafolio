import styles from "@/styles/Home.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { stack_sans_headline_400 } from '@/fonts/stackssans';
import Link from "next/link";

export const Curriculum = ({preview, setPreview}) => (
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
);