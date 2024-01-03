import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
    <div className="flex justify-between">
            <div className="w-[20%]  py-5 bg-sky-500">
           <ul>
            <li>
                <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
                <Link to={"/dashboard/profile"}>Profile</Link>
            </li>
            <li>
                <Link to={"/dashboard/editProfile"}>Edit</Link>
            </li>
           </ul>
          
        </div>
        <div className="w-[80%] text-center">
        <Outlet></Outlet>
        </div>
    </div>
        
    );
};

export default Dashboard;