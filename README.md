# Pokemon Trainer App

## The app is currently host on <https://poke-csc309-app.herokuapp.com/>

### __Preface__

We have previously created 3 accounts:

Username | Password
--------|--------
user1 | user1
user2 | user2
admin | admin

### __Login / Signup__

There are two user accounts and one admin account, you could use these accounts to login to this web-game. Also, you can always sign up to create a new account. Especially, the admin account will have a different function bar than the user account. Once login, you are able to see your balance, username, menu and profile. But, for the admin, you have a button called "VIEW ALL USER", which you could use to check all the user status.

### __User__

In the _menu_, you are able to go to different sites, such as _store_, your _profile_, and _search_ other player

* In _store_: you can see different kinds of Pokemon to buy, and you could move your mouse to the pokemon picture, the pokemon will be selected and highlighted. If you click the pokemon, you will go into a site with more information about this pokemon, and be able to buy it. Once you bought the pokemon, you can see your pokemon in your profile.  

* In _profile_: You can click “get to your collection” to go into the _profile_ site. Once in, you can see all your collections with its name, id, level as well as the button “detail”, which brings you into the pokemon page. More, you could also see your personal information, and edit it by clicking the “change” button. Once you click “change”, you will jump into another page containing an empty information list. Simply fill in the info you want to change, leave the rest blank, and click “submit”. Then, your personal info will be updated and ready to go.

* In _search_: you could search any existing user, and be able to check out their profile as well as see all their collections. If you click on the “detail” button of another user’s pokemon, you could help the other user to feed the pokemon and it won't cost your money. Definitely a great design, if your friends run out of money.  

### __Admin__

After logging in as an admin, you can click on the "_VIEW ALL USER_” button, and you will be directed to the manager page. At this page, you could change the data (all the information) of the user or delete the user. Also, you could even change a pokemon data, if you click the profile to view a distinct user.

* To modify user information, simply click on the “_Modify_” button. This will bring you to a new page where you can change all the personal information of this user and you can assign a title to it (Leave it blank for any unchanged information).

* To delete the user, just click on the “_Delete_” button.

* To modify any of the user’s pokemon, click on the “_Profile_” button. This will bring to the admin version of the user's profile. It allows you to again modify any of their pokemon’s attributes and delete them. Click on the “_Modify_” button will bring you to a new page where you can do all the modification. (Leave it blank for any unchanged information) You can remove a user's pokemon by clicking the “_delete_” button.

### __Pokemon Interact Page__

At the Profile page, you can select Pokemon to play with by clicking the DETAIL button on the Pokemon list. That will bring you to the interactive Pokemon page. You can earn money by playing with your Pokemon, you can level up your Pokemon to get even more money. Do remember to feed them when they are low in satiety and train them to obtain a massive amount of exp. As the level goes up, your Pokemon requires more experience and food to level up, however, they produce more money when the level is high. You can not play with your Pokemon when they are not lonely, or train them when they are hungry. Feeding your Pokemon will increase their satiety and when they are full you can heal them by keeping feeding, and the last, Pokemon gets a little experience when you feed them. Last but not least, some of the Pokemon would evolve when they reach a certain level. 

* You can only _play_ with your Pokemon when loneliness is greater than 1. It will reduce loneliness of your Pokemon by 5, and reduce satiety by 2. It will produce 5 * (Pokemon’s level + 1) credits.

* You can only _train_ your Pokemon when they have more than 5 satiety, they  will gain 50 experience and cost 5 credits. Also, your Pokemon’s loneliness will increase by 20.

* You can always _feed_ your Pokemon when you have money. It costs 1 credits to feed them and they will gain 1 unit of satiety. When the Pokemon is full, it will heal for 1 hp. If the Pokemon is healthy and full, every time you feed them increase their experience by 1.

* When Pokemon levels up, their max satiety, experience, hp will double, however, it will produce more money when you play with it.
Trainer should train one of their Pokemon first in order to make more money. Feed them, train them and play with them.
