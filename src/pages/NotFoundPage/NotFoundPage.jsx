import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <h2>CLICK THE LINK</h2>
        <Link to="/">click me</Link>
      </div>
    </main>
  )
}

export default NotFoundPage;