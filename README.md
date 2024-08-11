
# Frntend with mongoose 
# Gren Nursery Frontend project

This project is created by mongoose and i am using zod for validation


## Code run

To deploy this project run

```bash
  npm run dev
```
## API Reference
 

```http
  POST /api/products
```
#### Update a products  

```http
 PUT /api/products/:id
```

#### Delete a products - Soft Delete (Admin Only)

```http
DELETE /api/products/:id
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |
 

 
#### get all Faciliproductsty  

```http
GEt /api/products/


```
 
 
 

```http
  POST /api/categories
```
#### Update a categories  
```http
 PUT /api/categories/:id
```

#### Delete a products - Soft Delete (Admin Only)

```http
DELETE /api/categories/:id
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |
 

 
#### get all categories  

```http
GEt /api/categories/


```
 

 

 
 
 

```http
  POST /api/orders
```
#### Update a orders  
```http
 PUT /api/orders/:id
```

#### Delete a products - Soft Delete (Admin Only)

```http
DELETE /api/orders/:id
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of orders to fetch |
 

 
#### get all categories  

```http
GEt /api/orders/


```
 

 

 
 