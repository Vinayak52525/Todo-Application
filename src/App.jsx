import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodosDashboard from "./pages/TodosDashboard";
import UserDashboard from "./pages/UserDashboard";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    color: #2e2e2e;
    background-color: #f4f4f4dd;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    user-select: none;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodosDashboard />,
  },
  {
    path: "users/:userId",
    element: <UserDashboard />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <StyledAppWrapper>
        <RouterProvider router={router} />
      </StyledAppWrapper>
    </QueryClientProvider>
  );
}

export default App;

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
