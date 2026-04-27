import styles from "@/styles/Home.module.css";
import { stack_sans_headline_200, stack_sans_headline_400 } from '@/fonts/stackssans';

export const Contact = () => (
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
);