# TeamMaker @ hack.summit()


TeamMaker is a platform in which you can find all types people ready to help you achieve your personal projects.
If you have an idea and are in need of that special engineer, you can count on TeamMaker to bring it to life.


We want a quick and easy way to meet new people interested in our personal projects. Be it a garage band, a drone racing team or even to organize an engagement. So we built TeamMaker A place to showcase your projects and get found by the community.


Yes, you ask. Isn't this like Kickstarter or something? Well we had 48 hours and a lot of fun doing this, besides.. the purpose is not to raise funds but raise the level of teamwork that can be accomplished online.


We will expand this on the future to use geolocation for local results and add personal pages for our members.


Give it a try at [http://169.53.154.219](http://169.53.154.219)

If the last link isn't working you can still get a taste at our [alternate server](http://team.port.ninja) at Heroku.


This project is a collaboration of El Ninja Team.
A product of spending all weekend clustered together in a small apartment with computing power.
Much fun was had making this app.

- Josue Ibarra
- Luis Palomares
- Isaura Lara
- Valeria Garibay
- Ricardo Cervantes
- Carlos Capella

```
I'm looking for ___________
    a ninja developer
    a marketing whiz
    a business partner
    an awesome project

    **TeamMaker**
```



## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.


## Dependencies

```
sudo apt-get install nodejs ruby
sudo gem install sass
sudo npm install bower grunt-cli -g
```

## Prepare application build dependencies

`git clone https://github.com/ibarrajo/hacksummit.git`
`cd ~/hacksummit/ && npm install && bower install`

## To run application

`cd ~/hacksummit/ && grunt build && node dist/server/index.js`


## To reload application

`export NODE_ENV=production;`
`export PORT=80;`
`cd ~/hacksummit/ && git fetch --all && git reset --hard origin/master && grunt build && node dist/server/index.js;`
