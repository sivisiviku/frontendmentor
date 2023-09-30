import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/js/Home'
import ResultSummary from './pages/js/ResultSummary'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/result-summary', element: <ResultSummary /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;