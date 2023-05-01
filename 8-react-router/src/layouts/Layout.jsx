import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="mt-10 mx-auto max-w-lg space-y-4">
            <nav className="border p-4 flex gap-x-3">
                <div className="border-black px-2 py-1">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? "text-black" : "text-black/40")}>
                        Home</NavLink>
                </div>
                <div className="border-black px-2 py-1">
                    <NavLink 
                        to="/books"
                        end 
                        className={({ isActive }) => (isActive ? "text-black" : "text-black/40")}>
                        Books</NavLink>
                </div>
                <div className="border-black px-2 py-1">
                    <NavLink 
                        to="/books/new"
                        end 
                        className={({ isActive }) => (isActive ? "text-black" : "text-black/40")}>
                        New Books</NavLink>
                </div>
            </nav>

            <Outlet context={{name: "Hakim"}}/>
        </div>
    )
}