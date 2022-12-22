import { Link } from "react-router-dom"

const BlogList = ({ blogs }) => {
  // get the data from parent component through props
  // const blogs = props.blogs
  // const title = props.title
  // console.log(props, blogs)
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
