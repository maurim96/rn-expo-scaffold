# RN Expo Scaffold App

Welcome to the official React Native (Expo) Scaffold Mobile App repository. This project is designed to kickstart your mobile app development with React Native using [Expo](https://expo.io/), providing a robust framework that integrates the best practices and tools needed to build high-quality mobile applications efficiently.

## Purpose and Benefits

This scaffold aims to reduce the initial setup time and complexity by providing a ready-to-use React Native application structure. It leverages the power of Expo, GraphQL, Clerk for authentication, Sentry for monitoring, and more, enabling developers to focus on building unique features right from the start.

## Powered by

<p align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://reactnative.dev/docs/getting-started">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/4d0785be-9a90-40af-9950-5bb4012128a4" width="100" height="80" alt="React Native logo"><br/>
          React Native
        </a>
      </td>
      <td align="center">
        <a href="https://docs.expo.dev/">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/dd94ebdc-1303-4c84-981c-beb4bd1b0f5d" width="100" height="80" alt="Expo logo"><br/>
          Expo
        </a>
      </td>
      <td align="center">
        <a href="https://clerk.com/docs">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/f2f691e0-c06f-45e8-96c8-580fa83a986e" width="160" height="80" alt="Clerk logo"><br/>
          Clerk
        </a>
      </td>
      <td align="center">
        <a href="https://docs.sentry.io/platforms/react-native/">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/a2c1a0b0-4b6d-4b0e-8051-cbd29b59a4fb" width="160" height="80" alt="Sentry logo"><br/>
          Sentry
        </a>
      </td>
      <td align="center">
        <a href="https://www.apollographql.com/docs/react/">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/87271779-89e3-4996-9e6b-020e3b42881e" width="160" height="80" alt="Apollo GraphQL logo"><br/>
          Apollo Client
        </a>
      </td>
      <td align="center">
        <a href="https://graphql.org/learn/">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/8004d1a6-22d1-4b51-bf7e-4ff6be0b84ed" width="160" height="80" alt="GraphQL logo"><br/>
          GraphQL
        </a>
      </td>
      <td align="center">
        <a href="https://the-guild.dev/graphql/codegen">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/b63a0abb-b4d0-4e24-a29a-50d218d5f747" width="160" height="80" alt="GraphQL logo"><br/>
          GraphQL CodeGen
        </a>
      </td>
    </tr>
  </table>
</p>

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
git clone git@github.com:maurim96/rn-expo-scaffold.git
cd rn-expo-scaffold
npm install
```

### Generating GraphQL Code

#### Prerequisities
- Have the API up and running in propper endpoint + port (you can refer to the [NestJs + GraphQl API Scaffold](www.google.com))
- Run the command:

  ```bash
  npm run gen:gql
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


## License

--
