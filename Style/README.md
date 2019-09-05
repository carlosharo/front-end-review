# CSS3 - Review

## **Introduction**
CSS: stands for Cascading Style Sheets.
Describes how HTML elements are displayed on screen, is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

[Syntax](#Syntax)

[Selectors](#Selectors)

[Attribute Selectors](#Attribute-Selectors)

[Combinators](#Combinators)

[Pseudo-classes](#Pseudo-classes)

[Pseudo-Elements](#Pseudo-Elements)

[CSS Units](#CSS-Units)

[Comments](#Comments)

[Insert CSS](#Insert-CSS)

[Colors](#Colors)

[CSS Background](#CSS-Background)

[Borders](#Borders)

[Margins](#Margins)

[Paddings](#Paddings)

[Height / Width](#Height-/-Width)

[Box Model](#Box-Model)

[Outline](#Outline)

[Text](#Text)

[Fonts](#Fonts)

[links](#links)

[Lists](#Lists)

[Tables](#Tables)

[Display](#Display)

[Max-Width](#Max-Width)

[CSS Layout - Property (position)](#CSS-Layout-Property-(position))

[Overflow](#Overflow)

[Float](#Float)

[Inline Block](#Inline-Block)

[Align](#Align)

[Navigation Bar](#Navigation-Bar)

[Image Sprites](#Image-Sprites)

[Rounded Corners](#Rounded-Corners)

[Tooltips](#Tooltips)

[Responsive Image](#Responsive-Image)

[Variables](#Variables)

[Box Sizing](#Box-Sizing)

[Flex Box](#Flex-Box)

[Media Queries](#Media-Queries)

## **Syntax**
A CSS rule-set consists of a selector and a declaration block:
```
h1        {property: value; property: value}
selector  Declaration
```

The selector points to the HTML element you want to style.
The declaration block contains one or more declarations separated by semicolons.
Each declaration includes a CSS property name and a value, separated by a colon.

```
p {
  color: red;
  text-align: center;
}
```

## **Selectors**
CSS selectors are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more.

**Simple selectors**

* tag name: selects elements based on the element name.
All 'p' elements on a page will be center-aligned, with a red text color.
```
p {
  text-align: center;
  color: red;
}
```

* id: The id selector uses the id attribute of an HTML element to select a specific element.
The id of an element should be unique within a page
Write a hash (#) character, followed by the id of the element.
```
#id {
  text-align: center;
  color: red;
}
```

* class: selects elements with a specific class attribute
write a period (.) character, followed by the name of the class.
Note: A class name cannot start with a number!
```
.center {
  text-align: center;
  color: red;
}
```

## **Attribute Selectors**
It is possible to style HTML elements that have specific attributes or attribute values.

* attribute: select an element based on the attribute value  
Syntax : [attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]

```
[attr] {
  text-align: center;
  color: red;
}
```

selects all 'a' elements with a target attribute  

```
a[target] {
  background-color: yellow;
}
```

* [attribute="value"]  
The [attribute="value"] selector is used to select elements with a specified attribute and value.
```
a[target="_blank"] {
  background-color: yellow;
}
```

* [attribute~="value"]  
Is used to select elements with an attribute value containing a specified word.
```
[title~="flower"] {
  border: 5px solid yellow;
}
```

* [attribute|="value"]
used to select elements with the specified attribute starting with the specified value.
```
[class|="top"] {
  background: yellow;
}
```

* [attribute^="value"]
is used to select elements whose attribute value begins with a specified value.
```
[class^="top"] {
  background: yellow;
}
```

* [attribute$="value"]
used to select elements whose attribute value ends with a specified value.
```
[class$="test"] {
  background: yellow;
}
```

* [attribute*="value"]
used to select elements whose attribute value contains a specified value.
```
[class*="te"] {
  background: yellow;
}
```

* universal * : se aplica a todos los elementos del documento

## **Combinators**

A CSS selector can contain more than one simple selector

  There are four different combinators in CSS:

  * Descendant selector (space)
  The descendant selector matches all elements that are descendants of a specified element.

  selects all <p> elements inside <div> elements

  ```
  div p {
    background-color: yellow;
  }
  ```

  * child selector (>)
  The child selector selects all elements that are the immediate children of a specified element.

  selects all <p> elements that are immediate children of a <div> element:
  ```
  div > p {
    background-color: yellow;
  }
  ```

  * Adjacent sibling selector (+)
  selects all elements that are the adjacent siblings of a specified element.
  ```
  div + p {
  background-color: yellow;
  }
  ```

  * General sibling selector (~)
  selects all elements that are siblings of a specified element.
  ```
  div ~ p {
    background-color: yellow;
  }
  ```

  ## **Pseudo-classes**

    Pseudo-classes allow the selection of elements based on state information that is not contained in the document tree.  

    it can be used to:

    Style an element when a user mouses over it  
    Style visited and unvisited links differently  
    Style an element when it gets focus  

    * syntax
    ```
    selector:pseudo-class {
      property:value;
    }
    ```

    * Hover on div
    ```
    div:hover {
      background-color: blue;
    }
    ```

    * Match the first 'p' element
    ```
    p:first-child {
      color: blue;
    }
    ```

  ## **Pseudo-Elements**
  A CSS pseudo-element is used to style specified parts of an element.

    it can be used to:

   Style the first letter, or line, of an element  
   Insert content before, or after, the content of an element  

   * Syntax
   ```
   selector::pseudo-element {
     property:value;
   }
  ```

  * ::first-line  
  The ::first-line pseudo-element is used to add a special style to the first line of a text.

  ```
  p::first-line {
    color: #ff0000;
    font-variant: small-caps;
  }
  ```

  * ::first-letter  
  used to add a special style to the first letter of a text.
  ```
  p::first-letter {
    color: #ff0000;
    font-size: xx-large;
  }
  ```

  * ::before  
  used to insert some content before the content of an element.
  ```
  h1::before {
    content: url(smiley.gif);
  }
  ```

  * ::after
  ```
  h1::after {
    content: url(smiley.gif);
  }
  ```

  * ::selection  
  matches the portion of an element that is selected by a user
  ```
  ::selection {
    color: red;
    background: yellow;
  }
  ```

* more than one class:
```
<p class="center large"></p>
p.center {text-align: center}
p.large {font-size: 300%}
```

* Grouping selectors: To group selectors, separate each selector with a comma.
```
h1, h2, p {
  text-align: center;
  color: red;
}
```

## **CSS Units**

There are two types of lengths used in CSS — relative and absolute.

**Absolute length units**

The following are all absolute length units — they are not relative to anything else and are generally considered to always be the same size.

<table >
 <thead>
  <tr>
   <th scope="col">Unit</th>
   <th scope="col">Name</th>
   <th scope="col">Equivalent to</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>cm</code></td>
   <td>Centimeters</td>
   <td>1cm = 96px/2.54</td>
  </tr>
  <tr>
   <td><code>mm</code></td>
   <td>Millimeters</td>
   <td>1mm = 1/10th of 1cm</td>
  </tr>
  <tr>
   <td><code>Q</code></td>
   <td>Quarter-millimeters</td>
   <td>1Q = 1/40th of 1cm</td>
  </tr>
  <tr>
   <td><code>in</code></td>
   <td>Inches</td>
   <td>1in = 2.54cm = 96px</td>
  </tr>
  <tr>
   <td><code>pc</code></td>
   <td>Picas</td>
   <td>1pc = 1/16th of 1in</td>
  </tr>
  <tr>
   <td><code>pt</code></td>
   <td>Points</td>
   <td>1pt = 1/72th of 1in</td>
  </tr>
  <tr>
   <td><code>px</code></td>
   <td>Pixels</td>
   <td>1px = 1/96th of 1in</td>
  </tr>
 </tbody>
</table>

## **Comments**

```
A CSS comment starts with /* and ends with */. Comments can also span multiple lines:
/* This is a single-line comment */

/* This is
a multi-line
comment */
```

## **Insert CSS**
Three Ways to Insert CSS

* External style sheet: change the look of an entire website by changing just one file
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

* Internal style sheet: may be used if one single page has a unique style.
```
<style>

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
```

* Inline style: may be used to apply a unique style for a single element.
```
<h1 style="color:blue;margin-left:30px;">This is a heading</h1>
```

* Multiple style Sheets
If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>
```
Result: orange

```
<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
Result: external color

* Cascading order
1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

## **Colors**
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
In HTML, a color can be specified by using a color name:
Tomato, orange, gray, slateblue, violet, lightgray, mediumseagreen

* Background color
```
<h1 style="background-color:DodgerBlue;">Hello World</h1>
```

* Text Color
```
<h1 style="color:Tomato;">Hello World</h1>
```

* Border Color
```
<h1 style="border:2px solid Tomato;">Hello World</h1>
```

* Color values
Same as color name "Tomato":  

RGB: rgb(red, green, blue)  
rgb(255, 99, 71)

HEX:   
#ff6347 Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).  

hsl  hsl(hue, saturation, lightness)  
hsl(9, 100%, 64%)    

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.  
Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.  
Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white.  

rgba(red, green, blue, alpha)  

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):  
transparent
rgba(255, 99, 71, 0.5)

## **CSS Background**

* background-color : specifies the background color of an element.
```
body {
  background-color: lightblue;
}
```

* background-image: pecifies an image to use as the background of an element
```
body {
  background-image: url("gradient_bg.png");
}
```
* background-repeat  
repeat horizontal: background-repeat: repeat-x;  
repeat vertical: background-repeat: repeat-y;  
no repeat: background-repeat: no-repeat;  

* background-position  
position: background-position: right top;  

* background-attachment  
To specify that the background image should be fixed (will not scroll with the rest of the page)  
background-attachment: fixed;  

* painting-area  
Specifies the painting area of the background  
background-clip: padding-box;  

* origin  
Specifies where the background image(s) is/are positioned  
background-origin: content-box;  

* size  
Specifies the size of the background image(s)  
background-size: auto;  
background-size: 300px 100px;  

* Short code  
To shorten the code, it is also possible to specify all the background properties in one single property.  
The order is:  
color, image, repeat, attachment, position  
```
body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}
```

## **Borders**

The CSS border properties allow you to specify the style, width, and color of an element's border.

* Border Style

The border-style property specifies what kind of border to display.

The following values are allowed:

dotted - Defines a dotted border  
dashed - Defines a dashed border  
solid - Defines a solid border  
double - Defines a double border  
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value  
inset - Defines a 3D inset border. The effect depends on the border-color value  
outset - Defines a 3D outset border. The effect depends on the border-color value  
none - Defines no border  
hidden - Defines a hidden border  

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).

Example:
```
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
```

* Border width

The border-width property specifies the width of the four borders.  
The width can be set as a specific size (in px, pt, cm, em, etc)  
The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border).  

```
p.one {
  border-style: solid;
  border-width: 5px;
}
```

* Border Color

The border-color property is used to set the color of the four borders.  
The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border).

```
p.three {
  border-style: solid;
  border-color: red green blue yellow;
}
```

* border radius

The border-radius property is used to add rounded borders to an element
```
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

* Shorthand Property

The border property is a shorthand property for the following individual border properties:
- border-width
- border-style (required)
- border-color
```
p {
  border: 5px solid red;
}
```

You can also specify all the individual border properties for just one side:
```
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}
```

* All css border properties

border	               Sets all the border properties in one declaration  
border-bottom	         Sets all the bottom border properties in one declaration  
border-bottom-color	   Sets the color of the bottom border  
border-bottom-style	   Sets the style of the bottom border  
border-bottom-width	   Sets the width of the bottom border  
border-color	         Sets the color of the four borders  
border-left	           Sets all the left border properties in one declaration  
border-left-color	     Sets the color of the left border  
border-left-style	     Sets the style of the left border  
border-left-width	     Sets the width of the left border  
border-radius	         Sets all the four border-radius properties for rounded corners  
border-right	         Sets all the right border properties in one declaration  
border-right-color	   Sets the color of the right border  
border-right-style	   Sets the style of the right border  
border-right-width	   Sets the width of the right border  
border-style	         Sets the style of the four borders  
border-top	           Sets all the top border properties in one declaration  
border-top-color	     Sets the color of the top border  
border-top-style	     Sets the style of the top border  
border-top-width	     Sets the width of the top border  
border-width	         Sets the width of the four borders  

## **Margins**

The CSS margin properties are used to create space around elements, outside of any defined borders.

**individual sides**

- margin-top
- margin-right
- margin-bottom
- margin-left

All the margin properties can have the following values:  

auto - the browser calculates the margin  
length - specifies a margin in px, pt, cm, etc.  
% - specifies a margin in % of the width of the containing element  
inherit - specifies that the margin should be inherited from the parent element  

```
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

* Margin - Shorthand

margin: 25px 50px 75px 100px;  
- top margin is 25px  
- right margin is 50px  
- bottom margin is 75px  
- left margin is 100px  

```
p {
  margin: 25px 50px 75px 100px;
}
```

* auto value  
You can set the margin property to auto to horizontally center the element within its container.
```
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```

* margin collapse  
Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

h1 { margin: 0 0 50px 0; }  
h2 { margin: 20px 0 0 0; }

margin would be a total of 70px (50px + 20px). But due to margin collapse, the actual margin ends up being 50px.

## **Paddings**
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

* Individual sides

CSS has properties for specifying the padding for each side of an element:

- padding-top
- padding-right
- padding-bottom
- padding-left

```
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

* Padding - Shorthand

To shorten the code, it is possible to specify all the padding properties in one property.

If the padding property has four values:

padding: 25px 50px 75px 100px;
- top padding is 25px
- right padding is 50px
- bottom padding is 75px
- left padding is 100px

```
div {
  padding: 25px 50px 75px 100px;
}
```

* padding an element with width

To keep the width at 300px, no matter the amount of padding, you can use the box-sizing property. This causes the element to maintain its width; if you increase the padding, the available content space will decrease. Here is an example:
```
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

## **Height / Width**

The height and width properties are used to set the height and width of an element.


  * Height / Width

  The height and width can be set to auto (this is default. Means that the browser calculates the height and width), or be specified in length values, like px, cm, etc., or in percent (%) of the containing block.

```
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

Note: The height and width properties do not include padding, borders, or margins; they set the height/width of the area inside the padding, border, and margin of the element!

* max-width  
The max-width property is used to set the maximum width of an element.

Note: The value of the max-width property overrides width.

* All dimension Properties

height	     Sets the height of an element  
max-height	 Sets the maximum height of an element  
max-width	   Sets the maximum width of an element  
min-height	 Sets the minimum height of an element  
min-width	   Sets the minimum width of an element  
width	       Sets the width of an element  

## **Box Model**

In CSS, the term "box model" is used when talking about design and layout.  
It consists of: margins, borders, padding, and the actual content.  
The box model allows us to add a border around elements, and to define space between elements.

  Explanation of the different parts:

  Content - The content of the box, where text and images appear  
  Padding - Clears an area around the content. The padding is transparent  
  Border - A border that goes around the padding and content  
  Margin - Clears an area outside the border. The margin is transparent  

  ```
    div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
    }
  ```

  **Important** When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.  

  The total width of an element should be calculated like this:  
  Total element width = width + left padding + right padding + left border + right border + left margin + right margin


## **Outline**

An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out"  

  CSS has the following outline properties:

  * outline-style: specifies the style of the outline(dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden)
  * outline-color: is used to set the color of the outline.
  * outline-width: specifies the width of the outline
  * outline-offset: adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.
  * outline:  is a shorthand property for setting width, style, color
  ```
  p.ex1 {
    border: 1px solid black;
    outline-style: solid;
    outline-color: red;
    outline-width: medium;
    outline-offset: 15px;
  }

  p.ex2 {outline: 5px solid yellow;}
  ```

## **Text**

Text formatting

* Text color
The color property is used to set the color of the text.  
```
body { color: blue; }
```

* Text alignment
used to set the horizontal alignment of a text.  
A text can be left or right aligned, centered, or justified.  
```
h1 { text-align: center; }
```
text-align: justify; is stretched so that every line has equal width.

* Text decoration
used to set or remove decorations from text  

text-decoration: none; is often used to remove underlines from links

The other text-decoration values are used to decorate text:
  text-decoration: overline;  
  text-decoration: line-through;  
  text-decoration: underline;  

* Text Transformation
Used to specify uppercase and lowercase letters in a text  
It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word

```
p.uppercase {
  text-transform: uppercase; //TEXT UPPERCASE
  text-transform: lowercase; //text lowercase
  text-transform: capitalize; //Text Capitalize
}
```

* Text indentation
used to specify the indentation of the first line of a text:
```
p { text-indent: 50px; }
```

* Letter spacing
used to specify the space between the characters in a text.
```
h1 { letter-spacing: 3px; }
```

* Line height
used to specify the space between lines
```
p.small { line-height: 0.8; }
```

* Word Spacing
used to specify the space between the words in a text.
```
h1 { word-spacing: 10px; }
```

* Vertical align
Sets the vertical alignment of an element
```
img.a {
  vertical-align: text-top;
  vertical-align: text-bottom;
}
```

## **Fonts**

The font-family property should hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font, and so on.

Note: If the name of a font family is more than one word, it must be in quotation marks, like: "Times New Roman".

* Font family

  More than one font family is specified in a comma-separated list:
  ```
    p {
      font-family: "Times New Roman", Times, serif;
    }
  ```

* Font style

This property has three values:

normal - The text is shown normally  
italic - The text is shown in italics  
oblique - The text is "leaning" (oblique is very similar to italic, but less supported)  

```
p.normal { font-style: normal; }
```

* Font size

The font-size value can be an absolute, or relative size.

Absolute size:

Sets the text to a specified size  
Does not allow a user to change the text size in all browsers (bad for accessibility reasons)  
Absolute size is useful when the physical size of the output is known  

Relative size:  

Sets the size relative to surrounding elements  
Allows a user to change the text size in browsers  

```
h1 {
  font-size: 40px; //pixels
  font-size: 1em; // default size of 1em is 16px
}
```

* Font Weight
specifies the weight of a font

```
p.weight {
  font-weight: normal;
  font-weight: bold;
}
```

* Responsive font size

The text size can be set with a vw unit, which means the "viewport width".

That way the text size will follow the size of the browser window

```
h1 { font-size: 5vw; }
```

* shorthand declaration

The font property is a shorthand property for:

font-style
font-variant
font-weight
font-size/line-height
font-family

```
p.a {
  font: 15px arial, sans-serif;
}
```

## **links**

links can be styled differently depending on what state they are in.

  The four links states are:  

  a:link - a normal, unvisited link  
  a:visited - a link the user has visited  
  a:hover - a link when the user mouses over it  
  a:active - a link the moment it is clicked  

Advanced link Buttons

```
a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
```

## **Lists**

The CSS list properties allow you to:

Set different list item markers for ordered lists  
Set different list item markers for unordered lists  
Set an image as the list item marker  
Add background colors to lists and list items  

* Markers
The list-style-type property specifies the type of list item marker.

```
ul.a {
  list-style-type: circle;
  list-style-type: square;
  list-style-type: upper-roman;
  list-style-type: lower-alpha;
}
```

The list-style-image property specifies an image as the list item marker:
```
ul { list-style-image: url('sqpurple.gif'); }
```

* Position
The list-style-position property specifies the position of the list-item markers (bullet points).
```
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}
```

* Remove defaults

The list-style-type:none property can also be used to remove the markers/bullets.  
Note that the list also has default margin and padding. To remove this, add margin:0 and padding:0 to 'ul' or 'ol'  

* Shorthand
The list-style property is a shorthand property. It is used to set all the list properties in one declaration:
```
ul {
  list-style: square inside url("sqpurple.gif");
}
```

## **Tables**

The look of an HTML table can be greatly improved with CSS

* Borders
To specify table borders in CSS, use the border property.
```
table, th, td {
  border: 1px solid black;
}
```

The border-collapse property sets whether the table borders should be collapsed into a single border
```
table {
  border-collapse: collapse;
}
```

* Width/Height
Are defined by the width and height properties  
```
table { width: 100%; }

th { height: 50px; }
```

* Horizontal alignment
The text-align property sets the horizontal alignment (like left, right, or center) of the content in <th> or <td>.
```
th {
  text-align: left;
}
```

* Vertical alignment
The vertical-align property sets the vertical alignment (like top, bottom, or middle) of the content in <th> or <td>.
```
td {
  height: 50px;
  vertical-align: bottom;
}
```

* Horizontal dividers

```
th, td {
  border-bottom: 1px solid #ddd;
}
```

* Hoverable Table
```
tr:hover {background-color: #f5f5f5;}
```

* Striped Tables
For zebra-striped tables, use the nth-child() selector and add a background-color to all even (or odd) table rows
```
tr:nth-child(even) {background-color: #f2f2f2;}
```

## **Display**

The display property is the most important CSS property for controlling layout.

  The display property specifies if/how an element is displayed.

  Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

  * Block-level Elements  
  A block-level element always starts on a new line and takes up the full width available.

  'div','h1' - 'h6','p','form','header','footer','section'

  * Inline Elements
  An inline element does not start on a new line and only takes up as much width as necessary.

  'span', 'a', 'img'

  * Display none
  display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them

  ```
  span {
    display: block;
  }

  a {
    display: block;
  }
  ```

## **Max-Width**

Using max-width, will improve the browser's handling of small windows. This is important when making a site usable on small devices

  Example

  ```
  div.ex2 {
    max-width: 500px;
    margin: auto;
    border: 3px solid #73AD21;
  }
  ```

## **CSS Layout Property (position)**

The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

* static  
An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page

* relative  
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
```
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```

* fixed
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
```
div.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  border: 3px solid #73AD21;
  background-color: green;
  color: white;
}
```

* absolute
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
```
div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```

* sticky

An element with position: sticky; is positioned based on the user's scroll position.
```
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}
```

* Overlapping

The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).  
An element with greater stack order is always in front of an element with a lower stack order.
```
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

## **Overflow**

The CSS overflow property controls what happens to content that is too big to fit into an area.

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

visible - Default. The overflow is not clipped. The content renders outside the element's box  
hidden - The overflow is clipped, and the rest of the content will be invisible  
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content  
auto - Similar to scroll, but it adds scrollbars only when necessary  

* overflow-x and overflow-y
The overflow-x and overflow-y properties specifies whether to change the overflow of content just horizontally or vertically (or both)

```
div {
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */
}
```

## **Float**
The CSS float property specifies how an element should float.

  left - The element floats to the left of its container  
  right- The element floats to the right of its container  
  none - The element does not float (will be displayed just where it occurs in the text). This is default  
  inherit - The element inherits the float value of its parent  

  ```
  img {
    float: right;
  }
  ```

  * box-sizing
  The box-sizing property allows us to include the padding and border in the box's total width (and height), making sure that the padding stays inside of the box and that it does not break.

  Float boxes
  ```
  * {
    box-sizing: border-box;
  }

  .box {
    float: left;
    width: 33.33%; /* three boxes (use 25% for four, and 50% for two, etc) */
    padding: 50px; /* if you want space between the images */
  }
  ```

  * Navigation menu

  Use float with a list of hyperlinks to create a horizontal menu
  ```
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

li {
  float: left;
}

li a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.active {
  background-color: red;
}
```

## **Inline Block**

  display: inline-block allows to set a width and height on the element.

  with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

  Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

## **Align**
CSS Layout - Horizontal & Vertical Align

  * Center align text  
  To just center the text inside an element, use text-align: center;
  ```
  .center {
    text-align: center;
    border: 3px solid green;
  }
  ```

  * Center an Image
  To center an image, set left and right margin to auto and make it into a block element:
  ```
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
    }
  ```

  * Center Vertically - Using padding
  ```
  .center {
    padding: 70px 0;
    border: 3px solid green;
    text-align: center;
  }
  ```

## **Navigation Bar**
Use position: 'sticky' to 'li' to create a sticky navbar.

  * Sticky Navigation

```
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
```

## **Image Sprites**

An image sprite is a collection of images put into a single image.

  width, height: - Defines the portion of the image we want to use
  background: - Defines the background image and its position (left 0px, top 0px)  

  ```
  #home {
    width: 46px;
    height: 44px;
    background: url(img_navsprites.gif) 0 0;
  }

  #next {
    width: 43px;
    height: 44px;
    background: url(img_navsprites.gif) -91px 0;
  }
  ```

  * Hover
  Tip: The :hover selector can be used on all elements, not only on links.  

  ```
  #home a:hover {
    background: url('img_navsprites_hover.gif') 0 -45px;
  }
  ```

## **Rounded Corners**

The CSS border-radius property defines the radius of an element's corners.

  The border-radius property can have from one to four values  
  top-left, top-right, bottom-right, bottom-left  

  ```
  #corners {
    border-radius: 15px 50px 30px 5px;
  }
  ```

## **Tooltips**

A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element:

  The tooltiptext class holds the actual tooltip text. It is hidden by default, and will be visible on hover.  
  CSS: The tooltip class use position:relative, which is needed to position the tooltip text (position:absolute).

  ```
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
```

* Right tooltip
```
.tooltip .tooltiptext {
  top: -5px;
  left: 105%;
}
```

* left tooltip
```.tooltip .tooltiptext {
  top: -5px;
  right: 105%;
}
```

* Top tooltip
```
.tooltip .tooltiptext {
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}
```

## **Responsive Image**

If you want an image to scale down if it has to, but never scale up to be larger than its original size, add the following:

```
img {
  max-width: 100%;
  height: auto;
}
```

## **Variables**

Variables in CSS should be declared within a CSS selector that defines its scope. For a global scope you can use either the :root or the body selector.

  * syntax

  ```
  var(custom-name, value)
  ```

  ```
  :root {
    --main-bg-color: coral;
  }

#div1 {
  background-color: var(--main-bg-color);
}

#div2 {
  background-color: var(--main-bg-color);
}
```

## **Box Sizing**
The CSS box-sizing property allows us to include the padding and border in an element's total width and height.

  By default, the width and height of an element is calculated like this:

  width + padding + border = actual width of an element  
  height + padding + border = actual height of an element  

  If you set box-sizing: border-box; on an element padding and border are included in the width and height

  ```
  .div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
    box-sizing: border-box;
  }
```

The code below ensures that all elements are sized in this more intuitive way
```
* {
  box-sizing: border-box;
}
```

## **Flex Box**

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

* Elements  
To start using the Flexbox model, you need to first define a flex container.

```
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

The flex container becomes flexible by setting the display property to flex
```
.flex-container {
  display: flex;
}
```

### **The flex container properties are**

* flex-direction  
Defines in which direction the container wants to stack the flex items.

- column
- column-reverse
- row
- row-reverse

```
.flex-container {
  display: flex;
  flex-direction: column;
}
```

* flex-wrap  
specifies whether the flex items should wrap or not

- wrap
- nowrap

```
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```
* flex-flow  
shorthand property for setting both the flex-direction and flex-wrap

```
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

* justify-content  
Used to align the flex items

- center
- flex-start
- flex-end
- space-around
- space-between

```.flex-container {
  display: flex;
  justify-content: center;
}
```

* align-items  
used to align the flex items vertically.

- center
- flex-start
- flex-end
- stretch
- baseline

```
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

* align-content  
used to align the flex lines with the flex-wrap property.

- space-between
- space-around
- stretch
- center
- flex-start
- flex-end

```
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: space-between;
}
```

* Perfect centering
Set both the justify-content and align-items properties to center
```
.flex-container {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
```

### **Child Elements**
The direct child elements of a flex container automatically becomes flexible (flex) items.

  The flex item properties are:

  * order  
   specifies the order of the flex items.

   ```
   <div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
  </div>
  ```

  * flex-grow  
   specifies how much a flex item will grow relative to the rest of the flex items.

   ```
   <div class="flex-container">
   <div style="flex-grow: 1">1</div>
   <div style="flex-grow: 1">2</div>
   <div style="flex-grow: 8">3</div>
   </div>
   ```

  * flex-shrink  
  specifies how much a flex item will shrink relative to the rest of the flex items.

  ```
  <div style="flex-shrink: 0">3</div>
  ```

  * flex-basis  
  specifies the initial length of a flex item.

  ```
  <div style="flex-basis: 200px">3</div>
  ```

  * flex
  shorthand property for the flex-grow, flex-shrink, and flex-basis  
  Make the third flex item not growable (0), not shrinkable (0), and with an initial length of 200 pixels

  ```
  <div style="flex: 0 0 200px">3</div>
  ```

  * align-self
  specifies the alignment for the selected item inside the flexible container.  

  ```
  <div style="align-self: center">3</div>
  ```

## **Media Queries**
The @media rule, introduced in CSS2, made it possible to define different style rules for different media types.

  When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules.

* Syntax
```
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

 * Media types
 - all: used for all media type devices
 - print: used for printers
 - screen: used for computer screens, tablets, smart-phones etc
 - speech: used for screenreaders that "reads" the page out load

 * Example
 changes the background-color to lightgreen if the viewport is 480 pixels wide or wider
 ```
 @media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

# CSS Pre-Processors

**Advantages**

* Save time

* Easy maintenance

* Reuse code

## SASS

## **Introduction**

CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help.

Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

[Variable](#Variable)

[Nesting](#Nesting)

[Partials](#Partials)

[Import](#Import)

[Mixins](#Mixins)

[Extend/Inheritance](#Extend/Inheritance)

[Operators](#Operators)

## Variable

You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.

```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## Nesting

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML

**SASS**

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

**CSS3**

```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

You'll notice that the ul, li, and a selectors are nested inside the nav selector. This is a great way to organize your CSS and make it more readable.

## Partials

You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files.

 A partial is simply a Sass file named with a leading underscore. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @import directive.

## Import

Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

Let's say you have a couple of Sass files, reset.scss and base.scss. We want to import reset.scss into base.scs


```
// _reset.scss
html,
body,
ul,
ol {
  margin:  0;
  padding: 0;
}
```

```
// base.scss
@import 'reset';
body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

Notice we're using @import 'reset'; in the base.scss file. When you import a file you don't need to include the file extension .scss. Sass is smart and will figure it out for you.

## Mixins

A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.

You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes.

```
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

* To create a mixin you use the @mixin directive and give it a name.
* We're also using the variable $property inside the parentheses so we can pass in a transform of whatever we want.
* After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin

## Extend/Inheritance

## Operators

## Others
less & stylus
