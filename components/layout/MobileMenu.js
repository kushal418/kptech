import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subkey: "",
  });

  const router = useRouter();

  // 👇 Reset menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsActive({
        status: false,
        key: "",
        subkey: "",
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const handleToggle = (key) => {
    setIsActive((prev) => ({
      ...prev,
      key: prev.key === key ? "" : key,
      subkey: "",
    }));
  };

  const handleSubToggle = (subkey) => {
    setIsActive((prev) => ({
      ...prev,
      subkey: prev.subkey === subkey ? "" : subkey,
    }));
  };

  return (
    <>
      <ul className="navigation">
        {/* Home */}
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* Courses */}
        <li className="menu-item-has-children">
          <Link href="#">Courses</Link>
          <ul
            className="sub-menu"
            style={{ display: isActive.key === 2 ? "block" : "none" }}
          >
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
                className={isActive.subkey === "frontend" ? "dropdown-btn open" : "dropdown-btn"}
                onClick={() => handleSubToggle("frontend")}
              >
                <span className="plus-line" />
              </div>
            </li>

            {/* Backend */}
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
                className={isActive.subkey === "backend" ? "dropdown-btn open" : "dropdown-btn"}
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
                className={isActive.subkey === "database" ? "dropdown-btn open" : "dropdown-btn"}
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
                className={isActive.subkey === "designing" ? "dropdown-btn open" : "dropdown-btn"}
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

        {/* About */}
        <li>
          <Link href="/about-us">About us</Link>
        </li>

        {/* Contact */}
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </>
  );
}
