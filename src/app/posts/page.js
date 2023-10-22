const fetschPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}


export default async function Posts() {
    const posts = await fetschPosts()
    return (
        <section>
            <h1 className='text-center border border-blue-500 py-4'> Prueba de petición a la API https://jsonplaceholder.typicode.com/posts </h1>
            {posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
}