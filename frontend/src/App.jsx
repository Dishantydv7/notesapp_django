import React from "react"
import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Notfound from "./pages/Notfound"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtectedRoutes"


function Logout () {
  localStorage.clear();
  return <Navigate to ="/login" />
}


function RegisterandLogout(){
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route
              path = '/' 
              element = {
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
              }
             />

            <Route path = '/login' element = {<Login />} />
            <Route path="/logout" element = {<Logout />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '*' element = {<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
