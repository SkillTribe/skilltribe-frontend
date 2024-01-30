import "./App.css";
import { AppContainer } from "./components/AppContainer";
import { ThemeProvider } from "./components/ui/theme-provider";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppContainer>
                <Routes>
                    <Route index={true} path="/" element={<HomePage />}></Route>
                    {/* <Route path="/profile" element={}></Route>
                    <Route path="/skills" element={}></Route>
                    <Route path="/tasks" element={}></Route> */}
                </Routes>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
