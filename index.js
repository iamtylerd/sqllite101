'use strict';

const { Database } = require('sqlite3').verbose()
const db = new Database('db/Chinook_Sqlite.sqlite')
const Table = require('cli-table');
let table = new Table({head: ["Sales Agents"]});


// let query = `SELECT Customer.FirstName || ' ' || Customer.LastName AS 'Name', Customer.CustomerId, Customer.Country
// 						 FROM Customer
// 						 WHERE Customer.Country != 'USA'`;
let query = `SELECT FirstName || ' ' || LastName AS 'Name'
						 FROM Employee
						 WHERE Employee.Title = 'Sales Support Agent'`;

 db.serialize(() => {
 	// db.all(query, (err, customers) => {
 	// 	customers.forEach(({CustomerId, Name, Country}) => {
 	// 		console.log(`${CustomerId}: ${Name} (${Country})`)})
 	// 	})

 	//FOR EACH LOOP
 	// db.each(query, (err, {InvoiceId, Name, InvoiceDate, BillingCountry}) => {
	 // 	table.push([InvoiceId, Name, InvoiceDate, BillingCountry]);
 	// 	}, () => console.log(table.toString()))

 	db.each(query, (err, {Name}) => {
 		table.push([Name])
 	}, () => console.log(table.toString()))

 })
 db.close()
