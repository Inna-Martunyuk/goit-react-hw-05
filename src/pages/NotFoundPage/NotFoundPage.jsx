import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={css.homeLink}>
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
