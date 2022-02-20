## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Setup this project

```
- database is mysql
- go to src/app.module change username and password and database properties in TypeOrmModule.forRoot
- run project using npm run start:dev (to automatically create product in your mysql localhost)
- run the script to populate data from root ./sql there are two sql one for product and one again for product promotion table
- run npm run start:dev from terminal to run the application
- use case 1 url => http://localhost:3000/product/checkout?skus=A0002&skus=A0004
- use case 2 url => http://localhost:3000/product/checkout?skus=A0001&skus=A0001&skus=A0001
- use case 3 url => http://localhost:3000/product/checkout?skus=A0003&skus=A0003&skus=A0003
```

## Use case 1 Json example

```json
{
"freeItemProduct": [
{
"sku": "A0004",
"name": "Surgical Face Mask",
"price": "30000.00",
"inventoryQty": 20
}
],
"discount": [
"30000.00"
],
"product": [
{
"sku": "A0002",
"name": "Thermometer",
"price": "539900.00",
"inventoryQty": 5,
"promotions": [
{
"sku": "A0002",
"name": "Thermometer Sale",
"freeItemSKU": "A0004",
"discountItem": null,
"discount": null,
"discountCondition": null,
"freeItemProduct": {
"sku": "A0004",
"name": "Surgical Face Mask",
"price": "30000.00",
"inventoryQty": 20
}
}
]
},
{
"sku": "A0004",
"name": "Surgical Face Mask",
"price": "30000.00",
"inventoryQty": 20,
"promotions": []
}
]
}
```

## Use case 2 Json example

```json
{
"freeItemProduct": [],
"discount": [
"499900.00"
],
"product": [
{
"sku": "A0001",
"name": "Oximeter",
"price": "499900.00",
"inventoryQty": 10,
"promotions": [
{
"sku": "A0001",
"name": "Oximeter sale",
"freeItemSKU": null,
"discountItem": 1,
"discount": null,
"discountCondition": null,
"freeItemProduct": null
}
]
},
{
"sku": "A0001",
"name": "Oximeter",
"price": "499900.00",
"inventoryQty": 10,
"promotions": [
{
"sku": "A0001",
"name": "Oximeter sale",
"freeItemSKU": null,
"discountItem": 1,
"discount": null,
"discountCondition": null,
"freeItemProduct": null
}
]
},
{
"sku": "A0001",
"name": "Oximeter",
"price": "499900.00",
"inventoryQty": 10,
"promotions": [
{
"sku": "A0001",
"name": "Oximeter sale",
"freeItemSKU": null,
"discountItem": 1,
"discount": null,
"discountCondition": null,
"freeItemProduct": null
}
]
}
]
}
```


## use case 3 

```json
{
"freeItemProduct": [],
"discount": [
10500
],
"product": [
{
"sku": "A0003",
"name": "First Aid Box",
"price": "105000.00",
"inventoryQty": 10,
"promotions": [
{
"sku": "A0003",
"name": "First Aid Box sale",
"freeItemSKU": null,
"discountItem": null,
"discount": 10,
"discountCondition": "gte=3;onlyfirst",
"freeItemProduct": null
}
]
},
{
"sku": "A0003",
"name": "First Aid Box",
"price": "105000.00",
"inventoryQty": 10,
"promotions": [
{
"sku": "A0003",
"name": "First Aid Box sale",
"freeItemSKU": null,
"discountItem": null,
"discount": 10,
"discountCondition": "gte=3;onlyfirst",
"freeItemProduct": null
}
]
},
{
"sku": "A0003",
"name": "First Aid Box",
"price": "105000.00",
"inventoryQty": 10,
"promotions": [
{
"sku": "A0003",
"name": "First Aid Box sale",
"freeItemSKU": null,
"discountItem": null,
"discount": 10,
"discountCondition": "gte=3;onlyfirst",
"freeItemProduct": null
}
]
}
]
}
```




