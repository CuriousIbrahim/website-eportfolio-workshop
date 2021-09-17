# Workshop

## Setup

- Make a Github Account
- Install VSCode on to your computer
- Install `Live Server` extension on VS Code

## Sections

### Base

Create a `index.html` file inside your project folder.

Paste the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body></body>
</html>
```

Let's understand it first.

HTML works by defining tags that open and close. So for example the tag `html` opens on the 2nd line and closes on the last line. This is he structure of html. You can observe this with the `head` tag and the `body` tag.

Let's explore the `body` tag first. The `body` tag defines everything you will be seeing in your page.

If you past the following inside your `body` tag:

```html
<h1>Hello, World!</h1>
```

You will observe that your page in big letters is saying "Hello, World!"

Delete that line that you just placed.

Now let's look at the `head` tag. The `head` tag defines everything that is not visible on the page but is still important; can also be descibed as metadata (data that gives information about the page). Let's look at the `title` tag. You will see the text inside is the same as in your chrome tab. Let's change it to `{your name} Portfolio`. And you will see it updates.

### Navigation 

Let's create our navigation - or navigation bar. Whatever sounds better. Paste the following inside the `header` tag:

```html
<nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#bio">Bio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#extracurriculars">Extracurriculars</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#hobbies-and-interests">Hobbies-and-Interests</a></li>
      </ul>
    </nav>
```

Let's understand it

The `nav` tag defines out navigation. Not much to say here. It's pretty self explanitory.

Let's look at the `ul` tag. ul stands unordered list, so this allows us to make a bullet point list. Inside the `ul` tag is several `li` tags. li stands for list item, it's the actual bullet point. Inside of each `li` tag is an `a` tag. An `tag` allows us to make a link which can either take us to another page or a section on the page (more on this later).

Now you can guess that it does look pretty look ugly, eh? That's because we haven't added any styling. Let's add that shall we?

Let's create a file calleed `styles.css`.

And then in the `html` file, inside the `head` tag, put the following in

```html
<link rel="stylesheet" href="styles.css" />
```

This basically links our `css` file into our `html` file. Now let's add some content to our `css` file to further understand what it does.

Paste the following

```css
body {
  margin: 0;
  padding: 0;
}
```

The above just removes any margin or padding that is applied by the browser by default (and yes each browser has it's own styling if none is present).

And now to style the actually navigation bar. Paste the following:

```css
nav {
  background-color: black;
  padding-top: 15px;
  padding-bottom: 28px;
}

nav > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  color: white;
}

nav > ul > li {
  font-size: 1.5rem;
  padding: 5px;
}

nav > ul > li > a {
  color: white;
  text-decoration: none;
}

```css
nav {
  background-color: black;
  padding-top: 15px;
  padding-bottom: 28px;
}
```

This captures every nav element `<nav></nav>` and applies the following to it.

- `background-color: black;` and it changes the background color to `black`
- `padding-top: 15px;` adds 15px padding the top
- `padding-bottom: 28px;` and adds 28px padding to the bottom

Pretty easy eh?

Let's look at another one:

```css
nav > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  color: white;
}
```

This selects all the `ul` elements inside a `nav` element

```html
<nav>
  <ul></ul>
</nav>
```

Most of the things here are pretty self explantory; what I will go over is 

```css
  display: flex;
```

