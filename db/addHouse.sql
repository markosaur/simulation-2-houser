insert into houses
(name, address, city, state, zip, image, mortgage, rent)
values
($(name), $(address), $(city), $(state), $(zip), $(image), $(mortgage), $(rent));

select * from houses;