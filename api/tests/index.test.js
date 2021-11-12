const request = require("supertest");
const app  = "http://localhost:3002/api"

//The below tests are ensuring our POST requests are resolving and returning the correct status codes.
//
//

describe("Testing the creation of data using POST methods", () => {
    test("using the POST method for creating a User", async () => {
        const data = {
            "email": "test3@email.com",
            "password": "testing3"
        } 
        const response = await request(app).post("/users").send(data);
        expect(response.statusCode).toBe(201);
        await request(app).delete(`/users/${response.body.id}`);
    });
    test("using the POST method for creating a Category", async () => {
        const data = {
            "name": "test category",
        } 
        const response = await request(app).post("/categories").send(data);
        expect(response.statusCode).toBe(201);
        await request(app).delete(`/categories/${response.body.id}`);
    });
    test("using the POST method for creating an Item", async () => {
        const categoryData = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const data = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } 
        const response = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(data);
        expect(response.statusCode).toBe(201);
        await request(app).delete(`/items/${response.body.id}`);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
    });
    test("using the POST method for creating a CartItem", async () => {
        const categoryData = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const itemData = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } 
        const itemResponse = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(itemData);

        const userData = {
            "email": "test3@email.com",
            "password": "testing3"
        } 
        const userResponse = await request(app).post("/users").send(userData);

        const data = {
            "UserId": `${userResponse.body.id}`,
            "ItemId": `${itemResponse.body.id}`
        }
        const response = await request(app).post("/cart/updatecart").send(data);

        expect(response.statusCode).toBe(201);
        await request(app).delete(`/items/${itemResponse.body.id}`);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
        await request(app).delete(`/users/${userResponse.body.id}`);
        await request(app).delete(`/cart/${response.body.id}`);
    });
});


//The below tests are ensuring our GET requests are resolving and returning the correct status codes.
//
//


describe("Testing the retrieving of data using GET methods", () => {
    test("using the GET method to retrieve a User", async () => {
        const data = {
            "email": "test3@email.com",
            "password": "testing3"
        } 
        const userResponse = await request(app).post("/users").send(data);
        const response = await request(app).get(`/users/${userResponse.body.email}`)
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/users/${userResponse.body.id}`);
    });
    test("using the GET method to retrieve a Category", async () => {
        const data = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(data);
        const response = await request(app).get(`/categories/${categoryResponse.body.id}`)
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
    });
    test("using the GET method to retrieve an Item", async () => {
        const categoryData = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const data = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } 
        const itemResponse = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(data);
        const response = await request(app).get(`/items/${itemResponse.body.id}`);
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/items/${itemResponse.body.id}`);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
    });
    test("using the GET method to retrieve a CartItem", async () => {
        const categoryData = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const itemData = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } 
        const itemResponse = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(itemData);

        const userData = {
            "email": "test3@email.com",
            "password": "testing3"
        } 
        const userResponse = await request(app).post("/users").send(userData);

        const data = {
            "UserId": `${userResponse.body.id}`,
            "ItemId": `${itemResponse.body.id}`
        }
        const cartItemResponse = await request(app).post("/cart/updatecart").send(data);
        const response = await request(app).get(`/cart/${cartItemResponse.body.id}`);

        expect(response.statusCode).toBe(200);
        await request(app).delete(`/items/${itemResponse.body.id}`);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
        await request(app).delete(`/users/${userResponse.body.id}`);
        await request(app).delete(`/cart/${cartItemResponse.body.id}`);
    });
});


//The below tests are ensuring our PUT requests are resolving and returning the correct status codes.
//
//


describe("Testing the updating of data using PUT methods", () => {
    test("using the PUT method to update a User", async () => {
        const data = {
            "email": "test3@email.com",
            "password": "testing3"
        };
        const userResponse = await request(app).post("/users").send(data);
        const updateData = {
            "email": "test3updated@email.com",
            "password": "testing3updated"
        };
        const response = await request(app).put(`/users/${userResponse.body.id}`).send(updateData);
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/users/${userResponse.body.id}`);
    });
    test("using the PUT method to update a Category", async () => {
        const data = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(data);
        const updateData = {
            "name": "updated category",
        };
        const response = await request(app).put(`/categories/${categoryResponse.body.id}`).send(updateData);
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
    });
    test("using the PUT method to update an Item", async () => {
        const categoryData = {
            "name": "test category",
        };
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const data = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } ;
        const itemResponse = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(data);
        const updateData = {
            "name": "updated test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 450,
            "description": "Updated Test Item"
        };
        const response = await request(app).put(`/items/${itemResponse.body.id}`).send(updateData);
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/items/${itemResponse.body.id}`);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
    });
});


//The below tests are ensuring our DELETE requests are resolving and returning the correct status codes.
//
//

describe("Testing the deletion of data using DELETE methods", () => {
    test("using the DELETE method for deleting a User", async () => {
        const data = {
            "email": "test3@email.com",
            "password": "testing3"
        } 
        const userResponse = await request(app).post("/users").send(data);
        const response = await request(app).delete(`/users/${userResponse.body.id}`);
        expect(response.statusCode).toBe(200);
    });
    test("using the DELETE method for deleting a Category", async () => {
        const data = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(data);
        const response = await request(app).delete(`/categories/${categoryResponse.body.id}`);
        expect(response.statusCode).toBe(200);
    });
    test("using the DELETE method for deleting an Item", async () => {
        const categoryData = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const data = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } 
        const itemResponse = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(data);
        const response = await request(app).delete(`/items/${itemResponse.body.id}`);
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
    });
    test("using the DELETE method for deleting a CartItem", async () => {
        const categoryData = {
            "name": "test category",
        } 
        const categoryResponse = await request(app).post("/categories").send(categoryData);

        const itemData = {
            "name": "test item",
            "image": "https://synapse.it/wp-content/uploads/2020/12/test.png",
            "price": 300,
            "description": "Test Item"
        } 
        const itemResponse = await request(app).post(`/categories/${categoryResponse.body.id}/items`).send(itemData);

        const userData = {
            "email": "test3@email.com",
            "password": "testing3"
        } 
        const userResponse = await request(app).post("/users").send(userData);

        const data = {
            "UserId": `${userResponse.body.id}`,
            "ItemId": `${itemResponse.body.id}`
        }
        const cartItemResponse = await request(app).post("/cart/updatecart").send(data);
        const response = await request(app).delete(`/cart/${cartItemResponse.body.id}`);
        expect(response.statusCode).toBe(200);
        await request(app).delete(`/items/${itemResponse.body.id}`);
        await request(app).delete(`/categories/${categoryResponse.body.id}`);
        await request(app).delete(`/users/${userResponse.body.id}`);
    });
});