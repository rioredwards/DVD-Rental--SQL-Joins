-- the top 10 cities with the most total rental payment amount
-- include the city name and sum
-- use SUM to sum up the amounts
SELECT
    city.city, SUM(payment.amount)
FROM
    payment
    LEFT JOIN customer ON payment.customer_id = customer.customer_id
    LEFT JOIN address ON customer.address_id = address.address_id
    LEFT JOIN city ON address.city_id = city.city_id
GROUP BY
    city.city
ORDER BY SUM(payment.amount) DESC
LIMIT 10

