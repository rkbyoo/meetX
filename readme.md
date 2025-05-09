# MeetX Backend

A simple backend for MeetX, an event/activity booking platform.  
This backend allows users to sign up, log in, view all activities, book an activity, and see their bookings.

---

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   ```
   npm install
   ```
3. **Create a `.env` file** in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. **Start the server**
   ```
   npm start
   ```

---

## API Endpoints & User Flow

### 1. **Sign Up**
- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "name": "Your Name",
    "email": "your@email.com",
    "phone": "1234567890",
    "password": "yourpassword"
  }
  ```
- **Response:** User object (without password)

---

### 2. **Login**
- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "email": "your@email.com",
    "password": "yourpassword"
  }
  ```
- **Response:** 
  ```json
  {
    "token": "JWT_TOKEN_HERE"
  }
  ```
- **Note:** Save this token for authenticated requests.

---

### 3. **Get All Activities**
- **Endpoint:** `GET /api/activities`
- **Response:** List of activities

**Sample Activities:(saved in mongodb cloud)**
| Activity ID                        | Title                   |
|-------------------------------------|-------------------------|
| 681deca7fb472fca85938b57           | Cricket Match           |
| 681deca7fb472fca85938b58           | Movie Night             |
| 681df73afb472fca85938b67           | Tech Expo 2025          |
| 681df73afb472fca85938b68           | Music Fest              |
| 681df73afb472fca85938b69           | Art Exhibition          |
| 681df73afb472fca85938b6a           | Startup Pitch Day       |
| 681df73afb472fca85938b6b           | Food Carnival           |
| 681df73afb472fca85938b6c           | Marathon Run            |
| 681df73afb472fca85938b6d           | Book Fair               |
| 681df73afb472fca85938b6e           | Stand-up Comedy Night   |
| 681df73afb472fca85938b6f           | Astronomy Night         |
| 681df73afb472fca85938b70           | Photography Workshop    |

---

### 4. **Book an Activity**
- **Endpoint:** `POST /api/bookings/book`
- **Headers:**  
  `Authorization: Bearer YOUR_JWT_TOKEN_HERE`
- **Body:**
  ```json
  {
    "activityId": "681deca7fb472fca85938b57"
  }
  ```
  Replace the `activityId` with the ID of the activity you want to book.

---

### 5. **See My Bookings**
- **Endpoint:** `GET /api/bookings/my-bookings`
- **Headers:**  
  `Authorization: Bearer YOUR_JWT_TOKEN_HERE`
- **Response:** List of your booked activities

---

## Notes

- **.env file is required** for database and JWT configuration.
- **Always pass the JWT token** in the `Authorization` header as `Bearer <token>` for booking and viewing your bookings.
- **Test endpoints using Postman** or any API client.

---

## Example Postman Usage

1. Register and log in to get your token.
2. Use the token in the `Authorization` header for booking and viewing bookings.
3. Use activity IDs from the list above when booking.

---

**Enjoy using MeetX!**