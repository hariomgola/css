import React from "react";
import Logo from "../components/Logo/Logo";

const cssNotes = () => {
  return Logo();
};
const introductionToCSS = () => {
  let c1 = `
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
  return <pre>{c1}</pre>;
};
const cssSelector = () => {
  let c2 = `
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
  return <pre>{c2}</pre>;
};
const cssAdvanceSelector = () => {
  let c3 = `
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
  return <pre>{c3}</pre>;
};
const visualRules = () => {
  let c4 = `
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
  return <pre>{c4}</pre>;
};

const boxModel = () => {
  let c5 = `
  # Box Model Property
    - The box model comprises the set of properties that define part of an element that take up space on a web page.
    - The model includes the content ares's size (height and width) and the element's padding, border, and margin.
      ~ width and height  - the height and width of the content area
      ~ Padding           - the amount of space between the content area and the boarder
      ~ border            - the thickness and style of border surrounding the content ares and padding.
      ~ margin            - the amount of space between the border and the outside edge of the element.
      
                   _____________________________________________
                  |                   Margin                    |
                  |     ___________________________________     |
                  |    |             border                |    |
                  |    |     __________________________    |    |
                  |    |    |        padding           |   |    |
                  |    |    |     ______________       |   |    |
                  |    |    |    |    content   |      |   |    |
                  |    |    |    |______________|      |   |    |
                  |    |    |__________________________|   |    |
                  |    |___________________________________|    |
                  |_____________________________________________|
  
  # Height and width
    - An element in html content has two dimension: a height and a width.
    - height and width can be modifies using below property.
        p{
          height:80px;
          width:220px;
        }

  # Border
    - A boarder is a line or the space that surrounds the element, like a frame around painting.
    - boarder can be set with specific width, style and color.
      ~ width - The thickness of the border. A border's thickness can be set in pixel or with (thin,medium,thick).
      ~ Style - The border can be designed as you want.(https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#values)
      ~ Color - The border color can be changed according to the need. (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
          p.content-header {                               p {
            height: 80px;                                    border: 3px solid coral;
            width: 240px;                                  }
            border: solid coral;
          }

  # Border Radius
    - With the help of boader Radius we can modify the boarder of the box.
       .container {
         border: 3px solid blue;
         border-radius: 5px;
       }
  
  # Padding
    - The space between the content of a box and the border of a box is known as padding.
      .container {
        border: 3px solid coral;
        padding: 10px;
      }
    - The padding property is often used to expand the background color and makes the content look less cramped.
    - If you want to be more specific about the amount of passing on each side of a box's content. below property is used.
       ~ padding-top
       ~ padding-right
       ~ padding-bottom
       ~ padding left

  # Padding shorthand
    - Instead of using each side we can assign directly
      .container {
        padding: 6px 11px 4px 9px;  // top right bottom left (run in clockwise direction)
      }
    - if the padding of left and right side content is equal, we can use shorthand property as 3 value only
      .container {
        padding: 5px 10px 20px; // 
      }
    - if the top and bottom are equal and right and left is equal, we can use shorthand property as 2 value.
      .container {
        padding: 5px 10px;
      }

  # Margin
    - So far we have learnt about content, border and passing.
    - Marging is the last and forth component in box model.
    - Margin refers to the space directly outside the box. The margin property is used to specify the size of this space.
      p {
        border: 1px solid orange;
        margin: 20px;
      }
    - Again the margin also has four property simmilar to padding.
      ~ margin-top
      ~ margin-right
      ~ margin-bottom
      ~ margin-left

  # Margin Shorthand
    - Margin shorthand is simmilar to the padding shorthand.

  # Auto
    - The margin property also lets you centre content.
      div.headline{
        width: 400px;
        margin: 0 auto;
      }

    - In above example margin:1 auto value instructs the browser to adjust the left and right margin.
    - Until the element is centred within its containing element.
    - In order to centre an element, a width must be set fo thet element. 
    - Otherwise, the width of the div will be automatically set to the full width of its containing element.

  # Margin Collapse
    - Margin collapse is a term where the margin of 2 element can overlay each other.
    - Margin Collapse occur only in top and bottom.
    - Margin collapse doen't work for left and right. It simply adds up.
       .img-one{                               .img-one {
         margin-right: 20px                       margin-bottom: 30px;
       }                                        }
       .img-two{                               .img-two {
         margin-left: 20px                        margin-top: 20px
       }                                        }

       efficient margin - 40px                  efficient margin - 30px

  # Minimum and Maximum height and width
    - min-width: 300px - this property ensures a minimum width of an element's box.
    - max-width: 600px - this property ensures a maximum width of an element's box.
    - min-height: 150px - this property ensures a minimum height for an element's box.
    - max-height: 300px - this property ensures a maximum height of an element's box.

  # Overflow
    - All component in box model comprises an element's size. must have some overflow content.
    - The overflow property controls what happend to content that spilla, or overflows, outside its box.
      ~ hidden - When set to this value, any content that overflows will be hidden from view.
      ~ scroll - When set to this value, a scrollbar will be added to the element's box so that rest content is visible.
      ~ visible - When set to this value, the overflow content will be displayed outside of the containing element.
      
    - We can also set the overflow property to x and y axis.

  # Resetting default
    - All major web browser have a default stylesheet they use in the absence of an external stylesheet.
    - The default stylesheets are known as user agent stylesheets.
    - User agent stylesheet often have default css rules that sets defauklt value of padding and margin.
    - This affects how the browser displays HTML elements, which can make it difficult for a developer.
    - its a good practise to reset that default value
       * {
         margin: 0;
         padding: 0;
       }

  # Visibility
    - Elements can be hidden from view with the visibility propert
      ~ hidden - hides an elements.
      ~ visible - displays an elements.
      ~ collapse - collapses and elements.
      ~ none - complety remove the elements.

    - Note - the main difference bw none and hidden is that none will complety removed from the webpage.
           - How ever the hidden will not be visible on webpage. but it has the space reserved for it.


  `;
  return <pre>{c5}</pre>;
};

