import styles from './BoxOfficeCard.module.css'
export default function BoxOfficeCard({ title, image }) {
    return (
        <div className={styles.boxOfficeCard}>
            <a href={`#${title}detail`}>
                <img src={image} alt={title} />
            </a>
            <h3>{title}</h3>
        </div>
    );
}
