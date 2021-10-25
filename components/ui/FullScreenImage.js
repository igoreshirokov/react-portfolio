import styles from "../../styles/fullscreenimage.module.sass";

export function FullScreenImage ({image}) {
    return (
        <div className={styles.FullScreenImage}>
            <img src={image} />
        </div>
    )
}