First of all what is this `display` property, ignore `flex` for now. `display` simply changes the display behaviour of the selected elements. There are several `display` types, such as the one being used `flex` but also `block`, `inline-block`, `block`, and `grid` and many more. To learn more about it, [click here](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

Now what is `flex`. Flex isn't the most easiest to explain, but all you need to know is `flex` allows you to follow [Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) in which tl;dr: it let's you do things like what we just did here (space our navigation link apart) be much more easier. I use it a lot at work.

### Home Section

The Home section.

Let's have you paste the following:

```html
<div id="home">
  <div class="i-am-name">
    <div class="subtitle">Hey! This is</div>
    <h1 class="main">John Doe</h1>
  </div>

  <div class="i-am-a">
    <div class="subtitle">I'm a</div>
    <h2 class="main" id="role">Explorer</h2>
  </div>

  <div class="resume-btn">VIEW RESUME</div>
</div>
```

Let's have you change it your name on tag `h1` class `main`, and let's have you set the role that you identify for yourself in tag `h2` id `role`. 

TODO: Resume

And to understand it.

We are defining a `div` element with the `id` of `home`. Important thing to mention is an `id` is unique. So you should not define any other element with `id` of `home`. It's not that it won't work, it's just not good practice and completely diminishes the purpose of the `id`.

Inside that `div` we defne another `div` with class `i-am-name` and inside that div we define another `div` with class `subtitle` and a header 1 `h1` tag with class `main`. Now to explain what a `class` is. Think of a `class` as a way to label elements and unlike an `id`, you can (and in fact should) use it several times when the situation makes sense. We will use the `class` when we start writing the `css` of this portion.

Beyond that, rest of the html should be self explantory.

And so now we begin the `css` portion. 

For the sake of organization, at the end of your `styles.css` file, make a comment with the words home inside it.

```css
/* home */
```

The comment will not be read when it styling the page, it really is there just for us; to indicate where the `home` part is. Go do the same for `header` and the other sections as we work on them.

Let's paste in the following `css`

```css
#home {
  background-color: #7b7b7b;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.subtitle {
  color: #cdcccc;
  font-size: 1.5rem;
}

.main {
  color: #f9f9f9;
  font-size: 5rem;
  padding: 0;
  margin: 0;
}

.i-am-name {
  text-align: center;
}

.i-am-a {
  text-align: center;
}

.resume-btn {
  color: white;
  padding: 30px 20px;
  background-color: #4ebfff;
  border-radius: 10px;
  font-weight: bold;
  font-family: Palanquin Dark;
  text-align: center;
}
```

Let's quickly look at

```css
#home {
  background-color: #7b7b7b;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
```

I want to look at how it's being selected - `#home`. It is selecting the `id` called `home`.

Looking at 

```css
.subtitle {
  color: #cdcccc;
  font-size: 1.5rem;
}
```

We can see it selecting the class `subtitle`

So if you want to select an id in css, you do `#<id>` and for a class `.<class>`. This is why classes are important for css. It helps you select them and style them.


### Bio Section

Now your own biography! Let's work on it shall we.

```html
<div id="bio" class="section">
  <div class="section-header-wrapper">
    <h2 class="section-header">A Bit About Me</h2>
  </div>

  <div class="bio-container">
    <img
      class="profile-image"
      src=""
    />
    <p class="bio-paragraph text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      ullamcorper ut ligula sollicitudin placerat. In molestie condimentum
      lorem aliquam tempus. Etiam sit amet accumsan est, id lobortis turpis.
      Integer aliquet mi in consequat convallis. Aenean at risus in tortor
      dapibus tincidunt at in mauris. Pellentesque ut ipsum non metus
      pretium volutpat in a quam. Ut sit amet risus dui. Nulla sodales
      vulputate lacus at vestibulum. Proin sit amet massa ut magna maximus
      auctor nec id urna. Sed ut finibus lectus. Nullam in lorem at enim
      elementum auctor.
    </p>
  </div>
</div>
```

Place an image file inside your folder and let's have you link it in the `img` tag for the `src` property.

Let's I have one and I have it named `profile-pic.png` and placed in the folder. Then I would link it's path like `"./profile-pic.png"`, so;

```html
<img
  class="profile-image"
  src="./profile-pic.png"
/>
```

Let's add it's css now

```css
h2 {
  text-align: center;
  font-size: 40px;
}

#bio > .bio-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.profile-image {
  height: 300px;
}
```

### Education Section

```html
<div id="education" class="section">
  <div class="section-header-wrapper">
    <h2 class="section-header">What I'm Studying</h2>
  </div>

  <div class="education-entry">
    <div class="first-row">
      <h3 class="school-name">School Name</h3>
      <h4 class="expected-grad-date">Year</h4>
    </div>
    <ul>
      <li class="text">
        Point 1
      </li>
      <li class="text">
        Point 2
      </li>
    </ul>
  </div>
</div>
```

Change your school name to your school and your expected graduation date to your graduation date. 

Let's also have you add some points in the tag `li` class `text`. Feel free to add more by just copy and pasting more

```html
<li class="text">
</li>
```

Let's add the our lovely and stylish css now.

```css
.education-entry > .first-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.school-name {
  font-size: 40px;
  margin-right: 20px;
}

.expected-grad-date {
  font-size: 30px;
}
```

### Experience

Did you know when you reach the age of 18, you must have 18 years of experience. Yea, neither did I, welcome to the work economy. Let's get your experience on to your site.

Let's paste the following html

```html
<div id="experience" class="section">
  <div class="section-header-wrapper">
    <h2 class="section-header">My Experience</h2>
  </div>

  <div class="experience-entry">
    <div class="row">
      <h3 class="job-title">Job Title</h3>
      <h4 class="company">Company</h4>
    </div>
    <ul>
      <li class="text">
        Point 1
      </li>
      <li class="text">
        Point 2
      </li>
      <li class="text">
        Point 3
      </li>
    </ul>
  </div>
</div>
```

You know what to do. 

Let's get our experience looking good for the recruiters that want us to have 10 years of experience for a technology that has only existed for 5 years.

```css
.experience-entry > .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.job-title {
  font-size: 40px;
}

.company {
  font-size: 30px;
}
```

### Extracurriculars

Extracurriculars! The second best thing to having experience!


Alright html and css, you know the rest.

```html
<div id="extracurriculars" class="section">
  <div class="section-header-wrapper">
    <h2 class="section-header">My Extracurriculars</h2>
  </div>

  <ul>
    <li class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, alias
      deleniti! Fugiat nostrum facere libero doloribus possimus iste culpa
      porro doloremque, eius iusto consequuntur enim ut expedita cumque a
      ipsum!
    </li>
    <li class="text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
      dolorem! In, necessitatibus. Eaque dolorem sequi veniam minus tenetur
      hic eligendi autem explicabo! Quas hic excepturi laboriosam voluptatem
      vero distinctio dignissimos.
    </li>
    <li class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
      dignissimos fuga provident quae at? Placeat ipsa illum ad et alias
      pariatur quidem quam, laudantium neque repellat facilis labore ipsum?
      Facilis?
    </li>
  </ul>
</div>
```
### Hobbies and Interests Section

Do you have hobbies! You should! They are the 3rd best to extracurricualrs and experience. 

Alright html and css

```html
<div id="hobbies-and-interests" class="section">
  <div class="section-header-wrapper">
    <h2 class="section-header">Hobbies and Interests</h2>
  </div>

  <ul>
    <li class="text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
      voluptatem aspernatur a quis molestias. Explicabo temporibus quis
      culpa iusto repellendus ut placeat magnam maxime hic nostrum, quae
      optio fugiat labore?
    </li>
    <li class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
      nulla architecto impedit blanditiis libero! Voluptas illum dolore
      labore fugiat, quia at, facere accusamus quas, quo recusandae sint!
      Quas, illo!
    </li>
    <li class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      perspiciatis reprehenderit illo omnis deleniti amet ipsam iste
      corporis hic, reiciendis unde quia quod repellat blanditiis ipsum
      facilis nihil, sit dolorum?
    </li>
    <li class="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
      fugiat, animi corporis ea itaque rerum deleniti. Nobis amet veniam
      eius numquam temporibus inventore quae. Impedit deserunt reiciendis
      deleniti animi ducimus.
    </li>
  </ul>
</div>
```

```css
#hobbies-and-interests > ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
```

### Footer

And finally the footer

```html
<footer>
      <div class="move-to-top-container">
        <label>BACK TO TOP</label>
      </div>

      <div class="social-medias">
        <a href="#" class="social-media-link">
          <img class="social-media-icon" src="./images/facebook.png" alt="" />
        </a>
        <a href="#" class="social-media-link">
          <img class="social-media-icon" src="./images/linkedin.png" alt="" />
        </a>
        <a href="#" class="social-media-link">
          <img class="social-media-icon" src="./images/email.png" alt="" />
        </a>
      </div>

      <div>@2021 STEM Achiever & YorkU Robotics Society</div>
    </footer>
```

```css
footer {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  height: 150px;
}

.social-media-link {
  margin-right: 20px;
}

.social-media-icon {
  width: 25px;
}

.up-arrow {
  width: 30px;
  color: white;
```