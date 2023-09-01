import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post (){
    return (
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/10419679?v=4"   
                    />
                    <div className={styles.authorInfo}>
                        <strong>leonidio Alcantara</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='24 de agosto as 18:45' dateTime='24/08/2023 18:45:15'>Publicada há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Fala galeraa 👋 </p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p> 👉 {' '} <a href="http://">jane.design/doctorcare</a> </p>
                <p> 
                    <a href=""> #novoprojeto </a>{' '}
                    <a href=""> #nlw </a> {' '}
                    <a href=""> #rocketseat </a> 
                </p>
            </div>
            
            <form className= {styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                   placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
               <Comment/>
               <Comment/>
               <Comment/>
            </div>


       </article>
    )
}