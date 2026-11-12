import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import ArticleDetail from "./Pages/ArticleDetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:id", element: <ArticleDetail /> },
      { path: "a-propos", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
