import "./App.css";
import { AppContainer } from "./components/AppContainer";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/ui/theme-provider";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppContainer>
                <Navbar />
                <Routes>
                    <Route index={true} path="/" element={<HomePage />}></Route>
                    {/* <Route path="/profile" element={}></Route>
                    <Route path="/skills" element={}></Route>
                    <Route path="/tasks" element={}></Route> */}
                </Routes>
                <HomePage />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
