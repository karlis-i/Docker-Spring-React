
# Notes taken during development

- 2025-05-30

Original setup
1. Create Vite project`npm create vite@latest frontend -- --template react`
2. cd, npm install
3. `npm install tailwindcss @tailwindcss/vite`
4. Follow the rest of [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)
5. Edit *.js, *.jsx and *.css files
6. `npm run dev`
7. [http://localhost:5173/](http://localhost:5173/)


Schmedtmanns saka, ka Vite nāk ar starter template React projektiem.  
Tāpēc to arī izmantosim, nevis create-react-app

- 2025-05-31

Original setup (again)
1. create Tailwind CSS layout with tailwind CDN template
2. create Vite + React app by following https://react.dev/learn/build-a-react-app-from-scratch#vite  
    (matches Vite instructions: https://vite.dev/guide/#scaffolding-your-first-vite-project )
3. setup the project with `npm install`
4. install and add Tailwind by following https://tailwindcss.com/docs/installation/using-vite
5. replace default app source files with my own HTML, JSX and CSS
6. build, run test
7. great success!
8. Today asked Le Chat for help. Shitty help, much arguing and correcting the bot
9. Added Dockerfile and compose.yaml supplied by Le Chat
10. Made changes to package.json and vite.config.js according to Laravel (https://laravel.com/docs/12.x/vite#configuring-hmr-in-sail-on-wsl2) and VeA Web PD2
11. Build and run Docker Compose
12. Great success!


https://www.innokrea.com/dockerizing-the-frontend-do-it-right-with-react-js-vite/ ?
https://www.docker.com/blog/how-to-dockerize-react-app/ - old, uses create-react-app



https://docs.docker.com/reference/samples/react/ - DOCKER SAMPLES
https://docs.docker.com/reference/samples/java/ - ffs, te viss vajadzīgais

https://docs.docker.com/guides/reactjs/containerize/ - te var paskatīties, ko uzlabot frontendā

spring doķi-
- https://spring.io/guides/gs/spring-boot-docker
- https://spring.io/guides/gs/serving-web-content
- https://spring.io/guides/gs/spring-boot


Data: 
The Long Dark
Hinterland Studio Inc.
2017
https://www.thelongdark.com/
WELCOME TO THE QUIET APOCALYPSE™
Bright lights flare across the night sky. The wind rages outside the thin walls of your wooden cabin. A wolf howls in the distance. You look at the meagre supplies in your pack, and wish for the days before the power mysteriously went out. How much longer will you survive?
The Long Dark is a thoughtful, exploration-survival experience that challenges solo players to think for themselves as they explore an expansive frozen wilderness in the aftermath of a geomagnetic disaster. There are no zombies — only you, the cold, and all the threats Mother Nature can muster.
https://www.thelongdark.com/img/about-back-desktop-comp.jpg
https://www.thelongdark.com/img/logo-tld-header.svg