const changingboxModel = () => {
  let c6 = `
  # Change Box Model
    - In box model we have learnt how we change the box model: box dimension, borders, padding and margin.
    - How ever the box model, has an awkward limitation regarding box dimension.
       <h1>Hello World</h1>             h1 {
                                          border: 1px solid black;
                                          height: 200px;
                                          width: 300px;
                                          padding: 10px;
                                        }
  # Expected
    - In the example above, a heading element’s box has solid, black, 1 pixel thick borders.
    - The height of the box is 200 pixels, while the width of the box is 300 pixels.
    - A padding of 10 pixels has also been set on all four sides of the box’s content.

    - Unfortunately, under the current box model, the border thickness and the padding will affect the dimensions of the box.

  # Reality 
    - The 10 pixels of padding increases the height of the box to 220 pixels and the width to 320 pixels. 
    - Next, the 1-pixel thick border increases the height to 222 pixels and the width to 322 pixels.
    - Under this box model, the border thickness and padding are added to the overall dimensions of the box. 
    - This makes it difficult to accurately size a box. Over time, this can also make all of a web page’s content difficult to position and manage.

  # Box Model: Content-Box (Important)
    - Many browser has defulat css property for example font-weight of text is set to normal
    - In same manner the default property of box-model is content-box. This same box model is affected by border thickness and padding.

  # Box Model: Border-Box (Important)
    - We can reset the entire box model and specify a new one:border-box.
       * {
         box-sizing: border-box;
       }
    - The code in the example above resert the box model and avoid the dimensinal issue that exist in the former box model you learned about.
    - In the box model, the height and width of the box will remain fixed. The border thickness and padding will be included inside of the box.
    - It means the overall dimension of the box donn't change
          <h1>Hello World</h1>            * {
                                            box-sizing: border-box;
                                          }
                                           
                                          h1 {
                                            border: 1px solid black;
                                            height: 200px;
                                            width: 300px;
                                            padding: 10px;
                                          }


  `;
  return <pre>{c6}</pre>;
};

