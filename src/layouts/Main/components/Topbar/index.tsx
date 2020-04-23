import React, { useState } from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import GitHubButton from "react-github-btn";
import TypoLogo from "../../../../icons/TypoLogo";
import { downloads } from "../../../../data";
import styles from "./styles";
import pkg from "../../../../../package.json";

const useStyles = createUseStyles(styles);

const Topbar: React.FC = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={clsx("navbar", classes.root)}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <TypoLogo height={24} />
          </Link>
          <span
            onClick={() => handleBurgerClick()}
            className={clsx("navbar-burger burger", {
              ["is-active"]: menuOpen,
            })}
            data-target="navbarMenuHeroB"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroB"
          className={clsx("navbar-menu", {
            ["is-active"]: menuOpen,
          })}
        >
          <div className="navbar-end">
            <Link to="/" className="navbar-item is-active">
              Anasayfa
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>İndir</span>
              </a>
              <div className="navbar-dropdown is-right is-boxed">
                {downloads
                  .filter((d) => d.url !== "")
                  .map(({ fileName, sourceName, url }, i) => (
                    <a
                      key={`download-option-${i}`}
                      className="navbar-item"
                      href={url}
                      target="_blank"
                    >
                      <span className="icon">
                        <i className="fas fa-compact-disc"></i>
                      </span>
                      <span>{`${fileName} (${sourceName})`}</span>
                    </a>
                  ))}
              </div>
            </div>

            <a className={clsx("navbar-item", classes.ghButton)}>
              <GitHubButton
                href={pkg.repository.url}
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count={true}
                aria-label="Star deepintr/www on GitHub"
              >
                Star
              </GitHubButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
