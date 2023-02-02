-- find the title and count of the top 10 most rented films
-- use COUNT to count each row
-- GROUP BY the film_id
-- ORDER in descending order
-- LIMIT 10

SELECT 
    film.title, COUNT(rental.inventory_id)
FROM
    film
    LEFT JOIN inventory ON film.film_id = inventory.film_id
    LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
GROUP BY
    film.film_id
ORDER BY COUNT(rental.inventory_id) DESC
LIMIT 10
