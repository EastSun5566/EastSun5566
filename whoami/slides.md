---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
---

### Hi, I am Michael 東陽

> Backend Developer [@Fandora](https://fandorashop.com/tw/)

---

### Experience

#### [Fandora](https://fandorashop.com/tw/), Backend Developer, Aug 2019 ~ Present

- E-commerce Admin GraphQL API Service
  - Built v8 with Node.js/TypeScript.
  - Designed schema & Implemented it with serverless architecture.
  - Built scalable NoSQL DB service with read replication & Implemented customized ODM.
  - Opened source [data sync library](https://github.com/EastSun5566/ddb-2-es), [logger library](lambda-lite-logger).
  - Integrated CI/CD flow with AWS CodePipeline.
- Built scheduled task service to update large timeliness data & sync it with external services.
- Migrated over 500,000+ product records from RDBMS to NoSQL
- Built CLI tools to automate internal work flow.

---

#### [PicSee](https://picsee.co/), Frontend Developer, Dec 2018 ~ Jul 2019

- [Shorten URL SSR Web App](https://picsee.io/)

  - Built v3 with Nuxt.js/Vuex & Bootstrap-Vue.
  - Designed & developed reusable components & established style guidelines to improve project quality.
  - Opened source [image filter library](https://github.com/EastSun5566/cc-gram), [visual effect library](https://github.com/EastSun5566/let-it-go).

- Compatible old browser like IE9 & enhanced performance like lazy loading.
- Built data visualization for the admin panel with ECharts & Integrated third-party FB/Google OAuth.
- Built several web app projects from scratch.

---

- [Dapp Pocket](https://www.dapppocket.io/), Web Developer, Sep 2018 ~ Apr 2019
- [ScanTrader](https://scantrader.com/), Frontend Developer Intern, Oct 2018 ~ Dec 2018
- [Hour Masters](https://www.hourmasters.com/), Frontend Developer Intern, Apr 2018 ~ Oct 2018

---

# Welcome to Slidev

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
  class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
<carbon-logo-github />
</a>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/navigation.html)

### Keyboard Shortcuts

|                                     |                             |
| ----------------------------------- | --------------------------- |
| <kbd>right</kbd> / <kbd>space</kbd> | next animation or slide     |
| <kbd>left</kbd>                     | previous animation or slide |
| <kbd>up</kbd>                       | previous slide              |
| <kbd>down</kbd>                     | next slide                  |

<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>

<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>

---

layout: image-right
image: <https://source.unsplash.com/collection/94734566/1920x1080>

---

# Code

Use code snippets and get the highlighting directly!

```ts {all|2|1-6|9|all}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly use. And add your custom components are also super easy.

```md
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/custom/#components) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

---

# LaTeX

LaTeX is supported out-of-box powered by [KaTeX](https://katex.org/).

<br>

Inline $\sqrt{3x-1}+(1+x)^2$

Block

$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

<br>

[Learn more](https://sli.dev/guide/syntax#latex)

---

## class: px-20

# Themes

Slidev comes with powerful theming support. Themes are able to provide styles, layouts, components, or even configurations for tools. Switching between themes by just **one edit** in your frontmatter:

<div grid="~ cols-2 gap-2" m="-t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://sli.dev/themes/default.png">

<img border="rounded" src="https://sli.dev/themes/seriph.png">

</div>

Read more about [How to use a theme](https://sli.dev/themes/use.html) and
check out the [Awesome Themes Gallery](https://sli.dev/themes/gallery.html).

---

layout: center
class: text-center

---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
