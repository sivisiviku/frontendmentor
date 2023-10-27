import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/js/Home'
import ResultSummary from './pages/js/ResultSummary'
import OrderSummary from "./pages/js/OrderSummary";
import StatsPreview from "./pages/js/StatsPreview";

const router = createBrowserRouter([
  { path: '/', element: <StatsPreview /> }
  // { path: '/', element: <Home /> },
  // { path: '/result-summary', element: <ResultSummary /> }
  // { path: '/order-summary', element: <OrderSummary /> }
  // { path: '/stats-summary', element: <StatsPreview /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;