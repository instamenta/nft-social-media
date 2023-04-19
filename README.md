# "The Bigger Picture" is a SPA Website with a frontend and backend side both made by me!
### Built With
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)!
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
# Website has the following pages: 

## Home 
```
A welcoming page for both Users and Guests, complete with an 
interactive picture sliding deck displaying the most desired NFTs.
```     
![React1](https://user-images.githubusercontent.com/98179343/218256881-7726e83a-7c26-404c-b8fd-acc8886e2cd8.PNG)
![React2](https://user-images.githubusercontent.com/98179343/218256883-557871f7-bc7d-4887-ba39-bf259de4c878.PNG)


## Catalog 
```
The major section of the website that both Users and Visitors
may access to see a comprehensive list of every NFT posted to the website.

```

![React3](https://user-images.githubusercontent.com/98179343/218256888-2f0029d0-0245-4273-b2ff-5036932c798e.PNG)

## Details
```
Displays the most significant information about the selected NFT. 
Guests may see how many likes and owns it has, as well as the price and 
the name of the person who submitted it, which takes them to his personal 
Profile page. Users can also view this information and get the ability 
to Own and Like. Liking NFT adds it to your "Liked List" and owning NFT 
puts it to your "Owned List," but it also adds it to your "Liked List.
```
![React4](https://user-images.githubusercontent.com/98179343/218256900-1efcc165-5d28-49c7-93df-69241abd6b70.PNG)

## Profile
```
Each User has his or her own personal profile page, where visitors can 
view the User's name, description, and photo, as well as how many NFTs 
they possess and like. As a User, you may modify your picture, 
description, email, username, and password as long as they stay unique
```
![React5](https://user-images.githubusercontent.com/98179343/218256935-2519f1e3-499a-48e2-912d-af298488fb1b.PNG)
![React9](https://user-images.githubusercontent.com/98179343/218256937-5fa1b614-052e-4766-9bc6-1d22949a7c91.PNG)

## Upload
```
Only available to Users when they Login or Register. This is the location
where you may post your own NFT. After uploading, you will be led to your
newly generated NFT details page, where you may always update or delete it.
Every NFT you publish is instantly added to your own list.
```
![React8](https://user-images.githubusercontent.com/98179343/218256951-9efd051f-ec88-41db-b050-5492a6390778.PNG)

## Edit 
```
This is where you may make changes to the uploaded NFTs.
```
## Register
```
Transmits the data to the server if the form is successfully filled out.
Checks to see if the username and email are unique, then hashes your password 
before creating the user profile and storing the data in the MongoDB database.
After successfully registering, you will be redirected to your newly created user profile.           
```
![React7](https://user-images.githubusercontent.com/98179343/218256957-8b6dd16b-a717-4456-8890-e138216ede2f.PNG)


## Login - 
```
transmits the data to the backend server, which checks the database 
for the email address and compares the passwords. If the password matches, 
a JWT Cookie token is generated and sent to the Client for authorisation, 
granting access to the interactive portion of the social networking platform.
```
![React6](https://user-images.githubusercontent.com/98179343/218256958-be83dce2-8528-41a3-8373-b5d8ac1ea5ea.PNG)


## Select Profile Picture
```
This is where users may choose their profile image from a selection of all available options.NFT
```

* Most Wanted - 
```
A Catalog page that is accessible to both Users and Guests.
The NFTs are displayed in descending order, beginning with the most costly and popular.
```

# The website is divided into two sections:

## User part 
### After you Login or Register on the website, you will have access to: 
* your personal profile, where you can customize your profile picture, description.
* username, and email to your liking. 
* the ability to like and own NFT's uploaded by other users, as well as create and edit your own NFT's.

## Guest part 
### As a visitor, you have a lot of freedom; you can go to the:

* homepage
* catalog
* the most wanted list
* detail pages
* users profiles
### but you can't:
* like
* own
* upload
* edit
comment the NFT's.
    
# Explanation of Basic Architecture

## Public
* for static graphics, CSS, and index.html

## Server 
### contains the REST server 
* routes 
```
handles route redirecting to the relevant request address depending on the first parameter
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
locate the fetched route and handle the REST request
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
