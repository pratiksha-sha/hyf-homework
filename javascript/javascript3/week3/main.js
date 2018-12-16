console.log("!JAvaScript")

//step2
function getAjaxData(url, callback) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
            callback(null, true);
        }
    });
    request.addEventListener('error', function () {
        callback(null, true);
    });
    request.open("GET", url);
    request.send();
}

const usersURL = "https://jsonplaceholder.typicode.com/users";

getAjaxData(usersURL, function(data, err){
    if(err)
        console.log('Error loading users: ', err);
    else {
        let users = data;
        for (var i = 0; i < users.length; i++) {
            // load the todos for this user
            const todosURL = `https://jsonplaceholder.typicode.com/users/${users[i].id}/todos`;

            // why is this line needed below?
            let index = i;

            getAjaxData(todosURL, function(data, err){
                if(err)
                    console.log('Error loading todos for user ', i, ' :', err);
                else{
                    users[index].todos = data;
                }

                // console.log(index, i);

                // if this is the last user, console.log all data
                if(index == users.length - 1)
                    console.log(users);
            });
        }
    }
});
//step 3 part 1


function createProduct(name, price) {
    return {
        name: name,
        price: price,
    }
}

const product1 = createProduct("samsung", 5000);
const product2 =createProduct("LG", 6000);
const myshoppingCart =createShoppingCart([product1, product2]);

function createShoppingCart(products) {
    return {
        addProduct: function(product) {
            products.push(product);
        },   
            // Implement functionality here
        
        removeProduct: function(product) {
            // Implement functionality here
        },
        getTotal: function() {
            // Implement functionality here
        },
        renderProducts: function() {
            // Implement functionality here
        },
        getUser: function() {
            // Implement functionality here
        }
    }
}

const flatscreen = createProduct('flat-screen', 5000);
const shoppingCart = createShoppingCart([flatscreen]);

myshoppingCart.addProduct(createProduct("LG", 3999));
console.log(myshoppingCart.addProduct);

console.log(shoppingCart);



