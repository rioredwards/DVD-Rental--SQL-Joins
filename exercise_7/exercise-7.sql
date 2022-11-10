-- find all film titles rented out by customers who live in the city of Dundee
-- Similar to exercise 6 but you need a few more joins to get the city name

select 
	title
from
	film
   	left join inventory
    	on film.film_id = inventory.film_id
    left join rental
    	on inventory.inventory_id = rental.inventory_id
    left join customer
    	on rental.customer_id = customer.customer_id
    left join address
    	on customer.address_id = address.address_id
    left join city
    	on address.city_id = city.city_id
where
	city.city = 'Dundee'
