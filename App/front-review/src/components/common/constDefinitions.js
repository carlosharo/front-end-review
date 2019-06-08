const frontEnd = {
  'HTML5': {
    structure:{
      h1h6 : 'All six leaves of Headings, with 1 being the most important on a page and 6 being the least. These elements are used to describe content sections on a page.',
      span : 'An inline section or block container, typically used for grouping styling elements',
      p : 'This foundational tag is used to organize paragraphs of text',
      br : 'Crates a line break useful to for writing blocks of text that need to be on different lines.',
      hr : 'Create a horizontal rule, a sectional break in an HTML page. Typically used to denote a change in topic or section of a page.',
    },

    text: {
      strong : 'Indicates STROG emphasis, displayed bold in most browsers',
      b: 'Another way to create bold text, it is more for drawing attention',
      em: 'The emphasis tags also are like they sound, emphasizing text',
      i : 'add italics to text, used to denote things like thoughts or names',
      cite : 'Tags used to cite or reference information, useful for quotes and statements in a document',
      pre : 'pre.formatted, monospace text laid out with whitespace',
      del : 'Helps denote a previously deleted section of text',
      ins : 'Represents a section of text thats been inserted into the document',
      blockquote : 'Reserved for long paragraphs of quotations often cited',
      q : 'These are used for shorter quotations',
      abbr : 'Abbreviation these help denote abbreviations, while also making the full form available',
      address : 'Displays the author´s contact information',
      dfn : 'Definition used to create an inline definition in the body text',
      code : 'Code text displays code snippets',
      sub : 'Subscript text a helpful way to subscript text',
      small : 'Small size text Historically used to simply reduce text size, in HTML5 it also refers to information that may no longer be valid',
      bdo : 'The bi-directional override tag will identify which should text should be read opposite from the preceding text',
    },

    links:{
      href: 'anchor text for hyperlink',
      mailto: 'A link used to pull up an outgoing message to a specific email addresses',
      tel: 'A link to make phone numbers clickable, especially useful for mobiles users',
      name: 'An anchor that´s useful for bringing users to specific document elements',
      tagname: 'An anchor link that brings users specifically to a div element',
    },

    images: {
      img: 'An image tag to include and display image files',
      map: 'Helps you tell users that is an interactive image with clickable areas',
      area: 'Specify the area of image map',
      src: "Exactly like it sounds. The URL of file of the image to display",
      alt: 'Alternative text that helps explain the image content to both search engines and users',
      height: 'Specify image height in pixels or percentages',
      width: 'Specify width in pixels or percentage',
      align: 'The alignment of the image (relative to other text elements on the page)',
      border: 'Explains the border thickness',
      vspace: 'Denote spacing on top or the bottom of image',
      hspace: 'Denote spacing on top or the bottom of image',
    },

    semantic: {
      header: 'represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.',
      footer: 'Identifies the footer block for the document (or and individual section)',
      main: 'Describes the main content of a document',
      article: 'Identifies and article inside a document',
      aside: 'Specifies a section block in the document',
      section: 'Specifies a section block in the document',
      details: 'Describes additional fact or information that the user can view or hide',
      dialog: 'A dialog box or window',
      figcaption: 'The <figure> element caption that helps describes the figure',
      figure: 'An independent content block featuring diagrams, photos, illustrations or more',
      mark: 'Displays a portion of highlighted text within the page content',
      nav: 'Navigation links for the user in a document',
      menuitem: 'The specific menu item that a user can raise from a popup',
      meter: 'Describes the scalar measurement within a known array',
      progress: 'Displays the progress of a task, usually used for progress bar',
      rp: 'Displays text within browsers that do not support ruby annotations',
      rt: 'Displays East Asian typography character detail',
      ruby: 'Describes a Ruby annotation for East Asian typography',
      summary: 'Contains a visible heading for a <details> element',
      bdi: 'Helps you format part of the text in a different direction from other text',
      time: 'Identifies the time and date',
      wbr: 'A line-break within the content',
    },

    input : {
      number: 'defines a numeric input field. You can also set restrictions on what numbers are accepted',
      date: 'is used for input fields that should contain a date',
      time: 'allows the user to select a time (no time zone)',
      range: 'defines a control for entering a number whose exact value is not important. Default range is 0 to 100. You can set restrictions on what numbers are accepted with the min, max, and step attributes:',
      color: 'is used for input fields that should contain a color. Depending on browser support, a color picker can show up in the input field.',
      email: 'the e-mail address can be automatically validated when submitted. Some smartphones recognize the email type, and add ".com" to the keyboard to match email input',
      month: 'allows the user to select a month and year',
      search: 's used for search fields (a search field behaves like a regular text field)',
      tel: 'is used for input fields that should contain a telephone number. Note: The tel type is currently only supported in Safari 8.',
      url: 'the url field can be automatically validated when submitted. Some smartphones recognize the url type, and adds ".com" to the keyboard to match url input',
      week: 'allows the user to select a week and year',
    },

    graphics: {
      svg: 'is a container for SVG graphics.',
      canvas: 'is used to draw graphics, on the fly, via JavaScript.',
      diferences: 'SVG is a language for describing 2D graphics in XML & Canvas draws 2D graphics, on the fly (with a JavaScript)',
    },

    multimedia: {
      audio: 'specifies a standard way to embed audio in a web page,',
      video: 'specifies a standard way to embed a video in a web page.',
    },
    geolocation: {
        geolocation: 'is used to get the geographical position of a user. Since this can compromise privacy, the position is not available unless the user approves it.',
      },
    dragndrop: {
        DnD: 'Drag and Drop (DnD) is powerful User Interface concept which makes it easy to copy, reorder and deletion of items with the help of mouse clicks.',
        events: 'There are number of events which are fired during various stages of the drag and drop operation.',
        dragstart: 'Fires when the user starts dragging of the object.',
        dragenter: 'Fired when the mouse is first moved over the target element while a drag is occurring.',
        dragover: 'This event is fired as the mouse is moved over an element when a drag is occurring',
        dragleave: 'This event is fired when the mouse leaves an element while a drag is occurring. ',
        drag: 'Fires every time the mouse is moved while the object is being dragged.',
        drop: 'The drop event is fired on the element where the drop was occurred at the end of the drag operation.',
        dragend: 'Fires when the user releases the mouse button while dragging an object.',
      },
    webStorage: {
        localStorage: 'stores data with no expiration date',
        remove: 'localStorage.removeItem(key) where key is the key of the value you want to remove',
        clear: 'If you want to clear all settings, you need to call localStorage.clear() method',
        sessionStorage: 'stores data for one session (data is lost when the browser tab is closed)',
      },
    webWorkers: {
        webWorkers: 'Web Workers are a way of running web scripts in background threads without blocking the main thread.',
        Worker: 'Represents a running worker thread, allowing you to pass messages to the running worker code.',
        Buttons: 'fetch users with web workers will display the data without stoping the counter, meanwhile fetch users directly will stop the counter for a moment'
      },
  },
  'ReactJs': {

  },
  'JS': {

  },
  'CSS3': {

  },
};

export default frontEnd;
