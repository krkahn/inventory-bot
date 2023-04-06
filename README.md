# inventory-bot
**prototyping an inventory bot through discord**

this probably already exists. i'm mostly doing this to learn and have some fun.

what i'm picturing is a simple bot that would exist in slack or discord (testing in this case on discord) that can be issued a:

> /info HOSTNAME

command and return a handful of useful information about a host within your network based off an inventory. 

i want to implement this because there are a number of times working where i would be paged about a host and would have absolutely no idea what that host was, where it was located, etc, without having to login to it or scour some ill-maintained confluence file. i want the results to be simple.

as far as managing the inventory I'm using sqlite and jamming made up hosts from a json file into the DB. I'll formalize a section later.

i want to be able to import a file containing a list of hosts with inventory information and have it stored in the DB. the bot can query the DB and retrieve information about the host. 

assumptions here are that you're actually maintaining an inventory of items which at most places is...well c'mon.

build notes:

couldn't run mongoimport on m2 mac (doesn't matter since we're using sqlite now)
issues with embed vs embedbuilder for discord.js v14

![inventory-bot](https://user-images.githubusercontent.com/6900861/230469103-91953515-36d5-40d3-8fe3-27e98c42c56d.gif)

to-do:
should work without FQDN but might be an issue if there are hostname collisions
nice up the output
consider a layout or map in the distant future
