# Picture-in-Picture-application-with-electronjs-desktop-
 A simple desktop application developed using electron for converting any screen/window into a picture in picture display so you can enjoy dual display without additional monitors

To initilize all the dependencies use:

> `npm i `

To Run the program use:

> `npm start`

To create the installer  use:

> `npm run build-installer`
the installer and the application wll be created in the dist folder.


The application initially looks like this
![image](https://user-images.githubusercontent.com/83254980/163521927-dc75c38c-4185-4513-b8b0-dd4656c4e10d.png)
the current screen is shared at start.

To change the screen move over to the button "select window" which opens a drop-down box containing all the screens avaliable on start of the program.

![image](https://user-images.githubusercontent.com/83254980/163522755-f6c91112-3eb5-4476-8f16-0966c6e18923.png)
on selecting on a screen it displays the screen


The application only reads the number of screens and their "source ids" on the start of the program so if new windows/screens are added after the start of the program then you must click  on the refresh buttton adjacent to the select window button.


the window of the application is rendered without frame(i.e without the traffic light) so custom button have been created and added at the top.
the button show after the window has been focused(i.e clicked) atleast after once blur(i.e clicked any where else other than the window)
![image](https://user-images.githubusercontent.com/83254980/163524030-58a74919-44ca-44d4-b043-345bb4155379.png)
![image](https://user-images.githubusercontent.com/83254980/163524320-8d5a58df-9576-4704-b2da-9f35dce8c9a9.png)

the button on the middle top is for minimizing and the top-right for quiting.




the window can be resized to any shape/size needed.
![image](https://user-images.githubusercontent.com/83254980/163524251-f0b0ac39-b7a0-4ea8-94e6-4fabbba2b5ad.png)







