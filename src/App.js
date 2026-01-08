import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { useStateValue } from "./StateProvider"

function App() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="App">
            {/*some logic*/}
            <div className="App_body">
                {/*<h1>Optional universal element</h1>*/}
                <Routes>

                    <Route
                        path="/"
                        element={
                            user?(<Navigate to="/home" replace/>):<Login />
                        }
                    />

                    <Route
                        path="/home"
                        element={!user? (<Navigate to = "/" replace/>):<Home />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile/>}
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/"
                        replace />}
                    />

                </Routes>
            </div>
            
      </div>  
    );
}

export default App