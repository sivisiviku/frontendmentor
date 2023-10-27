import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/js/Home'
import ResultSummary from './pages/js/ResultSummary'
import OrderSummary from "./pages/js/OrderSummary";
import StatsPreview from "./pages/js/StatsPreview";
import PreviewCard from "./pages/js/PreviewCard";

const router = createBrowserRouter([
  { path: '/', element: <PreviewCard /> }
  // { path: '/', element: <Home /> },
  // { path: '/result-summary', element: <ResultSummary /> }
  // { path: '/order-summary', element: <OrderSummary /> }
  // { path: '/stats-summary', element: <StatsPreview /> }
  // { path: '/stats-summary', element: <PreviewCard /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;