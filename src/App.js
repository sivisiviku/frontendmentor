import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/js/Home'
import ResultSummary from './pages/js/ResultSummary'
import OrderSummary from "./pages/js/OrderSummary";

const router = createBrowserRouter([
  { path: '/', element: <OrderSummary /> }
  // { path: '/', element: <Home /> },
  // { path: '/result-summary', element: <ResultSummary /> }
  // { path: '/order-summary', element: <OrderSummary /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;