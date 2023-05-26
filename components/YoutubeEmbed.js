import styles from '../styles/YoutubeEmbed.module.css'

const YoutubeEmbed = ({embedId}) => {
  return <div className={styles.videoResponsive}>
      <iframe 
        width="560" 
        height="315" 
        src= {`https://www.youtube.com/embed/${embedId}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
  </div>
}
export default YoutubeEmbed