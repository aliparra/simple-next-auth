This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

This project shows a very simple implementation of OAuth authentication with next-auth and github. 

When a user log in with Github can have access to the profile name, email and picture. 


## Getting Started

**STEP 1. Add .env.local**

To make it work please don't forget to add a .env.local on the project root with a:

``GITHUB_ID=yourSecretID``

``GITHUB_SECRET=yourGithubSecret``

``NEXTAUTH_URL=http://localhost:3000.``

**STEP 2. Run the development server:**

``npm run dev``



Follow the docs [here](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to get GITHUB_ID and GITHUB_SECRET

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Screenshots
![basic-auth-github](https://user-images.githubusercontent.com/61117650/219715575-22c96fac-c453-45d3-bd07-92b6e57ad505.png)


