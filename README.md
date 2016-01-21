# DataSource Module for Madrid Transport Card

## Description:

Given a cardId in string format and a callback it will check on the CRTM server the expiration date for that card. It returns a string with the date in DD-MM-YYYY format. Using the callback you are able to perform operations with that date, like saving a new record to database, date comparison or validation, etc.