INSERT INTO connection
	( idConnection, name, date, additionalInfo, Location_idLocation, Location_Host_idHost, Activity_idActivity )
VALUES
	(100001, "Climbing in the city", STR_TO_DATE("14-12-2021","%d-%m-%Y"), "You should take your own shoes", 1000003, 10002, 103),
    (100002, "Hard gym excercise", STR_TO_DATE("04-12-2021","%d-%m-%Y"), "That won't be easy", 1000001, 10001, 101);
SELECT * FROM connection;