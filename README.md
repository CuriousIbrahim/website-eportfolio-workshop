# Workshop

## Setup

- Make a Github Account
- Install VSCode on to your computer
- Install `Live Server` extension on VS Code

## HTML Portion

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

### Header Section

```html
<header>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#bio">Bio</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#extracurriculars">Extracurriculars</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#hobbies-and-interests">Hobbies-and-Interests</a></li>
  </ul>
</header>
```

### Home Section

```
<div id="home">
    <div class="home-container">
      <div>Hey! This is</div>
      <h1>John Doe</h1>
    </div>
  </div>
```

### Bio Section

```html
<div id="bio" class="section">
  <h2>A Bit About Me</h2>
  <div class="bio-container">
    <img
      class="profile-image"
      src="./images/80d364e09d31fcba8af274926d4332ff.jpg"
      alt=""
    />
    <p class="bio-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper
      ut ligula sollicitudin placerat. In molestie condimentum lorem aliquam
      tempus. Etiam sit amet accumsan est, id lobortis turpis. Integer aliquet
      mi in consequat convallis. Aenean at risus in tortor dapibus tincidunt at
      in mauris. Pellentesque ut ipsum non metus pretium volutpat in a quam. Ut
      sit amet risus dui. Nulla sodales vulputate lacus at vestibulum. Proin sit
      amet massa ut magna maximus auctor nec id urna. Sed ut finibus lectus.
      Nullam in lorem at enim elementum auctor.
    </p>
  </div>
</div>
```

### Education Section

```html
<div id="education" class="section">
  <h2>What I'm Studying</h2>
  <div class="education-entry">
    <div class="first-row">
      <h3 class="school-name">School Name</h3>
      <h4 class="expected-grad-date">2077</h4>
    </div>
    <ul>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        perspiciatis obcaecati delectus itaque enim, sunt eos unde ex quos sit
        commodi, iste dignissimos autem consequuntur aut corporis quidem qui
        modi?
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed
        quas repellat facere impedit facilis nobis ducimus assumenda voluptatem,
        pariatur ab atque aperiam nam aliquam dolorum sint. Ipsum, deleniti
        cumque?
      </li>
    </ul>
  </div>
</div>
```

### Extracurriculars

```html
<div id="extracurriculars" class="section">
  <h2>My Extracurriculars</h2>
  <ul>
    <li>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, alias
      deleniti! Fugiat nostrum facere libero doloribus possimus iste culpa porro
      doloremque, eius iusto consequuntur enim ut expedita cumque a ipsum!
    </li>
    <li>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
      dolorem! In, necessitatibus. Eaque dolorem sequi veniam minus tenetur hic
      eligendi autem explicabo! Quas hic excepturi laboriosam voluptatem vero
      distinctio dignissimos.
    </li>
    <li>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos
      fuga provident quae at? Placeat ipsa illum ad et alias pariatur quidem
      quam, laudantium neque repellat facilis labore ipsum? Facilis?
    </li>
  </ul>
</div>
```

### Experience Section

```html
<div id="experience" class="section">
  <h2>My Experience</h2>
  <div class="experience-entry">
    <div class="row">
      <h3>Job Title</h3>
      <h4>Company</h4>
    </div>
    <ul>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum
        laudantium quisquam, praesentium nobis laboriosam, magnam, numquam
        distinctio quibusdam rerum odit aspernatur error modi. A, laboriosam.
        Aliquid tempore voluptatum ipsam.
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        nostrum error provident eum distinctio, iusto numquam ipsa, earum magni
        qui laudantium accusantium dolorum voluptates sequi pariatur aliquam
        voluptatibus obcaecati quaerat.
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt minus
        culpa sit, id quisquam exercitationem delectus sapiente nostrum nulla,
        mollitia enim fugit dolores nemo dicta maxime quod quam perferendis.
        Modi?
      </li>
    </ul>
  </div>
</div>
```

### Hobbies and Interests Section

```html
<div id="hobbies-and-interests" class="section">
  <h2>Hobbies and Interests</h2>
  <ul>
    <li>Thing 1</li>
    <li>Thing 2</li>
    <li>Thing 3</li>
    <li>Thing 4</li>
    <li>Thing 5</li>
    <li>Thing 6</li>
    <li>Thing 7</li>
    <li>Thing 8</li>
  </ul>
</div>
```
