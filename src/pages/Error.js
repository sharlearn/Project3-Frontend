import { useRouteError } from "react-router-dom";

// Nice to have an error page! Well done!

export default function ErrorPage() {
  const error = useRouteError();
  // REMOVE CONSOLE LOGS :D

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
