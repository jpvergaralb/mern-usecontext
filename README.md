## MERN + contextAPI

#### Dependencies 

> Backend

- `express` for routing
- `express-fileupload` to upload files
- `mongoose` to connect to MongoDB and create models
- `env` to store environment variables
- `fs-extra` to handle files (copy, delete, etc)
- `http-errors` to create custom errors 
- `morgan` to log requests
- `cloudinary` to upload images to cloud

#### Cosas que aprendi en el camino
1. El objeto `fileUpload` de `express-fileupload` nos entrega un nuev metodo dentro de las requests. 
Tal como existe `req.params` y `req.query`, existe `req.files` que nos entrega un objeto con los archivos que se subieron. De esa forma podemos acceder a los archivos que se subieron y trabajar con ellos.
2. El objetivo de `fs-extra` es le mismo que de `fs` pero funciona con promesas.