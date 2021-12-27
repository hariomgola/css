/**
 *   -- Creating Main content --
 */
const _IntroductionToCSS = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
    # Css Anatomy
    - Selector             - The beginning of the ruleset used to target the element that will be styled.
    - Declaration block    - The code in-between (and including) the curly braces ({ }) that contains the CSS declaration(s)
    - Declaration          - The group name for a property and value pair that applies a style to the selected element
    - Property             - The first part of the declaration that signifies what visual characteristic of the element is to be modified
    - value                - The second part of the declaration that signifies the value of the property
  
   # Inline Styling 
    - &lt;p style='color: red; font-size: 20px;'>I'm learning to code!&lt;/p>
   
   # Internal StyleSheet
      &lt;head>
          &lt;style>
              p {
              color: red;
              font-size: 20px;
              }
          &lt;/style>
      &lt;/head>
  
   # External StyleSheet
    - you can create a css file and store it there (.css)
  
   # Linking Css external file.
    - we can link external files using &lt;link> element in html
    - href — like the anchor element, the value of this attribute must be the address, or path, to the CSS file.
    - rel — this attribute describes the relationship between the HTML file and the CSS file.
    - Because you are linking to a stylesheet, the value should be set to stylesheet.
      `;
  return _pre;
};
const _cssSelector = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
   # Adding Css to element
      h1 {
      color: maroon;
      }
  
   # Adding universal CSS
      * {
      border: 1px solid red;
      }
  
   # Adding Css with Class
     &lt;p class='brand'>Sole Shoe Company&lt;/p>
     .brand {
     }
  
   # Adding Multiple Classes
    &lt;h1 class='green bold'> ... &lt;/h1>
    .green {
        color: green;
      }
    .bold {
        font-weight: bold;
      }
  
   # Adding css with the help of ID
    &lt;h1 id='large-title'> ... &lt;/h1>
    #large-title {
  
    }
  
   # Assigning attribute with href
      a[href*='florence'] {
      color: lightgreen;
      }
      a[href*='beijing'] {
      color: lightblue;
      }
      `;
  return _pre;
};
const _cssAdvanceSelector = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
   # Pseudo-class
    - Pseudo class is refer to as change in certain element or be in different state, after certain user interaction.
    - When we click on an &lt;input> element and a blue boarder is added showing that it is in focus.
    - When you click on a blue &lt;a> link to visit to another page, but when you return the link's text is purple.
    - when you're filling out a form and button is greyed out.After filling its enabled
    - Example of pseudo-class selector
         :focus
         :visited
         :disabled
         :active
         :hover
  
   # Specificity
    - Specificity is the order by which the browser decides which css style will be displayed.
    - A best practice in css is to style elements which using the lowest degree of specificity.
    - So that id an element needs a new style, it is easy to override.
  
    &lt;h1 class='headline'>Breaking News&lt;/h1>
      h1 {
      color: red;
      }
      
      .headline {
      color: firebrick;
      }
  
   # Chaining
    - When writting css rules, it's possible to require an HTML elements to have two or more css selector at that time.
    - This is done by combining multiple selectors, Which we will refers to as chaining.
    - h1.special{
  
    }
  
   # Descendant combination
    - In Addition to chaining selectors to select elements, CSS also supports selecting elements that are nested within other HTML elements, aslo known as descendants.
    - &lt;ul class='main-list'>
      &lt;li> ... &lt;/li>
      &lt;li> ... &lt;/li>
      &lt;li> ... &lt;/li>
      &lt;/ul>
    - .main-list li { 
    }
  
   # Chaining and Specificity
    - Instead of selecting all the elements in p tab. we can chain and select which main element is required.
    - p{ color:blue; }  // it select all p element
    - .main p{ color:blue;}  // it only select p element inside only main
  
   # Multiple selector
   - In order to make CSS more concise, it's possible to add CSS styles to multiple CSS selectore all at once
   - h1 {font-familt:Georgia} .menu {font-family:Georgia}
   - Above 2 properties have same css so we can use the below to put this thing in css
   - h1,
      .menu{
        font-family:Georgia
      }
  
    `;
  return _pre;
};
const _visualRules = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
    # Font Family
    - This property is used to change font of any particular element we use font family property
    - h1{
      font-family:'Courier New'
    }
    - Find different font ->  https://fonts.google.com/
  
   # Font Size
    - This property is used to change the font size of particular element
    - p {font-size:18px}
  
   # Font-Weight
    - This property is used control the text bold and thin appearance
    - p { font-weight:bold}
  
   # Text-Allign
    - This property is used to allign the text at particular side. Below are the property used.
           - left
           - center
           - right
           - justify
  
   # Color and Background Color
    - foreground color - color which put into a particular element.
    - Background color - color which put into the background of element.
    - h1{
      color:red;
      background-color:blue;
    }
  
   # Opacity
    - Opocity is the measure of how transparent an element is.
    - It's measured from 0 to 1, with 1 represent 100% and 0 represent 0%.
    - h2{ opacity:0.5;}
  
   # Background Image
    - Css has the ability to change the background of an element.
    - main-banner{
      background-image:url('https://imageurl.jpg');
    }
  
   # Important
    - !important is applied to specific declaration, instead of full riles.
    - It will override any style no matter how specific it is.
    - As a result, it should almost never be used. Once !important is used,its really hard to override.
    - p {color: blue!important}
      `;
  return _pre;
};
const _demo = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = ``;
  return _pre;
};

