import { Link } from "@inertiajs/react"

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-white">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-black">JALAN.IN</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered bg-white"/>
                </div>
                <div className="dropdown dropdown-end text-black">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/400/225/arch" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                        {!user ?
                            <>
                                <li><Link href={route('login')} as="button">Login</Link></li>
                                <li><Link href={route('register')} as="button">Register</Link></li>
                            </>
                            :
                            <>
                                <li>
                                    <Link href={route('dashboard')} as="button" className="justify-between">
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link href={route('logout')} method="post" as="button">Profile</Link></li>
                                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar