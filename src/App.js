import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BlogDetails from "./BlogDetails"
import NotFound from "./NotFound"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* Home Route */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Create Route */}
            <Route path="/create">
              <Create />
            </Route>
            {/* Blog Details Route */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* Not Found Component */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
