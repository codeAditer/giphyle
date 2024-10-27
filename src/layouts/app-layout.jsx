import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
    return (
        <div className="bg-gray-950 text-white min-h-screen" >
            <div className="mx-auto" >
                <Header />

                <div>
                    <main className="">
                        <Outlet />
                    </main>
                </div>

            </div>
        </div>
    );
};

export default AppLayout;
