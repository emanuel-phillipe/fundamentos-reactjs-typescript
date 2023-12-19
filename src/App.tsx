import { Header } from './components/Header.js'
import { Sidebar } from './components/Sidebar.js'
import { Post } from './components/Post.js'

import styles from './App.module.css'
import './global.css'

import { getRndInteger } from './main.jsx'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://lh3.googleusercontent.com/fife/AGXqzDkhxxmFM_HBXD9IjwvjczqAibk-NXkkDvbT6pNKg2qjqTDIKdUeJY0YtG_swOg2vdoN2nmTqkOSt4W8Lf4MDPA0VaMv3-ctIFcQVHJbQPLD7WNTjGk_cVtbYMuijpG7rgTDqRNKMMaUZlZpBRfAaYdnqh5fOJb7JQ999G3aDNWPTaYjqoWqfKMzl6wramGug7bREJdGk3r_OnpiJQfEJe1s56vKDzGpLEZR7VhRwEVX9lq-LxSqOWz_GATYbSuiUmrR03JbAio7XQuFpA2iIARGyI2-sU1EBTHl61xyQtKlhXEFl5OLZtYGXj1l-ITQq89yX2O0A4kYH-5AlYfnwUd8OTSJ0Be3DHjG-pgXJabA0NgGV6QYyMf_4b1LJaaEXUCOhayAJ2tr9gBzsPuChJ_rym6-ETLR2bHheQ7v4IqjjkFDh_bQl-fE1C692-FIphrHZilWrrZlYgHaKgXucvqg9DDO4V1e_k6IyQ0PIo32yM5Mgqwem_Gnyz-zjmc4YbScpjXK17nFtP8lDX4y_zf0dePNVa_RRqnBr6r9ggI6SBvQU97oSecZ4YI_DJ7DhOCHzJxwO-bVIcVAboFoBim6AGUDI0FAGk8T0LU0xP5vAZSFdRhrMd7LYwCrZTPHtcv8X-EgnnlBryl4Qw47_8ypW05bKaxAXdtHUdQTAtAIvwtnOPSceYpqNuETLt917ZSHdtpNEWTMHJy0wA93JV889Fm1ixHptq2wPLZKY8077wLryUWn0GylHSoGq8f-7GQ98zDgQebv6PD166fyIwBcPSJkZN61Itt-4cGrt6Tz6-3wUgW8saUJP0aSSkRkbc1hfY2amDUnTNYOjMyTxq7lhfnBripGAMnLhfJzv5CSSt-G-56JPvRsmNvDd6taGJ0HZXy-KRh_Hp8D-E9dBRA8LL_lpo8dSH_QSwCRxrqC05rPXkuV2l0-wAetPwbANafJV1IvDWHyz3oKZr6GFXFAlqcBt208W892l0vbDyDfTalOznLMItW82eObl5r6HljNu2JWvhyem6U_WNfOtwW5o8_SMb_fkaL2rK_g-ZzAohImzUOCmBXQ_JIJKgw=w1920-h911",
      name: "Emanuel Phillipe",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-12-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/96433186?v=4",
      name: "Javier Seiglie",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-12-10 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return (
            <Post 
              key={getRndInteger()}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

            />
            )
          })}
        </main>
      </div>
    </div>
  )
}