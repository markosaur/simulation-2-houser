create table houses
(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
);

insert into houses
(name, address, city, state, zip)
values
('cool house', '1234 cool lane', 'Lehi', 'UT', 84054),
('green house', '2345 plant blvd', 'SLC', 'UT', 84002),
('Tree house', '3457 E Sunnyside', 'Portland', 'OR', 84089),
('Blue house', '771 Ocean Front Lane', 'Monterrey', 'CA', 95421),
('Empire House', '7545 N City Lane', 'New York City', 'NY', 56874);

select * from houses

insert into houses
(name, address, city, state, zip)
values
('IHOP', '1111 Pancake Way', 'St George', 'UT', 80032);

select * from houses


DELETE from houses
where id = 8;

select * from houses;

-- ALTER TABLE

alter table houses
add column image text;

select * from houses;

alter table houses
add column mortgage integer;

select * from houses;

alter table houses
add column rent integer;

select * from houses;