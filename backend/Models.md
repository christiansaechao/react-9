different routes for http methods related to tables | combination, grouped
Medical

users
--------------
id (primary key) | first_name | last_name | blood_type_id (secondary_key) | created_at | updated_at
                                                        1
BASE ENDPOINT: /api/users
    - GET /:id return a user record on the users table
    - GET / return all the users
    - POST / create a new user 
    - DELETE /:id delete a user 
    - PUT/PATCH /:id update a user

blood_type
--------------
id | type |
1  | A
2  | B
3  | O
4  | AB

illnesses (diabetic, hiv, std, chronic issues, illnesess)
--------------
id(uuid) | type (string) | length_of_illness ("chronic" | "acute") | description (text)


users_allergies
----------------
user_id | allergies_ids (jsonb)


allergies
----------------
id | user_id | name (string) | seasonal (boolean) | environmental (booelan) | food_related (boolean) | genetic (boolean)
1  |    1     | pollen allergy | true              | true                    | false                  | true
2  |    1     | pollen allergy v2 | true              | false                    | false                  | true