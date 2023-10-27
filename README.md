# Netflix Clone

![Netflix Clone Logo]([link_to_logo](https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrand.netflix.com%2Fen%2Fassets%2Flogos%2F&psig=AOvVaw2x0_4CxW-z1krH-_attlil&ust=1698480430723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLi3hOjilYIDFQAAAAAdAAAAABAI))

A Netflix clone web application with features like Stripe Checkout & Webhooks for payments, Redux for state management, Firestore for database storage, and Google Authentication for user login.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Demo

You can check out the live demo [here](link_to_live_demo).

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
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
# Add any other environment variables here
```
## Usage
```bash
npm run dev
```
1. Begin testing and developing new features!


