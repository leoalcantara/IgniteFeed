import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/10419679?v=4"  alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonidio Alcantara</strong>
                            <time title='24 de agosto as 18:45' dateTime='24/08/2023 18:45:15'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
            </div>
            <footer>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </footer>
        </div>
    )
}