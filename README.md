# "The Bigger Picture" is a SPA Website with a frontend and backend side both made by me!
### Built With
* ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
      
# Website has the following pages: 

## Home 
```
Welcoming page available for both Users and Guests and with interactive
      image sliding deck in which the most wanted NFT's are displayed.
```     
![React1](https://user-images.githubusercontent.com/98179343/218256881-7726e83a-7c26-404c-b8fd-acc8886e2cd8.PNG)
![React2](https://user-images.githubusercontent.com/98179343/218256883-557871f7-bc7d-4887-ba39-bf259de4c878.PNG)


## Catalog 
```
The main part of the website which both Users and Guest can access
      and see the complete list of every NFT uploaded to the website.
```

![React3](https://user-images.githubusercontent.com/98179343/218256888-2f0029d0-0245-4273-b2ff-5036932c798e.PNG)

## Details
```
Shows the most important info about selected NFT. Guests can see
how much likes and owns it has as well as the price and the name of the person
who uploaded it which leads to his personal Profile page, Users can see this
info too and gain the power to Own and Like. Liking NFT adds it to your "Liked List" 
and owning NFT adds it to your "Owned List" but also gives you the ability to pick
it as your profile picture to add a unique self expression customization.
```
![React4](https://user-images.githubusercontent.com/98179343/218256900-1efcc165-5d28-49c7-93df-69241abd6b70.PNG)

## Profile
```
Every User his own personal profile page, here Guest can see the User's name, 
description and picture as well as how much NFT's they own and like, as a User you can 
change your picture, description, email, username and password as long as they remain unique.
```
![React5](https://user-images.githubusercontent.com/98179343/218256935-2519f1e3-499a-48e2-912d-af298488fb1b.PNG)
![React9](https://user-images.githubusercontent.com/98179343/218256937-5fa1b614-052e-4766-9bc6-1d22949a7c91.PNG)

## Upload
```
Available only for Users after either Login or Register. This is from 
where you can upload your own NFT. After uploading you are redirected to your 
newly created details page of the NFT from where you can always edit it or delete it. 
Every NFT you upload is automatically added your own list.
```
![React8](https://user-images.githubusercontent.com/98179343/218256951-9efd051f-ec88-41db-b050-5492a6390778.PNG)

## Edit 
```
This is where you can edit the uploaded NFT's to your liking.
```
## Register
```
sends the data  to the server if the form is filled correctly.
Checks if the username and email are unique, and hashes your password,
after that creates the user profile and stores the data in the MongoDB database.
After successful register it redirects you to your newly created user profile.      
```
![React7](https://user-images.githubusercontent.com/98179343/218256957-8b6dd16b-a717-4456-8890-e138216ede2f.PNG)


## Login - 
```
sends the data to the backend server where it checks for the email 
in the database, if there is match takes the passwords and compares them. 
If the password match a JWT Cookie token is created and send to the Client for 
authorization this gives access to the interactive part of the social media website.
```
![React6](https://user-images.githubusercontent.com/98179343/218256958-be83dce2-8528-41a3-8373-b5d8ac1ea5ea.PNG)


## Select Profile Picture
```
this is where Users can select their profile picture 
from list of all the uploaded and owned NFT's by them.
```

* Most Wanted - 
```
Variation of the Catalog page accessible for both Users and Guests.
The NFT's are dispalyed in different order starting from the most expensive and popular.
```

# The website has two parts:

## User part 
### After either Login or Register in the website you will be granted with access to:
* your personal profile where you can customize your profile picture, description,
* username and email to your liking.
* the ability like and own NFT's uploaded by other users and create and edit your own NFT's.
* cookie used for authorization.

## Guest part 
### As a guest you are given a lot of freedom, you can visit the 

* homepage
* catalog
* the most wanted list
* detail pages
* users profiles
! but you can't 
* like
* own
* upload
* edit
comment the NFT's.
    
# Basic Architecture Explanation

## Public
* for static images and css + index.html

## Server 
### contains the REST server 
* routes 
```
handles route redirecting to the corresponding request addres based on first parameter
```
      
* utils 
```
containes JsonWebToken functionality
```
      
* models 
 ```
keeps the Mongoose Schemas 
```

* controllers 
```
find the specific fetched route and handles the REST request
```
          
* src 
      * handles the react-app + cleint side rendering
```
components - exports all components need for client side rendering also handles evets and requests data to the server
components.css - keeps all css for specific page
guards - guards user to acces parts based on condition
App.js - handles client side routing and uses routeGuards
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contact

Jan Milenkov - [https://github.com/instamenta](https://github.com/instamenta) - instamenta@abv.bg

Project Link - [https://github.com/instamenta/nft-social-media](https://github.com/instamenta/nft-social-media)
