import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'; 

import  styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/10419679?v=4',
      name: 'Leonidio Alcantara',
      role: 'Desenvolvedor'
    },

  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2023-05-03 20:00:00'),
 },

 {
  id: 2,
  author: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/64759224?v=4',
    name: 'Davi Alcantara',
    role: 'Desenvolvedor'
  },

content: [
  { type: 'paragraph', content: 'Fala galeraa 👋' },
  { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
  { type: 'link', content: 'jane.design/doctorcare'},
],
publishedAt: new Date('2023-09-08 13:52:00'),
}
]


export default function App() {

  return (
    <>  
      <Header />   
      <div className={styles.wrapper}>
        <Sidebar/>        
        <main>
          { posts.map(post =>{
            return (
                <Post 
                  author= { post.author}
                  content= { post.content }
                  publishedAt= { post.publishedAt }
                />
              )
          })}
        </main>
      </div>
    </>
  )
}


