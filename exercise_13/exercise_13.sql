-- the average rental amount by country
-- include the country name and avg amount
-- use AVG to average the amount
SELECT
    country.country, AVG(payment.amount)
FROM
    payment
    LEFT JOIN customer ON payment.customer_id = customer.customer_id
    LEFT JOIN address ON customer.address_id = address.address_id
    LEFT JOIN city ON address.city_id = city.city_id
    LEFT JOIN country ON city.country_id = country.country_id
GROUP BY
    country.country
ORDER BY AVG(payment.amount) DESC
LIMIT 10
