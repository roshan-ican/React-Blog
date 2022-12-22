import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
  // Makes our variables reactive
  // const [name, setName] = useState("mario")
  // const [age, setAge] = useState(20)

  // we will add our delete function in here only because we have a state defined in,
  // then we will pass it as a prop to other components as a prop
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  // const [blogs, setBlogs] = useState(null)
  // // For Loading we use a hook
  // const [isPending, setIsPending] = useState(true)
  // // To render the error message on the UI
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   // console.log("useEffect Ran")
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("Could not fetch resource for that data")
  //         }
  //         console.log(res)
  //         return res.json()
  //       })
  //       .then((data) => {
  //         setBlogs(data)
  //         setIsPending(false)
  //         setError(null)
  //       })
  //       .catch((err) => {
  //         // console.log(err.message)
  //         setIsPending(false)
  //         setError(err.message)
  //       })
  //   }, 1000)
  // }, [])
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All the blogs !" />}
    </div>
  )
}

export default Home
