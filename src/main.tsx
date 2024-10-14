import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./pages/Settings.tsx";
import Profile from "./pages/Profile.tsx";
import SmartBusinessPlan from "./pages/SmartBusinessPlan.tsx";
import Home from "./pages/Home.tsx";
import AccountingBudgetAnalysis from "./pages/AccountingBudgetAnalysis.tsx";
import EconomicScenarioAnalysis from "./pages/EconomicScenarioAnalysis.tsx";
import Info from "./pages/Info.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "sbp",
        element: <SmartBusinessPlan />,
      },
      {
        path: "abc",
        element: <AccountingBudgetAnalysis />,
      },
      {
        path: "ase",
        element: <EconomicScenarioAnalysis />,
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
