# HTML5 - Review

## HTML5 is the latest evolution of the standard that defines HTML.
The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.

[Document summary](#Document summary)

[Document information](#Document information)

[Document structure](#Document structure)

## **Document summary**

**html:** Beginning and end of and HTML document.  
**head:** Contains information that specific the page(tags, meta data, links to scripts and styles).  
**title:** Title for the page.  
**body:** The body includes all the content that will be shown to users.  

```
<html>
  <head>
    <title>Document summary</title>
  </head>
  <body>

  </body>
</html>
```

## **Document information**

**base :** The base URL is useful for specifying all relative links in a document.  
**meta :** Meta data spells out additional information about the page () description, author, published date, keyword).  
**link :** Can be used to create relationships with external pages or documents, including style sheets.  
**style :** This element includes document style information, typically to css.  
**script  :** This element includes all scripting information, or links to external scripts.  

```
<html>
  <head>
    <meta charset="utf-8">
    <base href="URL" target="_blank">
    <title>Document information</title>
    <link rel="stylesheet" href="master.css">

    <script>
    let message = "Hello world";
    </script>
  </head>
  <body>

  </body>
</html>
```

## **Document structure**

**h1 to h6 :** 'All six leaves of Headings, with 1 being the most important on a page and 6 being the least. These elements are used to describe content sections on a page.'  
**span :** 'An inline section or block container, typically used for grouping styling elements'  
**p :** 'This foundational tag is used to organize paragraphs of text'.  
**br :** 'Crates a line break useful to for writing blocks of text that need to be on different lines.'  
**hr :** 'Create a horizontal rule, a sectional break in an HTML page. Typically used to denote a change in topic or section of a page.'

```
<div className="result">
  <h3> Lorem ipsum </h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
  Pellentesque volutpat congue velit. <br />
  Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
  <hr />
  Cras sed erat sed risus fringilla sagittis. <br />
  Maecenas <span>quis arcu turpis.</span> <br />
  In pellentesque eget augue nec lacinia. <br />
  Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
  </p>
</div>
```

<div className="result">
  <h3> Lorem ipsum </h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
  Pellentesque volutpat congue velit. <br />
  Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
  <hr />
  Cras sed erat sed risus fringilla sagittis. <br />
  Maecenas <span>quis arcu turpis.</span> <br />
  In pellentesque eget augue nec lacinia. <br />
  Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
  </p>
</div>

## **Text + formatting**

**strong :** 'Indicates STROG emphasis, displayed bold in most browsers'  
**b :** 'Another way to create bold text, it is more for drawing attention'  
**em :** 'The emphasis tags also are like they sound, emphasizing text'  
**i :** 'add italics to text, used to denote things like thoughts or names'  
**cite :** 'Tags used to cite or reference information, useful for quotes and statements in a document'  
**pre :** 'pre.formatted, monospace text laid out with whitespace'  
**del :** 'Helps denote a previously deleted section of text'  
**ins :** 'Represents a section of text thats been inserted into the document'  
**blockquote :** 'Reserved for long paragraphs of quotations often cited'  
**q :** 'These are used for shorter quotations'  
**abbr :** 'Abbreviation these help denote abbreviations, while also making the full form available'  
**address :** 'Displays the author's contact information'  
**dfn :** 'Definition used to create an inline definition in the body text'  
**code :** 'Code text displays code snippets'  
**sub :** 'Subscript text a helpful way to subscript text'  
**small :** 'Small size text Historically used to simply reduce text size, in HTML5 it also refers to information that may no longer be valid'  

```
<div className="result">
  <p>
  <strong>Aenean tempus finibus tristique.</strong>
  Duis lorem urna, <em>tincidunt et posuere nec</em>, <i>euismod pellentesque tortor</i>.
  <blockquote>
  Curabitur pulvinar, elit sit amet interdum sagittis, tellus nibh dictum turpis, a <b>rutrum tellus massa et dolor</b>.
  </blockquote>
  <cite>- Fusce aliquam tortor eget ex pharetra, ac malesuada lorem luctus.</cite>
  <br />
  <pre>Vivamus sit amet tempor nisl, sit amet dapibus nulla.</pre>
  <q>Morbi fermentum eleifend odio</q>,<address>ut pulvinar massa interdum in.</address>
  <ins>Etiam vel augue cursus</ins>, <small>porta ipsum sit amet, tristique erat.</small>
  <code>Ut vitae molestie arcu.</code>
  <del>In hac habitasse platea dictumst.</del>
  </p>
</div>
```

* Links + formatting

**href:** 'anchor text for hyperlink'  
**mailto:** 'A link used to pull up an outgoing message to a specific email addresses'  
**tel:** 'A link to make phone numbers clickable, especially useful for mobiles users'  
**name:** 'An anchor thats useful for bringing users to specific document elements'  
#name: 'An anchor link that brings users specifically to a div element'  

```
<div className="result">

  <a href="example">hyperlink </a> {html5.href} <br/>
  <a href="mailto:">mailto</a> {html5.mailto} <br/>
  <a href="tel://###-###">tel</a> {html5.tel} <br/>
  <a href="name">name</a> {html5.name} <br/>
  <a href="#structure">Document structure</a> {html5.tagname} <br/>

</div>
```

* Images + formatting
* Lists + formatting
* Forms
* Tables
* Objects & iFrames
* HTML5 New Tags

#### Semantic elements:
A semantic element clearly describes its meaning to both the browser and the developer.  
Examples of non-semantic elements: 'div' and 'span' - Tells nothing about its content.  

**header:** 'Defines the header block for a document (or individual section)'  
**footer:** 'Identifies the footer block for the document (or and individual section)'  
**article:** 'Identifies and article inside a document'  
**section:** 'Specifies a section block in the document'  
**aside:** 'Specifies a section block in the document'  
**details:** 'Describes additional fact or information that the user can view or hide'  
**figcaption:** 'The 'figure' element caption that helps describes the figure'  
**figure:** 'An independent content block featuring diagrams, photos, illustrations or more'  
**main:** 'Describes the main content of a document'  
**mark:** 'Displays a portion of highlighted text within the page content'  
**nav:** 'Navigation links for the user in a document'  
**summary:** 'Contains a visible heading for a 'details' element'  
**time:** 'Identifies the time and date'  

#### HTML5 Input Types
**number:** 'defines a numeric input field. You can also set restrictions on what numbers are accepted',
**date:** 'is used for input fields that should contain a date',
**time:** 'allows the user to select a time (no time zone)',
**range:** 'defines a control for entering a number whose exact value is not important. Default range is 0 to 100. You can set restrictions on what numbers are accepted with the min, max, and step attributes:',
**color:** 'is used for input fields that should contain a color. Depending on browser support, a color picker can show up in the input field.',
**email:** 'the e-mail address can be automatically validated when submitted. Some smartphones recognize the email type, and add ".com" to the keyboard to match email input',
**month:** 'allows the user to select a month and year',
**search:** 's used for search fields (a search field behaves like a regular text field)',
**tel:** 'is used for input fields that should contain a telephone number. Note: The tel type is currently only supported in Safari 8.',
**url:** 'the url field can be automatically validated when submitted. Some smartphones recognize the url type, and adds ".com" to the keyboard to match url input',
**week:** 'allows the user to select a week and year',  

#### graphic elements
**svg:** 'is a container for SVG graphics.',
```
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```  
**canvas:** 'is used to draw graphics, on the fly, via JavaScript. A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.',
```
<canvas id="myCanvas" width="200" height="100"></canvas>
```
**diferences:** 'SVG is a language for describing 2D graphics in XML & Canvas draws 2D graphics, on the fly (with a JavaScript)',

#### multimedia elements
**audio:**  specifies a standard way to embed audio in a web page.
**controls:** attribute adds audio controls, like play, pause, and volume.
**source:** element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.
**note:**
  - The text between the 'audio' tags will only be displayed in browsers that do not support the <audio> element.
  - In HTML5, there are 3 supported audio formats: MP3, WAV, and OGG.

  ```
  <audio controls>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
  ```

**video:** specifies a standard way to embed a video in a web page.
**controls:** attribute adds video controls, like play, pause, and volume.
The source element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.
**note:**
  - The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.

#### HTML5 API (Application Programming Interfaces)
**Geolocation:** 'is used to get the geographical position of a user. Since this can compromise privacy, the position is not available unless the user approves it.'.

The **getCurrentPosition()** method is used to return the user's position.
```
function getLocation(){
  navigator.geolocation.getCurrentPosition(resultCallBack, errorCallBack, options);
}

//The position object specifies the current geographic location of the device
function resultCallBack(position){
  /*
  position: {
    latitude:
    longitude:
    altitude:
    accuracy:
    altitudeAccuracy:
    heading:
    speed:
  }
  */
}

function errorCallBack(error){
  /*
  error:{
    message:
    code: {
      0: 'unknown error',
      1: 'permission denied',
      2: 'position unavailable',
      3: 'timeout',
    }
  }
  */
}

```

**Drag and Drop:**  
DnD: 'Drag and Drop (DnD) is powerful User Interface concept which makes it easy to copy, reorder and deletion of items with the help of mouse clicks.',

* First of all: To make an element draggable, set the draggable attribute to true:
```
<img draggable="true">
```

* Then, specify what should happen when the element is dragged (onDragStart).
The dataTransfer.setData() method sets the data type and the value of the dragged data
```
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
```

* The ondragover event specifies where the dragged data can be dropped.
By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element.
```
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
```

**Local Storage:**  

The Session Storage is designed for scenarios where the user is carrying out a single transaction, but could be carrying out multiple transactions in different windows at the same time.

HTML web storage provides two objects for storing data on the client:

* window.localStorage - stores data with no expiration date
* window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

To check for web storage supported
```
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}
```

**Web Workers:**  
Web Workers allow for long-running scripts that are not interrupted by scripts that respond to clicks or other user interactions.
When a script is executing inside a Web Worker it cannot access the web page's window object (window.document), which means that Web Workers don't have direct access to the web page and the DOM API.

Web Workers run in an isolated thread. As a result, the code that they execute needs to be contained in a separate file.
```
const worker = new Worker("workerfile.js");
```

How do we communicate with a worker? By calling the postMessage() method.
```
worker.postMessage("Hello World");
```

send a message back to the main thread with a postMessage() function.
```
self.addEventListener(
  "message",
  function(e) {
    self.postMessage(e.data);
  },
  false
);
```

Finally, we will also need a message event listener in the main file to receive the data and act upon it. Something like the code block below.
```
worker.addEventListener('message', function(e) {
      console.log('Message from Worker: ' + e.data);
    }
```


**WebSockets**
Is a bidirectional communication technology for web applications which operates over a single socket and is exposed via a JavaScript interface in HTML 5 compliant browsers.  

Once you get a Web Socket connection with the web server, you can send data from browser to server by calling a send() method, and receive data from server to browser by an onmessage event handler.

```
var Socket = new WebSocket(url, [protocal] );
```
The url, specifies the URL to which to connect. The second attribute, protocol is optional, and if present, specifies a sub-protocol that the server must support for the connection to be successful.

* Events
open	   Socket.onopen:  	  This event occurs when socket connection is established.
message	 Socket.onmessage:	This event occurs when client receives data from server.
error	   Socket.onerror:  	This event occurs when there is any error in communication.
close	   Socket.onclose:  	This event occurs when connection is closed.

* Methods
Socket.send()
The send(data) method transmits data using the connection.

Socket.close()
The close() method would be used to terminate any existing connection.

#### others

**dialog:** 'A dialog box or window'  
**menuitem:** 'The specific menu item that a user can raise from a popup'  
**meter:** 'Describes the scalar measurement within a known array'  
**progress:** 'Displays the progress of a task, usually used for progress bar'  
**rp:** 'Displays text within browsers that do not support ruby annotations'  
**rt:** 'Displays East Asian typography character detail'  
**ruby:** 'Describes a Ruby annotation for East Asian typography'  
**bdi:** 'Helps you format part of the text in a different direction from other text'  
**wbr:** 'A line-break within the content'  

* Collective Characters Objects

### Extra symbols
* <code> &#34, &quot </code> Quotation Marks - "
* <code>&#38, &amp </code> Ampersand - &
* <code>&#60, &lt </code> Less than sign - <
* <code>&#62, &gt </code> Greater than sign - >
* <code>&#160, &nbsp </code> Non-breaking space
* <code>&#169, &copy </code> Copyright simbol - ©
* <code>&#64, &Uuml </code> @ Symbol - @
* <code>&#149, &ouml </code> Small bullet - •
* <code>&#153, &ucirc </code> Trademark symbol - ™
