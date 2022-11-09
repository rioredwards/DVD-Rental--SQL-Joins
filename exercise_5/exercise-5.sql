-- find all film titles that an actor with the last_name Davis appears in
-- Similar to exercise 3 but with actor, film_actor, film
select 
	title
from
	film
   	left join film_actor
    	on film.film_id = film_actor.film_id
    left join actor
    	on film_actor.actor_id = actor.actor_id
where
	actor.last_name = 'Davis'
