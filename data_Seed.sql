/*
-- Query: SELECT * FROM bamazon_db.products
LIMIT 0, 1000

-- Date: 2018-08-02 14:08
*/
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1000,'Dog Collar - black nylon size med','Pets',17.99,100,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1001,'Dog Collar - black nylon size large','Pets',19.99,100,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1002,'Lazer pointer for cats','Pets',20.00,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1003,'Dog Food - Kibble - 20 lbs','Pets',40.00,30,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1004,'Cat Food - canned - 8oz','Pets',3.99,500,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1005,'BALL! Blue 3inch','Pets',2.75,250,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1006,'Sweater - Poodle - small','Pets',9.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1007,'A Payer For Owen Meany - Irvine','Books',9.99,15,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1008,'The Stand - King','Books',9.99,20,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1009,'A Gentleman in Moscos - some guy','Books',19.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1010,'Dark Matter - simmons','Books',8.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1011,'Lord of the Rings Trilogy - Tolkein','Books',32.33,5,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1012,'Ender\'s Game - Card','Books',7.55,5,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1013,'Ready Player One - Stephen','Books',8.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1014,'Saporo','Beer',3.99,144,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1015,'Coors','Beer',1.99,144,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1016,'Guiness','Beer',4.54,36,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1017,'Miller Light','Beer',2.25,72,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1018,'Ballast Point IPA','Beer',3.99,94,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1019,'Kronensburg 1884','Beer',4.40,24,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1020,'Iphone Mount - magnetic','Auto',17.99,3,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1021,'USB Cigerette Lighter','Auto',9.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1022,'Window Sun Screen - Kermit -  small','Auto',9.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1023,'Window Sun Screen - Kermit -  large','Auto',11.99,10,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1024,'Andy from Toy Story','Toys',13.99,30,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1025,'Woody from Toy Story','Toys',13.99,30,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1026,'Buzz Lightyear from Toy Story','Toys',16.99,30,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1027,'Squirt Gun','Toys',2.99,20,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1028,'YoYo','Toys',0.99,100,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`dept_name`,`price`,`qty`,`prod_sales`) VALUES (1029,'Soccer Ball - size 4','Toys',14.99,15,NULL);

INSERT INTO `departments` (`dept_name`,`ovrhd`) VALUES ('Pets',509.17);
INSERT INTO `departments` (`dept_name`,`ovrhd`) VALUES ('Books',200.00);
INSERT INTO `departments` (`dept_name`,`ovrhd`) VALUES ('Beer',609.99);
INSERT INTO `departments` (`dept_name`,`ovrhd`) VALUES ('Auto',100.00);
INSERT INTO `departments` (`dept_name`,`ovrhd`) VALUES ('Toys',303.99);