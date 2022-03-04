import styles from './styles.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <img src="/assets/logo.svg" alt="logo-lucas" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Categorias</a>
                <a href="#">Contato</a>
            </nav>

            <div className={styles.formGroup}>
                <input placeholder='Buscar' type="text" />
                <button>
                    <img src="/assets/search.svg" alt="" />
                </button>
            </div>
        </div>
    )
}