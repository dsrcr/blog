import BlogList from "../components/BlogList"
import useFetch from "../hooks/useFetch"

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList
                blogs={blogs}
                title="All blogs"
                // handleDelete={handleDelete}
            />}
        </div>
    );
}

export default Home


