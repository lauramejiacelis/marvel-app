import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Characters.module.css'

export const getStaticProps = async () => {
  const res= await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5c0ac94ae46c3f7242300871fa61952c&hash=6bc9123d784f5c98b1a2790c76e0e013')
  const data = await res.json()

  return {
    props: { characters: data.data.results}
  }
}

const Characters = ({characters}) =>{
  console.log(characters);
  return(
    <>
    <Head>
        <title>Marvel | Personajes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/marvel.png" />
      </Head>
      <main>
        <div className={styles.infoContainer}>
          <div className={styles.progress}>PROGRESO DE PELICULAS PRODUCIDAS</div>
          <div className={styles.video}>VIDEO</div>
          <div className={styles.image}>
            <Image
              src="https://wallpapershome.com/images/pages/pic_h/17945.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '382px', height: 'auto' }}
              alt="avengers poster"
            />
          </div>
        </div>
        <div className={styles.cardsContainer}>
          PERSONAJES
            
          <div className={styles.card}>
            <h3>PERSONAJE</h3>
            {characters.map((character)=>(
              <h3>{character.name}</h3>
            ))}
            

            <div className={styles.characterInfo}>Comics:</div>
            <div className={styles.characterInfo}>Peliculas:</div>
          </div>
        </div>
        
        
      </main>

    </>
    
  )
}

export default Characters