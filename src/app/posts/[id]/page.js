export default function Post({ params }) {
    const { id } = params
    return (

        <div className="flex min-h-screen flex-col items-center justify-between p-24">

            <h1>post {id}</h1>
        </div>
    )
}