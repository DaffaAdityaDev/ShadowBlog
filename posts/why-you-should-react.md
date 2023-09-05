---
title: 'Why you should React'
date: 'October 4, 2022'
excerpt: 'React is one of the most popular front-end frameworks out there'
cover_image: '/images/why-you-should-use-react/hero-codeeditor.jpg'
tech: "Javascript"
---

## react why tho?

React is one of the most popular front-end frameworks out there. It's used by companies like Facebook, Netflix, and Instagram. It's also used by many smaller companies and individuals. It's a great framework to learn and use. with large communities and lots of documentation, it's easy to get started with React.

## what is react?

React is a JavaScript library for building user interfaces. It's a front-end framework that's used to build single-page applications. 

## reasons to use react

- React is a component-based framework. This means that you can build your application out of smaller components. These components can be reused throughout your application. This makes it easier to build and maintain your application. 
- React is also declarative. This means that you can describe what you want to see on the screen. React will then take care of updating the DOM to match what you described. React is also fast. It uses a virtual DOM to keep track of changes. This makes it faster than other frameworks. 

## Let's try make something with react

We're going to make a simple counter app. First thing you need install the following link: 

[Node.js](https://nodejs.org/en/)
[npm](https://www.npmjs.com/get-npm) 

### why we need node.js and npm?

Node.js is a JavaScript runtime environment. It's used to run JavaScript code outside of a browser. npm is a package manager for JavaScript. It's used to install and manage packages. 



<iframe src="https://codesandbox.io/embed/cold-firefly-iydsj6?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cold-firefly-iydsj6"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C231%2C28%2C1%29&t=vscode&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520fs%2520from%2520%27fs%27%253B%250Aimport%2520%257B%2520redirect%2520%257D%2520from%2520%27next%252Fdist%252Fserver%252Fapi-utils%27%253B%250Aimport%2520path%2520from%2520%27path%27%253B%250Aimport%2520matter%2520from%2520%27gray-matter%27%250Aimport%2520%257Bmarked%257D%2520from%2520%27marked%27%250Aimport%2520%257B%2520splitTech%252C%2520typeColor%2520%257D%2520from%2520%27..%252F..%252Futils%27%2520%250A%250Aimport%2520style%2520from%2520%27..%252F..%252Fstyles%252Fblog.module.scss%27%250A%250A%250A%250Amarked.setOptions%28%257B%250A%2520%2520sanitize%253A%2520false%252C%250A%257D%29%250A%250Afunction%2520Postpage%28%257B%2520frontmatter%253A%2520%257Btitle%252C%2520date%252C%2520cover_image%252C%2520tech%252C%2520read_time%257D%252C%2520slug%252C%2520content%2520%257D%29%2520%257B%250A%250A%2520%2520%252F%252F%2520console.log%28typeColor%28%2522Javascript%2522%29%29%250A%250A%2520%2520const%2520markdown%2520%253D%2520%2560Just%2520a%2520link%253A%2520https%253A%252F%252Freactjs.com.%2560%250A%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27text-white%27%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27max-w-%255B900px%255D%2520mx-auto%2520px-10%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27relative%2520%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27absolute%2520bottom-0%2520z-20%2520p-10%2520w-full%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520className%253D%27text-%255B25px%255D%2520font-bold%27%253E%257Btitle%257D%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27w-full%2520h-%255B0.1rem%255D%2520bg-gray-500%27%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%27%27%253EPosted%2520on%2520%257Bdate%257D%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27flex%2520gap-3%2520justify-end%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520splitTech%28tech%29.map%28%28tech%252C%2520index%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520key%253D%257Bindex%257D%2520className%253D%257BtypeColor%28tech%29%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%27text-white%27%253E%257Btech%257D%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%257D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27relative%2520mt-20%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27bg-gradient-to-t%2520from-black%2520from-1%2525%2520to-transparent%2520to-25%2525%2520w-full%2520h-full%2520absolute%2520z-10%27%2520%252F%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257Bcover_image%257D%2520alt%253D%2522%2522%2520className%253D%2522rounded-xl%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257Bstyle.container%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520dangerouslySetInnerHTML%253D%257B%257B%2520__html%253A%2520marked%28content%29%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%250A%257D%2520%250A%250A%2520%250Aexport%2520async%2520function%2520getStaticPaths%28%29%2520%257B%250A%2520%2520const%2520files%2520%253D%2520fs.readdirSync%28path.join%28%27posts%27%29%29%250A%250A%2520%2520const%2520paths%2520%253D%2520files.map%28%28filename%29%2520%253D%253E%2520%28%257B%250A%2520%2520%2520%2520params%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520slug%253A%2520filename.replace%28%27.md%27%252C%2520%27%27%29%252C%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%257D%29%29%250A%250A%2520%2520return%2520%257B%2520%2520%250A%2520%2520%2520%2520paths%252C%250A%2520%2520%2520%2520fallback%253A%2520false%252C%250A%250A%2520%2520%257D%250A%257D%250A%250Aexport%2520async%2520function%2520getStaticProps%28%257Bparams%253A%2520%257Bslug%257D%257D%29%2520%257B%250A%2520"
  style="width: 100%; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>