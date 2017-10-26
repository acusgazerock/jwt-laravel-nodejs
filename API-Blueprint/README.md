# A. Laravel
## 1. endpoint yang menerima parameter `username`, `password`, `name` dan `role` dan menyimpan registry baru bila username belum ada.

### Register User [POST]
Create new User.

+ Parameters
        + name 250FF (string, required)
        + username 250FF (string, required)
        + password 250FF (string, required)
        + role 250FF (string, required)
+ Request  (form-data)
+ Response 200 (application/json)
    + Body

            {
                "status":true,
                "message":"User created successfully",
                "data":{
                    "name":"acus",
                    "username":"acus",
                    "role":"admin",
                    "updated_at":"2017-10-25 21:49:06",
                    "created_at":"2017-10-25 21:49:06"
                }
            }

## 2. endpoint yang menerima parameter `username` dan `password` dan mengembalikan JWT dengan isi private claims `name`, `username`, `role` dan `timestamp` saat endpoint di-hit dari registry yang ada.
### Login User [POST]
Login User.

+ Parameters
        + username 250FF (string, required)
        + password 250FF (string, required)
+ Request  (form-data)
+ Response 200 (application/json)
    + Body

            {
                "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUwODk2OTcwMiwiZXhwIjoxNTA4OTczMzAyLCJuYmYiOjE1MDg5Njk3MDIsImp0aSI6IkhIWFBOdUhBRnprdHoyVjQifQ.5O9MUC27MHQuoRh8uMyEqzDh97rn-d91UHewmL07XCM",
                "data":{
                    "name":"acus",
                    "username":"acus",
                    "role":"admin",
                    "updated_at":"2017-10-25 21:49:06",
                    "created_at":"2017-10-25 21:49:06"
                }
            }

## 3. endpoint yang menerima JWT dan menampilkan isi dari private claims bila JWT valid.

### Retrieve Active User [GET]
Retrieve active User with the given JWT.
+ Headers
    
    token : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUwODk2OTcwMiwiZXhwIjoxNTA4OTczMzAyLCJuYmYiOjE1MDg5Njk3MDIsImp0aSI6IkhIWFBOdUhBRnprdHoyVjQifQ.5O9MUC27MHQuoRh8uMyEqzDh97rn-d91UHewmL07XCM
    
    
+ Response 200 (application/json)
    + Body

                {
                    "id": 1,
                    "name": "acus",
                    "role": "admin",
                    "username": "acus",
                    "created_at": "2017-10-25T14:49:06.000Z",
                    "updated_at": "2017-10-25T14:49:06.000Z"
                }
            
            
# B. Lainnya (NodeJS/Python):
## 1. endpoint yang menerima JWT dan menampilkan isi dari private claims bila JWT valid.

### Retrieve Active User [GET]
Retrieve active User with the given JWT.
+ Headers
    
    token : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUwODk2OTcwMiwiZXhwIjoxNTA4OTczMzAyLCJuYmYiOjE1MDg5Njk3MDIsImp0aSI6IkhIWFBOdUhBRnprdHoyVjQifQ.5O9MUC27MHQuoRh8uMyEqzDh97rn-d91UHewmL07XCM
    
    
+ Response 200 (application/json)
    + Body

                {
                    "id": 1,
                    "name": "acus",
                    "role": "admin",
                    "username": "acus",
                    "created_at": "2017-10-25T14:49:06.000Z",
                    "updated_at": "2017-10-25T14:49:06.000Z"
                }