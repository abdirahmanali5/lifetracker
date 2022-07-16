import { Link } from "react-router-dom"
import "./NotAllowed.css"

export default function NotAllowed() {
  return (
    <div className="NotAllowed">
      <h2>You must be authenticated to do that!</h2>
      <span>
        Login <Link to="/log-in">here</Link>
      </span>
    </div>
  )
}