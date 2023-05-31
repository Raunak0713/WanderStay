import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useParams } from "react-router-dom";

export default function AccountPage() {
    const { user, ready } = useContext(UserContext);

    let {subpage} = useParams();
    if(subpage === undefined) {
        subpage = 'profile';
    }

    if (!ready) {
        return 'Loading...';
    }

    if (!user && ready) {
        return <Navigate to={'/login'} />;
    }

    function linkClasses(type=null){
        let classes =  'py-2 px-6';
        if(type === subpage) {
            classes += ' bg-primary text-white rounded-full ';
        }
        return classes;
    }

    return (
        <div>
            <nav className="w-full flex mt-8 gap-2 justify-center">
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My Accommodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="">
                    Logged in as {user.name}
                </div>
            )}
        </div>
    );
}
