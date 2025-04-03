import { useRouteError } from "react-router-dom";
import './ErrorPages.css';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
        <h1>Whoops! Something went wrong!</h1>
    </main>
  );
};

export default ErrorPage;