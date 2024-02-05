import { BaseContainer } from "@/components/BaseContainer";
import { Navbar } from "@/components/Navbar";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => (
        <>
            <BaseContainer>
                <Navbar />
                <Outlet />
            </BaseContainer>
        </>
    ),
});
