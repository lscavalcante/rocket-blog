import styles from "./styles.module.scss";

interface props {
    img: string;
    title?: string;
    data: string;
    isSimple?: boolean
}

export default function Card({ img, data, isSimple = false, title="Write your text" }: props) {



    return (
        <div className={styles.container}>
            <div className={`${isSimple ? styles.simpleCard : styles.notSimpleCard}`}>
                <img src={img} alt="" />
                <div className={styles.date}>
                    <span>Janeiro 04, 2022</span>
                </div>
                <h3>{title}</h3>
                <span>{data}</span>
            </div>
        </div>
    )
}