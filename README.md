# Mini-blog
How to run
* on `server`
    * please copy `.env.example` to `.env`
    * run `docker-compose up` will build mysql and backend
    * go to `/docs` to see api documents
    * Example Apis
        * `/v1/user` [POST]
            * generate user by given username and return password
* on `client` folder
    * please copy `.env.example` to `.env`
    * run `yarn` to install package
    * run `yarn start`
    * use your `username` and `password` which created via api 
    to login , so you can create `blog`
    * you can update, delete only your own blog

