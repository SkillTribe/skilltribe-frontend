import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppContainer } from "./components/AppContainer";
import { ThemeProvider } from "./components/ui/theme-provider";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./auth";

// Set up a Router instance
const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    context: {
        auth: undefined!, // This will be set after we wrap the app in an AuthProvider
    },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
function InnerApp() {
    const auth = useAuth();
    auth.isAuthenticated = true;
    // auth.setUser("Zs");
    return <RouterProvider router={router} context={{ auth }} />;
}
function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppContainer>
                <AuthProvider>
                    <InnerApp />
                </AuthProvider>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
