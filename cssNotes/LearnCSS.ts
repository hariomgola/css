/**
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 # Css Anatomy
  - Selector             - The beginning of the ruleset used to target the element that will be styled.
  - Declaration block    - The code in-between (and including) the curly braces ({ }) that contains the CSS declaration(s)
  - Declaration          - The group name for a property and value pair that applies a style to the selected element
  - Property             - The first part of the declaration that signifies what visual characteristic of the element is to be modified
  - value                - The second part of the declaration that signifies the value of the property

 # Inline Styling 
  - <p style='color: red; font-size: 20px;'>I'm learning to code!</p>
 
 # Internal StyleSheet
    <head>
        <style>
            p {
            color: red;
            font-size: 20px;
            }
        </style>
    </head>

 # External StyleSheet
  - you can create a css file and store it there (.css)

 # Linking Css external file.
  - we can link external files using <link> element in html
  - href — like the anchor element, the value of this attribute must be the address, or path, to the CSS file.
  - rel — this attribute describes the relationship between the HTML file and the CSS file.
  - Because you are linking to a stylesheet, the value should be set to stylesheet.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 # Adding Css to element
    h1 {
    color: maroon;
    }

 # Adding universal CSS
    * {
    border: 1px solid red;
    }

 # Adding Css with Class
   <p class='brand'>Sole Shoe Company</p>
   .brand {
   }

 # Adding Multiple Classes
  <h1 class='green bold'> ... </h1>
  .green {
      color: green;
    }
  .bold {
      font-weight: bold;
    }

 # Adding css with the help of ID
  <h1 id='large-title'> ... </h1>
  #large-title {

  }

 # Assigning attribute with href
    a[href*='florence'] {
    color: lightgreen;
    }
    a[href*='beijing'] {
    color: lightblue;
    }

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 # Pseudo-class
  - Pseudo class is refer to as change in certain element or be in different state, after certain user interaction.
  - When we click on an <input> element and a blue boarder is added showing that it is in focus.
  - When you click on a blue <a> link to visit to another page, but when you return the link's text is purple.
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

  <h1 class='headline'>Breaking News</h1>
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
  - <ul class='main-list'>
    <li> ... </li>
    <li> ... </li>
    <li> ... </li>
    </ul>
  - .main-list li { 
  }
























































 */