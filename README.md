# Project REST-Rant

*REST-Rant is an app where users can review restaurants.*

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**rants**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

## Planning

### User Stories

**User 1:** *As a food connoisseur, I want reviews so I know which places I'd like to visit and which places to avoid.*

**User 2:** *As a potential customer, I want to see what the restaurant's cuisine so I know what to types of food are available.*

**User 3:** *As a picky eater, I want to know what type of food a restaurant serves so I can choose where I want to eat.*

**User 4:** *As a person who lives in Springfield, IL, I want to know local restaurants so I can pick a great local place to eat.*

## Color Scheme
    Primary - whitesmoke
    Secondary - Blue
    Highlight - orange
    Text - Black and whitesmoke

## Wireframes
    Home
        Navigation
        Name of Page (Rest-Rant)

        Image
        Image Credits
        Button to places page
    
    Places
        Navigation
        Page Title (Restaurants Reviews)

        Name, Review, Image, location X 4

    Add Your Review
        Navigation
        Page Title (Add a new Restaurant Review)

        Fields:
            Name of Restaurant
            Image
            City
            State
            Year Founded
            Cuisine
            Rating (Stars)
            Reviews

## Notes

Possible bonus ideas:

* Update for comments
* Aggregate rating for a place
* Auto-complete state dropdown