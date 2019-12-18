create database burgers_db;

use burgers_db;

create table burgers (
	id integer auto_increment not null primary key,
    burger_name varchar(300),
    devoured bool default 0,
    date timestamp
)