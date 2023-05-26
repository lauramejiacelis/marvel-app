import styles from '../styles/Card.module.css'
import Image from 'next/image'

const Card = ({name, image, comics, movies}) =>{
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>PERSONAJE</h3>
        <h3>{name}</h3>
        <Image
          src={image}
          width={125}
          height={125}
          alt={`Character ${name} poster`}
          className={styles.thumbnail}
        />
        <div className={styles.characterInfo}>Comics: {comics}</div>
        <div className={styles.characterInfo}>Películas: {movies}</div>
      </div>

    </div>
  )
}

export default Card;