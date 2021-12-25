/**
 * Creation happen on oninit
 */
const _startupApplication = () => {
  console.warn(`|>_ Creating the Div in Application`);
  let body = document.body;
  const _bodyDiv = ["root", "main", "footer"];
  for (let i = 0; i < _bodyDiv.length; i++) {
    let _div = document.createElement("div");
    _div.className = _bodyDiv[i];
    body.appendChild(_div);
  }
};
const _createNavigation = () => {
  console.warn("|>_ Creating the elements");
  // creating the sidenavigation bar
  let _sideNavdiv = document.createElement("div");
  _sideNavdiv.className = "sidenav";

  // storing the side scroll value
  const _navMenu = [
    "Introduction to css",
    "css selector",
    "Advance css selector",
    "Visual rules",
  ];
  for (let i = 0; i < _navMenu.length; i++) {
    let _aNav = document.createElement("a");
    _aNav.href = "#" + _navMenu[i];
    _aNav.appendChild(document.createTextNode(`${_navMenu[i]}`));
    _sideNavdiv.appendChild(_aNav);
  }
  let root = document.getElementsByClassName("root")[0];
  root.appendChild(_sideNavdiv);
};

const _createContent = () => {
  console.warn(`|>_ Creating the landing content`);
  let _mainContent = document.getElementsByClassName("main")[0];
  console.log(_mainContent);
};

const _createElement = () => {
  _startupApplication();
  _createNavigation();
  _createContent();
};

_createElement();
