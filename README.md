# inventory-bot
prototyping an inventory bot through discord

this probably already exists. i'm mostly doing this to learn and have some fun.

what i'm picturing is a simple bot that would exist in slack or discord (testing in this case on discord) that can be issued a simple

> info HOSTNAME

command and return a handful of useful information about a host within your network based off an inventory. 

i want to implement this because there are a number of times working where i would be paged about a host and would have absolutely no idea what that host was, where it was located, etc, without having to login to it or scour some ill-maintained confluence file. i want the results to be simple.

as far as managing the inventory I'm considering something like MongoDB because i'm a mongoloid and don't feel like figuring a lot of DB related items out. at least not for this go around. it seems lightweight and simple for this use case.

i want to be able to import a file containing a list of hosts with inventory information and have it stored in the DB. the bot can query the DB and retrieve information about the host. 

assumptions here are that you're actually maintaining an inventory of items which at most places is...well c'mon.

notes:

could'nt run mongoimport on m2 mac
