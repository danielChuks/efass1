import classNames from "classnames";
import { ReactElement } from "react";

import styles from "./index.module.scss";
import { useAuthActions } from "../../actions/auth";
import { NavLink } from "react-router-dom";

interface SideNavItemProps {
    pageUrl: string;
    icon: ReactElement;
    title: string;
    active?: boolean;
    signout?: boolean;
    open?: boolean;
}

export function SideNavItem({
    pageUrl,
    icon,
    title,
    active,
    signout = false,
    open = true,
}: SideNavItemProps) {
	
	const { logout } = useAuthActions();


    return (
        <NavLink
            className={classNames(
                styles['side-nav-item'],
                active ? styles['active'] : ''
            )}
            onClick={() => signout && logout  } to={pageUrl}>
            {icon}
            {open && (<p>{title}</p>)}
        </NavLink>
    );
}