/**
 * Creating the land-up page
 */
const _landupContent = (content) => {
  let _main = document.getElementsByClassName("main")[0];
  let _div = document.createElement("div");
  _div.id = content;
  _div.className = "maincontent";
  let _h1 = document.createElement("h1");
  _h1.id = "CSS";
  let _ndiv = document.createElement("div");
  _ndiv.style =
    "text-align: center; background-color: #404040; overflow: hidden;";
  _ndiv.id = "logo";
  _ndiv.innerHTML = `
  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="94vh" height="94vh">
    <path class="path" stroke="#f7df1d" stroke-width="0.6" stroke-linejoin="round" stroke-linecap="round"
      stroke-miterlimit="10" stroke-dasharray="132" stroke-dashoffset="132" fill="#404040"
      d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z" />
    <path class="path" stroke="#f7df1d" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"
      stroke-miterlimit="10" stroke-dasharray="125" stroke-dashoffset="125" fill="#404040"
      d="M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z" />
  </svg>
  `;
  // Implementing children node
  _main.appendChild(_div);
  document.getElementsByClassName("maincontent")[0].appendChild(_h1);
  document.getElementById("CSS").appendChild(_ndiv);

  // Making introduction to JavaScript Active
  let _nav = document.getElementsByClassName("navbutton")[0];
  _nav.className = "navbutton active";
};

/**
 * Rendering main content
 */
const _mainContentRendered = (content) => {
  // Switching condition by rendering the HTML
  if (content == "CSS Notes") {
    _landupContent(content);
  } else if (content == "Introduction to css") {
    let _main = document.getElementsByClassName("main")[0];
    let _div = document.createElement("div");
    _div.id = content;
    _div.className = "maincontent";
    let _h1 = document.createElement("h1");
    _h1.innerHTML = content;
    _h1.id = "heading";
    let _ndiv = document.createElement("div");
    _ndiv.id = "pre";
    // Implementing children nodes
    _main.appendChild(_div);
    document.getElementsByClassName("maincontent")[0].appendChild(_h1);
    document.getElementById(`${content}`).appendChild(_ndiv);
    document.getElementById(`pre`).appendChild(_IntroductionToCSS());
    console.warn(`|>_ Rendering Introducton to CSS`);
  } else if (content == "css selector") {
    let _main = document.getElementsByClassName("main")[0];
    let _div = document.createElement("div");
    _div.id = content;
    _div.className = "maincontent";
    let _h1 = document.createElement("h1");
    _h1.innerHTML = content;
    _h1.id = "heading";
    let _ndiv = document.createElement("div");
    _ndiv.id = "pre";
    // Implementing children nodes
    _main.appendChild(_div);
    document.getElementsByClassName("maincontent")[0].appendChild(_h1);
    document.getElementById(`${content}`).appendChild(_ndiv);
    document.getElementById(`pre`).appendChild(_cssSelector());
    console.warn(`|>_ Rendering Css selector`);
  } else if (content == "Advance css selector") {
    let _main = document.getElementsByClassName("main")[0];
    let _div = document.createElement("div");
    _div.id = content;
    _div.className = "maincontent";
    let _h1 = document.createElement("h1");
    _h1.innerHTML = content;
    _h1.id = "heading";
    let _ndiv = document.createElement("div");
    _ndiv.id = "pre";
    // Implementing children nodes
    _main.appendChild(_div);
    document.getElementsByClassName("maincontent")[0].appendChild(_h1);
    document.getElementById(`${content}`).appendChild(_ndiv);
    document.getElementById(`pre`).appendChild(_cssAdvanceSelector());
    console.warn(`|>_ Rendering Advance CSS selector`);
  } else if (content == "Visual rules") {
    let _main = document.getElementsByClassName("main")[0];
    let _div = document.createElement("div");
    _div.id = content;
    _div.className = "maincontent";
    let _h1 = document.createElement("h1");
    _h1.innerHTML = content;
    _h1.id = "heading";
    let _ndiv = document.createElement("div");
    _ndiv.id = "pre";
    // Implementing children nodes
    _main.appendChild(_div);
    document.getElementsByClassName("maincontent")[0].appendChild(_h1);
    document.getElementById(`${content}`).appendChild(_ndiv);
    document.getElementById(`pre`).appendChild(_visualRules());
    console.warn(`|>_ Rendering Visual Rules`);
  }
};

