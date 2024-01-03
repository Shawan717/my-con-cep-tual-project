import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex justify-between p-10 shadow-md">
            <div >
                <h1>Amajhon</h1>
            </div>
            <nav>
                
                <ul className="flex gap-3">
                 <NavLink to="/" className={({ isActive, isPending }) =>isActive ? "bg-sky-500" : isPending ? "active" : ""}>Messages</NavLink>

                 <NavLink to="/products" className={({ isActive, isPending }) =>isActive ? "bg-sky-500" : isPending? "active" : ""}>Messages</NavLink>
                   {/* <li><a href="/">Home</a></li> */}
                   <li><a href="/products">Products</a></li>
                   <li><a href="/dashboard">Dashboard</a></li>
                   <li><a href="/about">About</a></li>
                   
                    
                </ul>
            </nav>
        </div>
    );
};

export default Nav;