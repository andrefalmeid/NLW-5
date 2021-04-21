import styles from "./styles.module.scss";

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando Agora" />
        <strong>Tocando Agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast pra ouvir</strong>
      </div>
      <footer  className={styles.empty}>
          <div className={styles.progress}>
              <span>00:00</span>
              <div className={styles.slider}>
              <div className={styles.emptySlider}/>
              </div>
              <span>00:00</span>
          </div>

          <div className={styles.buttons}>
              <button type="button">
                  <img src="/shuffle.svg" alt="Aleatorio"/>
               </button>
               <button type="button">
                  <img src="/play-previous.svg" alt="Anterior"/>
               </button>
               <button type="button" className={styles.playbutton}>
                  <img src="/play.svg" alt="Tocar"/>
               </button>
               <button type="button">
                  <img src="/play-next.svg" alt="Proximo"/>
               </button>
               <button type="button">
                  <img src="/repeat.svg" alt="Repetir"/>
               </button>
          </div>
      </footer>
    </div>
  );
}
