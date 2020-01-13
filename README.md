[![Build Status](https://travis-ci.org/Lambda-School-Labs/travel-mapping-fe.svg?branch=master)](https://travis-ci.org/Lambda-School-Labs/travel-mapping-fe) [![Uptime Robot ratio (7 days)](https://img.shields.io/uptimerobot/ratio/7/m783770296-efd8327fee3ec1b3038ac6df)](https://stats.uptimerobot.com/X7z6jHXVJ2)

# Piktorlog

Application deployed at [piktorlog.com](https://piktorlog.com/).

## 4️⃣ Contributors

|                                       [Arthur J. Lei](https://github.com/arturolei)                                        |                                       [Adrian Adames](https://github.com/adrianadames)                                        |                                       [Morgan Peterson](https://github.com/MorganPeterson1313)                                        |                                       [Brandon G. Elzy](https://github.com/belzy)                                        |                                       [Tim Dill](https://github.com/Brodt7258)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars1.githubusercontent.com/u/4889231?s=400&v=4" width = "200" />](https://avatars1.githubusercontent.com/u/4889231?s=400&v=4)                       |                      [<img src="https://avatars3.githubusercontent.com/u/11194836?s=400&v=4" width = "200" />](https://avatars3.githubusercontent.com/u/11194836?s=400&v=4)                       |                      [<img src="https://avatars1.githubusercontent.com/u/47166767?s=400&v=4" width = "200" />](hhttps://avatars1.githubusercontent.com/u/47166767?s=400&v=4)                       |                      [<img src="https://avatars0.githubusercontent.com/u/18194507?s=400&v=4" width = "200" />](https://avatars0.githubusercontent.com/u/18194507?s=400&v=4)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/Brodt7258)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/arturolei)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/adrianadames)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/MorganPeterson1313)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/belzy)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Brodt7258)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/arthur-lei/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/adrianadames/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/morgan-peterson-73817559/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brandon-g-elzy-292601119/) | |

<br>
<br>

## Project Overview

[Trello Board](https://trello.com/b/W377D0dy/media-organizer)

[Product Canvas](https://www.notion.so/Media-Organizer-800622a0360b4de4ae85757f19769824)

[UX Design files](https://www.figma.com/file/j8XG1mhNV4q9o8Y17aK9Dl/Travel-Mapping-User-Flow)

[Front-End Github Repo](https://github.com/Lambda-School-Labs/travel-mapping-fe/branches)

[Back-end Github Repo](https://github.com/Lambda-School-Labs/travel-mapping-be/branches)

Piktorlog is an app that allows you to organize your photos in any way that you choose. Whether it is by date, subject, or theme, you can organize your photos in the way that works best for you. 

Piktorlog also lets you invite collaborators to upload their photos to an album of your choosing, so you don't have to track down photos from event participants.


### 4️⃣ Key Features

### Basic Features
- Ability to upload photos
    - Metadata fields for photo (user input)
        - Title
        - Captions
    - Default metadata fields as determined by user
- Ability to tag/classify photos according a user-defined category; photos can belong to multiple categories)
    - Categories could be things like:
        - Event (Birthday, Holiday), location, People, year, subject (e.g. art or books)
- Search/filter by category/categories
- Ability to invite collaborators/have multiple authorized users for an album
    - Ability to assign permissions to collaborators
- Access control/view permissions can be set for some photos
- Publishing photos as an front-facing album while maintaining an archive (user-facing as opposed to public-facing)
- Ability to sign up and connect via OAuth


## 1️⃣ Tech Stack

### Front end built using:
- React 
- Redux
- Semantic UI

#### Front-End Considerations

1. What Framework are you using for your FE? (React, React Native, Angular, Vue, etc...)
React (consider possibly using React Native for dedicated mobile app if time-frame allows). 

2. What alternatives were considered?
GatsbyJS, Vue, Next.js

3. Why did you decide on this framework over the alternatives (what are the advantages?)
We decided on this framework based on the knowledge base of the developers on the project. Semantic UI was something new for most of us involved in the product. 

4. What potential challenges can you foresee using this framework?
State management, scalability, authentication, front-endtesting (React testing library)


#### Front end deployed to `netlify.com`

#### [Back end](https://github.com/Lambda-School-Labs/travel-mapping-be/) built using:

#### Back-End

-    point one
-    point two
-    point three

🚫 List the rest of the back end end features and libraries in the same format as the framework above

# APIs

## 2️⃣ Authentication API here

🚫Replace text below with a description of the API

## 3️⃣ Misc API here

🚫Replace text below with a description of the API


# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
CLOUDINARY_CLOUD_NAME=dbl8pi1ms
CLOUDINARY_API_KEY=584833961342644
CLOUDINARY_SECRET_KEY=NShFaw7fvrlsCAqzfEh9MObgzNE
AUTH0_AUDIENCE=https://piktorlog.com/api
AUTH0_DOMAIN=piktorlog.auth0.com
JWT_SECRET=MIICXQIBAAKBgQCZSqMwjFdt1xcFWuiYbvzCXSDgvfDwDuhKZ0oWu6zcDTnx4inU5XQ8c4hDwV5WBRFtUDSum1GcwbY+lSqamy87mhvPCxYEnSWVLwnqOXb5Vowb0++S60/hB8T8u+Dbjw4MlsMqcxk4RCYQAxid+2kubZXjg0JO2nb0nePuk1mRbQIDAQABAoGAM+XdEhaxkvJ7TMjWbqVE1dkJxI0KAXxKkMYfg0rO30FrGMVlPDri+4Rx4d6Zva3BlKzO6T6UhunedZmy7t0TRCVeXKbc+sFZr2u9maZj+NRbu+Mjwwyzkzs2EKnk5fiE/V2w58bXhyb7urEh1MFpy9Istk43CwbaJ+kpCgXIeAECQQD1ChamZ4Wa+7otO9OnJcGAEummeLKMGNF1aXEKsxDG+ZZyEx+OCLX0/0RlD8I8CMCsy+mFrnWy7WY/7K0YIWvtAkEAoCX1EVwwqcdz18u36nJ0tQ21EzVc4dam6kKr88HBBv7u75Z1OtI6bEkomg9AaWn3vsCOYOzb/nMApR6toHsLgQJBAIAurdiQsOB5LFQ7RqXaZ1XDDvzpiKUm2nNsHBk3wOAFckDsZgZb4ituWW3wh2/2OCxsYxVuRN27uFBaU9YaraUCQET2M2KnXTku7x5k1iy53rG8VlYQK5AAe93ymdMcgv99Neyr0I1ky82nbzlwCd+axxk4F9d7B3y5jvSLkl7BvYECQQDJSF9etssAtx48WcjikcdiDc9tlI2UrmbHncUTGsvzEnvZEKRAmVgH+2zVXBes/oJNnuHmNglthbS+Sadg39zX
PASS_SALT=12
OAUTH_CLIENT_ID=108804626162-qij29l0bg0osbvgvemfuk7gkkbchp2h7.apps.googleusercontent.com
```

# 5️⃣ Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing


# 4️⃣ Installation Instructions


## Other Scripts


# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation]() for details on the backend of our project.

## Contact Info: 
- Adrian Adames 
  - Email:
- Tim Dill:
  - Email: 
- Brandon G. Elzy
  - Email:
- Arthur J. Lei
  - Email: artie.lei@gmail.com
- Morgan Peterson 
  - Email:  