const displayandPositioning = () => {
  let c7 = `
  # Flow of HTML
    - A browser will render the element of an HTML document that has no CSS from left to right, top to bottom,
    - In the same order as they exist in the document. This is called the flow of elements in HTML.
    - In Addition to the properties that it provided to style HTML elemnts, CSS included property that chnages how the browser positions elements.
    - These properties specify where an element is located on page, if the element can share lines with other elements, and other related attributes.
    - We are going to learn below property that will allow us to position and view elements on a web page.
    - These property can be used in conjunction with any other styling properties you may know.
        ~ position
        ~ display
        ~ z-index
        ~ float
        ~ clear

  # Position
   - Block level elemnt like <div> create a block the full width of there parenr element from apperaing in the same horizontal space.
   - You can also see that block-level elements also consistently appear on the left side of the browser. (default)
   - The default position of an element can be changes by setting its position property.
       ~ static (default value doesn't need to specify again)
       ~ relative
       ~ absolute
       ~ fixed
       ~ sticky

  # Position: Relative
   - One way to modify the default position of an element is by setting its position property to relative.
   - This value allows you to position an element relative to its default static position on the web page.
   - Allthought we have specified position to relative but we have to specify the position.
   - This is done by accompanying the position decalaration with one or more below offset property
      ~ top - moves the element down from the top.
      ~ bottom - moves the element up from the bottom.
      ~ left - moves the element away from the left side (to the right)
      ~ right - moves the element away from the right side (to the left)
           .box {
             background-color: green;
             position: relative;
             top: 50px;
             left: 120px;
           }
  
  # Position: Absolute
   - Another way of modifying the position of an element is by setting its position to absolute.
   - When an element's position is set to absolute, 
   - all other elements on the page will ignore the and act like it is not present present on the page
   - The element wil be positioned relative to its closest 
   - While offset properties can be used to determine the final position from there.
   
  # Position: fixed
   - When we fix an element to a specific position on the page(regardless fo user scrolling) by setting its position to fixed.
   - Property such as top,bottom,left,right will specify the partiucular position of fixed element.
            .title {
             position: fixed;
             top: 0px;
             left: 0px;
           }

  # Position: Sticky
   - The sticky value in another position value that keeps an element in the document flow as the user scrolls.
   - But sticks to a specified position as the user scrolls, but sticks to a specific position as the page is scrolled further.
   - This is done by using the sticky value along with the familiar offset property.

  # Z-index
   - When boxes on a web page have a  combination of different positions, the boxes can overlap with each other making the content difficult to read.
   - The z-index property controls how far back or how far forward an element should appear on the web page when element overlap.
   - This can be thought of as the depth of elements, with deeper elements appearing behind shallower elements.
   - Zindex have the value 0,1 and z index doesn't works on static element.

  # Inline Display
   - Every HTML Element has a default display value that dictates if it can share horizontal space with other elements.
   - Some elements fill the entire browser from left to rght regardless of the size of their content.
   - Other element only take up as much horizontal space as their content requires and can be directly next to other elements.
   - We will learn mainly about 3 display property
      ~ inline
      ~ block
      ~ inline-block
   - The default display for some elements, such as <em>, <strong>, and <a> is called inline.
   - Inline element have a box that wraps tight around their content,
   - only taking up the amount of space necessary to display their content and not requiring a new line after each element.
   - The height and width of these element cannot be specified in the CSS document.
   - For example, the text of an anchor tag (<a>) wil, by default, be displayed on the same line as the surrounding text, and it will only be as wide as necessary to certain its content. 

  # Display: Inline
   - Inline elements cannot be altered in size with height and width css properties. 
       ->  To learn more about <em>inline</em> elements, read <a href="#">MDN documentation</a>. 
   - In above example, the <em> element is inline, beacuse it displays its content on the same line as the content surrounding it,
   - Includes the anchor tag also. 

  # Display: Block
   - Some element are not displayed in the same line as the content around then. These are called block-level elements.
   - These elements fill the entire width of the page by default, but their width proeprty can also be set.
   - Unless otherwise specified, They are the height necessary to accommodate their content.
   - Elements that are block level by default include all levels of heading elements
   - <h1> to <h6>,<p>,<div> and <fotter>
  `;
  return <pre>{c7}</pre>;
};

export {
  cssNotes,
  introductionToCSS,
  cssSelector,
  cssAdvanceSelector,
  visualRules,
  boxModel,
  changingboxModel,
  displayandPositioning,
};
