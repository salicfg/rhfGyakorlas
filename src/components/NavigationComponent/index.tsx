import classes from './NavigationComponent.module.css'
import {NavLink, Outlet} from "react-router-dom";

const NavigationComponent = () => {
    return (
        <>
            <nav className={classes.navRoot}>
                <ul className={classes.navLinks}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/registration">Registration Form</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </>

    )
}

export default NavigationComponent;