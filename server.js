var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Hotels');
mobileApp.tables.add('Items');
mobileApp.tables.add('Users');
mobileApp.tables.add('Categories');
mobileApp.tables.add('Item_Categories');
mobileApp.tables.add('Customers');
mobileApp.tables.add('Plans');
mobileApp.tables.add('Orders');
mobileApp.tables.add('OrderDetails');
mobileApp.tables.add('Billing');
mobileApp.tables.add('Offers');
mobileApp.tables.add('Taxes');
mobileApp.tables.add('Tables');
mobileApp.tables.add('Roles');
app.use(mobileApp);
app.listen(process.env.PORT || 3000);
