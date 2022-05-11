import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout(): JSX.Element {
    return (
        <React.Fragment>
            <h1>Navbar</h1>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </React.Fragment>
    )
}