/**
 * Creating main sections
 */
const _startupApplication = () => {
  console.warn(`|>_ Creating the Div in Application`);
  let body = document.body;
  const _bodyDiv = ["root", "main", "copyright"];
  for (let i = 0; i < _bodyDiv.length; i++) {
    let _div = document.createElement("div");
    _div.className = _bodyDiv[i];
    body.appendChild(_div);
  }
};

/**
 * Creating side navigation bar
 */
const _createNavigation = () => {
  console.warn("|>_ Creating the elements");
  // creating the sidenavigation bar
  let _sideNavdiv = document.createElement("div");
  _sideNavdiv.id = "sidenav";
  _sideNavdiv.className = "sidenav";

  // storing the side scroll value
  const _navMenu = [
    "CSS Notes",
    "Introduction to css",
    "css selector",
    "Advance css selector",
    "Visual rules",
  ];
  for (let i = 0; i < _navMenu.length; i++) {
    let _aNav = document.createElement("button");
    _aNav.id = "navbutton";
    _aNav.className = "navbutton";
    _aNav.onclick = function (event) {
      clickFunctionality(event);
    };
    // _aNav.href = "#" + _navMenu[i];
    _aNav.appendChild(document.createTextNode(`${_navMenu[i]}`));
    _sideNavdiv.appendChild(_aNav);
  }
  let root = document.getElementsByClassName("root")[0];
  root.appendChild(_sideNavdiv);
};

/**
 * Deleting the DOM element attribute
 */
const _deleteElement = () => {
  try {
    let _div = document.getElementsByClassName("maincontent")[0];
    _div.remove();
  } catch (e) {
    console.warn(`Element not present to delete`);
  }
};

/**
 * For Navigation Active functionality
 */
const _navigation = (event) => {
  let _nav = document.getElementsByClassName("navbutton active");
  for (let i = 0; i < _nav.length; i++) {
    _nav[0].className = "navbutton";
  }
  event.currentTarget.className += " active";
};

/**
 * Creating click functionality
 */
const clickFunctionality = (event) => {
  _deleteElement();
  _navigation(event);
  console.warn(`Rendering the element ----> ${event.target.innerHTML} `);
  _mainContentRendered(event.target.innerHTML);
};

/**
 * Creating copyright content
 */
const _copyright = () => {
  let _cright = document.getElementsByClassName("copyright")[0];
  let _line = document.createElement("div");
  _line.className = "copyrightline";
  _line.id = "copyrightline";
  _cright.appendChild(_line);
  let _cursor = document.createElement("div");
  _cursor.className = "cursor";
  _cursor.id = "cursor";
  _cright.appendChild(_cursor);
};

/**
 * Const Animate footer
 */
const _animateFooter = () => {
  /**
   * Displayed text
   */
  const _content = [
    " - No One Absolutely no one can close the door that GOD has open for you - ",
    "Created and developed by @hari from scractch to production",
    "No copyright issues. Feel free to copy anything and everything from this website.",
    "If you need any help, ping me ! @ https://github.com/hariomgola",
    "Oh God that's it, Let me move you to the desired notes"
  ];

  /**
   * Defining global variable here
   */
  let _part = 0; // current sentence
  let _partIndex = 0; // number of character in sentence
  let _interval; // hold the settimeout time
  let _element = document.getElementById("copyrightline"); // element that hold the text
  let _cursor = document.getElementById("cursor"); // cursor element

  /**
   * Typing effect
   */
  const _typing = () => {
    let text = _content[_part].substring(0, _partIndex + 1);
    _element.innerHTML = text;
    _partIndex++;

    // logic after full sentence is completed
    if (text == _content[_part]) {
      // Hiding the cursor
      _cursor.style.display = "none";
      clearInterval(_interval);
      // creating a settimeout
      setTimeout(() => {
        _interval = setInterval(_deleting, 50);
      }, 1000);
    }
  };
  /**
   * Deleting effect
   */
  const _deleting = () => {
    let text = _content[_part].substring(0, _partIndex - 1);
    _element.innerHTML = text;
    _partIndex--;

    // logic after full sentence is deleted
    if (text == "") {
      clearInterval(_interval);

      // logic to display the array text in loop
      if (_part == _content.length - 1) {
        _part = 0;
      } else {
        _part++;
      }
      _partIndex = 0;

      // logic to display the new sentence
      setTimeout(() => {
        _cursor.style.display = "inline-block";
        _interval = setInterval(_typing, 100);
      }, 200);
    }
  };

  // starting the typing effect onload functionality
  _interval = setInterval(_typing, 100);
};

/**
 * Running functionality start from here
 */
const startApplication = () => {
  _startupApplication();
  setTimeout(() => {
    _createNavigation();
    _landupContent();
    _copyright();
    setTimeout(() => {
      _animateFooter();
    }, 100);
  }, 100);
};

startApplication();
