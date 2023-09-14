import React from 'react'
import Article from './Article'

function ArticleList( {posts} ) {
const postsMap = posts.map((post) => {
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
})

    return (
        <main>
            {postsMap}
        </main>
    )
}

export default ArticleList