import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new Blog added', blog);
            setIsPending(false);
            history('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)} />
                <label>Blog body:</label>
                <textarea type="text" required value={body} onChange={(event) => setBody(event.target.value)} />
                <label>Blog author:</label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="ds">ds</option>
                    <option value="dsrcr">dsrcr</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default Create