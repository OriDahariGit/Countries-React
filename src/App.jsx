
import "../src/assets/css/common.css";
import "../src/assets/css/details.css";
import "../src/assets/css/main.css";
import "../src/assets/scss/common.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header"
import Details from "./pages/Details";

// Data Importing
const loadData = async () => {
    return fetch('src/assets/CountriesData.json')
        .then(res => {
        return res.json();
        }
    )
}
const data = await loadData();

// UI
const router = createBrowserRouter([
    {
        path: '/index.html',
        element: <Home data={data}/>
    },
    {
        path: '/country-info',
        element: <Details data={data}/>
    }
])

function App() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}



export default App;
