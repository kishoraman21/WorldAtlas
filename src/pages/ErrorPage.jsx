import { NavLink, useRouteError } from "react-router-dom";
export default function ErrorPage() {

    const error = useRouteError(); // a hook 
    console.log(error);

    return (
        <>
            <h1>Error Page </h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"> // redirecting to the home page
                <button>Go Home </button>
            </NavLink>

        </>
    )
}