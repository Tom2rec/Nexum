INSERT INTO location
	( idLocation, location, locationName, category, subCategory, timeStart, timeEnd, numberOfPeople, Host_idHost )
VALUES
	(1000001, "Kraków", "Bochenka 12","Excercise", "Powerlifting", STR_TO_DATE("01-12-2021","%d-%m-%Y"), STR_TO_DATE("11-12-2021","%d-%m-%Y"), 10, 10001),
    (1000002, "Warszawa", "Niepodległości 24", "Excercise","Joga", STR_TO_DATE("05-12-2021","%d-%m-%Y"), STR_TO_DATE("09-12-2021","%d-%m-%Y"), 5, 10002),
    (1000003,  "Kraków", "Czarnwiejska 29", "Excercise","Climbing", STR_TO_DATE("13-12-2021","%d-%m-%Y"), STR_TO_DATE("29-12-2021","%d-%m-%Y"), 1, 10002);
SELECT * FROM location;

