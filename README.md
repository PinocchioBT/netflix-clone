# Netflix Clone


A Netflix clone web application with features like Stripe Checkout & Webhooks for payments, Redux for state management, Firestore for database storage, and Google Authentication for user login.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Stripe Checkout & Webhooks:** Secure payment processing with Stripe integration.
- **Redux:** State management for efficient data handling.
- **Firestore:** Cloud-based database for storing user information and movie data.
- **Google Authentication:** Allow users to log in using their Google accounts.

## Getting Started

These instructions will help you set up a local copy of the project for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Git

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/PinocchioBT/netflix-clone.git
```

2. Navigate to the project directory:
```bash
cd netflix-clone
```

3. Install the required dependencies:
```bash
npm install
```

4. Create a .env file in the root directory and add the necessary environment variables (e.g., API keys, Firebase config):
```bash

REACT_APP_STRIPE_PUBLIC_KEY=pk_test_51O2vwlH0NDIMRLm4nZs3GwFNVb5gidT4tjnUhSwLrZKuCK3u91XYEl071gsELEoXYmd8TIKEjfQPo6dxWLlkoM6R00JMW31Ozi
REACT_APP_FIREBASE_API_KEY=AIzaSyAW8HCWEXUm1YtRMabQ4awzSBRagczH258
REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-clone-62b9f.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=netflix-clone-62b9f

```
## Usage
```bash
npm run dev
```
1. Begin testing and developing new features!


