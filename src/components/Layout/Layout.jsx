import css from './Layout.module.css';
import { ActivePage } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ActivePage className={css.headerLink} to="/">
            Home
          </ActivePage>
          <ActivePage className={css.headerLink} to="/movies">
            Movies
          </ActivePage>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
