INSERT INTO user
	( idUser, name, surname, dateOfBirth, city, email, password )
VALUES
	(000001, "Jan", "Kowalski", STR_TO_DATE("14-03-1999","%d-%m-%Y"), "Kraków", "jankowalski@gmail.com", "kowal-1999"),
    (000002, "Maria", "Wiśniewska", STR_TO_DATE("27-09-1996","%d-%m-%Y"), "Warszawa", "mariawisniewska@outlook.com", "wisnia_nie_mirabela"),
    (000003,  "Mateusz", "Nowak", STR_TO_DATE("19-01-2000","%d-%m-%Y"), "Katowice", "mateusznowak@gmail.com", "nowy-mati");
SELECT * FROM user;

