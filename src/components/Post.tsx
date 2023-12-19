import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import ptBR from 'date-fns/locale/pt-BR'
import {format, formatDistanceToNow} from 'date-fns'

import { getRndInteger } from '../main'

interface Author{
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content{
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface CommentProps{
    id: number;
    content: string;
}

export function Post({author, publishedAt, content}: PostProps){

    const [comments, setComments] = useState([] as CommentProps[])
    const [newCommentText, setCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:true
    })

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setCommentText(event.target.value)
    }

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        const newId = getRndInteger()

        setComments([...comments, {id: newId, content: newCommentText}])
        setCommentText('')
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    function deleteComment(commentToDelete:CommentProps){

        const newCommentListWithoutDeletedOne = comments.filter(comment=>{
            return commentToDelete.id != comment.id
        })

        setComments(newCommentListWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length == 0

    return (
        <article className={styles.post}>
            <header className='headerPost'>
                <div className={styles.author}>
                    <Avatar hasBorders={true} src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p key={getRndInteger()}>{line.content}</p>
                    }else if(line.type == 'link'){
                        return <p key={getRndInteger()}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name='commentText' 
                    placeholder='Deixe um comentário.' 
                    onChange={handleNewCommentChange} 
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type='submit' 
                        disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment=>{
                        return <Comment key={comment.id} comment={comment} onDeleteComment={deleteComment}/>
                    })
                }
            </div>
        </article>
    )
}