import {Routes, Route} from "react-router";
import './App.css'
import NavigationComponent from "./components/NavigationComponent";
import RegistrationFormPage from "./pages/RegistrationFormPage";

function App() {

  return (
    <Routes>
      <Route path={'/'} element={ <NavigationComponent/>}>
        <Route index element={<p>Welcome...</p>}/>
        <Route path={'registration'} element={<RegistrationFormPage/>}/>
      </Route>

    </Routes>
  )
}

export default App
