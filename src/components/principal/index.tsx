import styles from './styles.module.scss';

export default function Principal() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.text}>
                    <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </span>
                    <div className={styles.seeMore}>
                        <h3>Veja mais</h3>
                        <img src="/assets/arrow-right.svg" alt="see more" />
                    </div>
                </section>
                <img src="/assets/featured-image.png" alt="" />
            </div>
        </div>
    );
}