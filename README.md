
# Laravel (jwt-laravel)
## Prerequisites

- laravel 5.4
- mysql 5.xx

## Installing & Configuration
- copy env file
    
    
    php -r "copy('.env.example','.env');"
- setup database
    
    DB_CONNECTION=mysql
    
    DB_HOST=127.0.0.1
    
    DB_PORT=3306
    
    DB_DATABASE=jwt_laravel
    
    DB_USERNAME=root
    
    DB_PASSWORD=
    
- migration database:

    
            php artisan migrate

# NodeJs (jwt-nodejs)
## Prerequisites

- node.js 6.9.x
- npm 3.x

## Installing & Configuration
- Install dependencies

        npm install
- Rename config.example.js to config.js
- Run the server

        npm start
        
TODO: check signature token in NodeJs                