import { Outlet } from "react-router"
import Header from "./Header"
import NavBar from "./NavBar"
import "./Layout.css"

export default function Layout({ add }) {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <NavBar />
      </div>
      <div className="layout__main">
        <Header className="layout__header" add={add} />
        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
