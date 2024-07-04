import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ApplicationForm />}>
                        n
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
