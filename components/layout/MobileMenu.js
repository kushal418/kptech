import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subkey: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        ...isActive,
        status: false,
        key: "",
        subkey: "",
      });
    } else {
      setIsActive({
        ...isActive,
        status: true,
        key,
        subkey: "",
      });
    }
  };

  const handleSubToggle = (subkey) => {
    if (isActive.subkey === subkey) {
      setIsActive((prev) => ({
        ...prev,
        subkey: "",
      }));
    } else {
      setIsActive((prev) => ({
        ...prev,
        subkey,
      }));
    }
  };

  return (
    <>
      <ul className="navigation">
        {/* Home */}
        <li>
          <Link href="/">Home</Link>
          <div
            className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(1)}
          >
            <span className="plus-line" />
          </div>
        </li>

        {/* Courses with submenus */}
        <li className="menu-item-has-children">
          <Link href="#">Courses</Link>

          <ul
            className="sub-menu"
            style={{ display: isActive.key === 2 ? "block" : "none" }}
          >
            {/* Frontend Development */}
            <li className="menu-item-has-children">
              <Link href="/courses">Frontend Development</Link>
              <ul
                className="sub-menu"
                style={{
                  display: isActive.subkey === "frontend" ? "block" : "none",
                }}
              >
                <li><Link href="/course/1">HTML5 / CSS3</Link></li>
                <li><Link href="/course/2">JavaScript</Link></li>
                <li><Link href="/course/4">React.js</Link></li>
                <li><Link href="/course/6">Angular</Link></li>
                <li><Link href="/course/7">Vue.js</Link></li>
              </ul>
              <div
                className={
                  isActive.subkey === "frontend"
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleSubToggle("frontend")}
              >
                <span className="plus-line" />
              </div>
            </li>

            {/* Backend Development */}
            <li className="menu-item-has-children">
              <Link href="/courses">Backend Development</Link>
              <ul
                className="sub-menu"
                style={{
                  display: isActive.subkey === "backend" ? "block" : "none",
                }}
              >
                <li><Link href="/course/11">Node.js</Link></li>
                <li><Link href="/course/16">PHP</Link></li>
                <li><Link href="/course/13">ASP.NET Core</Link></li>
                <li><Link href="/course/14">Java</Link></li>
                <li><Link href="/course/15">Python (Django/Flask)</Link></li>
              </ul>
              <div
                className={
                  isActive.subkey === "backend"
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleSubToggle("backend")}
              >
                <span className="plus-line" />
              </div>
            </li>

            {/* Database */}
            <li className="menu-item-has-children">
              <Link href="/courses">Database</Link>
              <ul
                className="sub-menu"
                style={{
                  display: isActive.subkey === "database" ? "block" : "none",
                }}
              >
                <li><Link href="/course/17">MySQL</Link></li>
                <li><Link href="/course/18">MongoDB</Link></li>
              </ul>
              <div
                className={
                  isActive.subkey === "database"
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleSubToggle("database")}
              >
                <span className="plus-line" />
              </div>
            </li>

            {/* Designing */}
            <li className="menu-item-has-children">
              <Link href="/courses">Designing</Link>
              <ul
                className="sub-menu"
                style={{
                  display: isActive.subkey === "designing" ? "block" : "none",
                }}
              >
                <li><Link href="/course/19">Figma</Link></li>
                <li><Link href="/course/20">Adobe XD</Link></li>
              </ul>
              <div
                className={
                  isActive.subkey === "designing"
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleSubToggle("designing")}
              >
                <span className="plus-line" />
              </div>
            </li>
          </ul>

          <div
            className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>

        {/* About Us */}
        <li>
          <Link href="/about-us">About us</Link>
          <div
            className={isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(4)}
          >
            <span className="plus-line" />
          </div>
        </li>

        {/* Contact Us */}
        <li>
          <Link href="/contact">Contact us</Link>
          <div
            className={isActive.key === 5 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(5)}
          >
            <span className="plus-line" />
          </div>
        </li>
      </ul>
    </>
  );
}
