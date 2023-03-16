import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link to={'/'} className={classes.link}>First Task</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to={'/second-page'} className={classes.link}>Second Task</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to={'/third-page'} className={classes.link}>Third Task</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;