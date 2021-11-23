INSERT into roles
(role)
values
    ("ROLE_USER"),
    ("ROLE_ADMIN"),
    ("ROLE_HOST");

INSERT INTO user
( username, name, surname, date_of_birth, city, email, password)
VALUES
    ("john", "Jan", "Kowalski", STR_TO_DATE("14-03-1999","%d-%m-%Y"), "Kraków", "jankowalski@gmail.com", "kowal-1999"),
    ("marie", "Maria", "Wiśniewska", STR_TO_DATE("27-09-1996","%d-%m-%Y"), "Warszawa", "mariawisniewska@outlook.com", "wisnia_nie_mirabela"),
    ("mati",  "Mateusz", "Nowak", STR_TO_DATE("19-01-2000","%d-%m-%Y"), "Katowice", "mateusznowak@gmail.com", "nowy-mati");


insert into user_roles
(id_user, id_role)
values
    (1,1),
    (2,1),
    (3,1),
    (4,1)


INSERT INTO activity
( name, category, sub_category )
VALUES
    ("Weight lifting", "Excercise", "Powerlifting"),
    ("Bowling", "Pub", "Relax"),
    ("Climbing", "Excercise", "Forehand excercise");




INSERT INTO host
( username, name, surname, password, email)
VALUES
    ('jacob', "Jakub", "Ziomek", "jj","jjj@jjj.com"),
    ('tom', "Tomasz", "Turek", "tt","ttt@ttt.com"),
    ('kamil', "Kamil", "Poniewierski", "kk","kkk@kkk.com");



INSERT INTO location
( address, location_name, category, number_of_people, id_host )
VALUES
    ("Kraków", "Bochenka 12","Excercise",  10, 1),
    ("Warszawa", "Niepodległości 24", "Excercise",  5, 2),
    ("Kraków", "Czarnwiejska 29", "Excercise", 1, 3);



INSERT INTO connection
( name,  time_start, time_end, additional_info,  id_activity, id_location )
VALUES
    ("Climbing in the city", STR_TO_DATE("01-12-2021","%d-%m-%Y"), STR_TO_DATE("11-12-2021","%d-%m-%Y"), "You should take your own shoes", 3, 3),
    ("Hard gym excercise", STR_TO_DATE("05-12-2021","%d-%m-%Y"), STR_TO_DATE("09-12-2021","%d-%m-%Y"), "That won't be easy", 1, 1);



INSERT INTO bounded_connection
(id_user, id_connection )
VALUES
    (1, 1),
    (2, 2);

