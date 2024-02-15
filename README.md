# RN Expo Scaffold App

Welcome to the official React Native (Expo) Scaffold Mobile App repository. This project is designed to kickstart your mobile app development with React Native using [Expo](https://expo.io/), providing a robust framework that integrates the best practices and tools needed to build high-quality mobile applications efficiently.

## Purpose and Benefits

This scaffold aims to reduce the initial setup time and complexity by providing a ready-to-use React Native application structure. It leverages the power of Expo, GraphQL, Clerk for authentication, Sentry for monitoring, and more, enabling developers to focus on building unique features right from the start.

## What's Inside

- `./`: The primary React Native application directory.
- `graphql-types`: GraphQL types for efficient data management.
- `app/`: Contains the core functionality of the application.
- `config/`: Configuration files for the app setup.
- `providers/`: Context providers for state management.
- `utils/`: Utility functions and helpers for common tasks.
- `components/`: Reusable UI components.
- `hooks/`: Custom React hooks for shared logic.
- `constants/`: Constants used throughout the app.
- `tailwind.config.ts`: Configuration for Tailwind CSS.
- `metro.config.js, babel.config.js, tsconfig.json`: Config files for Metro Bundler, Babel, and TypeScript.

## Major Dependencies

- React Native and Expo for the app framework.
- Apollo Client for GraphQL integration.
- Clerk for secure authentication.
- Sentry for real-time error tracking.
- Tailwind CSS for styling.

## Getting Started

### Prerequisites

- Volta (ideally)
- Node.js (`18.17.0`)

### Setup

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd rn-expo-scaffold
npm install
```

### Running the App

To start the app in development mode:

```bash
npm run dev
```

For iOS development:

```bash
npm run ios:dev
```

### Environment Variables

To manage environment variables, consider using `dotenv` or a similar package. Create `.env` files for different environments (`.env.development`, `.env.production`, etc.). Remember to configure the necessary variables for API endpoints, feature flags, etc., without exposing sensitive information.

### Building for Production

For iOS, to create a release build (.ipa):

```bash
npm run ios:release
```

### Tailwind Theme and Expo Cache

After modifying `tailwind.config.ts`, clear the Expo cache to apply changes:

```bash
expo start -c
```

## Contribution Guidelines

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear, descriptive messages.
4. Push your changes and submit a pull request.

Please adhere to the coding standards and commit message guidelines provided in the repository.

## Troubleshooting and FAQ

Encounter an issue? Check out the FAQ or troubleshooting section in our documentation for common problems and solutions. If you still need help, please file an issue on GitHub with a detailed description of the problem.

## Powered by



## License

--