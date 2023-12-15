# Vue.js Project README

## Project Introduction

In this Vue.js project, I've leveraged the synergies of Vue 3, Vuex, Tailwind CSS, and Vite, showcasing my commitment to using cutting-edge technologies for optimal performance and development efficiency. This README highlights the project structure, key technologies, and the various tools I've implemented for maintainability and code quality.

## Key Technologies

- **Vue 3 Composition API**: Adopted for its advanced reactivity and composition features, enabling a more flexible and scalable codebase.
- **Vuex**: Used for state management, ensuring a predictable and efficient state across the application.
- **Tailwind CSS**: Chosen for its utility-first approach, which facilitates rapid UI development and ensures design consistency.
- **Vite**: Integrated as the build tool, significantly improving the development experience with fast builds and hot module replacement.

## Code Quality Tools

- **ESLint & Stylelint**: Enforced coding standards and maintained high-quality JavaScript and CSS.
- **Prettier**: Ensured uniform code formatting, enhancing readability and reducing formatting inconsistencies.
- **Husky & Lint-staged**: Automated linting and enforced code quality checks before each commit, ensuring a clean and reliable codebase.

## Project Structure & Enhancements

- **assets/images**: Optimized storage of visual assets, aligning with Tailwind's design principles and ensuring performance.
- **components**: Developed using Vue 3 Composition API and styled with Tailwind CSS, ensuring reusable and consistently designed UI components.
- **composables**: Leveraged Vue 3 Composition API for creating effective and reusable composables, improving code organization.
- **pages**: Structured with Vue Router for seamless navigation and Vuex for state consistency.
- **router**: Configured with Vue Router, optimized for performance with techniques like lazy loading and dynamic routing.
- **services**: Centralized API interactions, working in tandem with Vuex for efficient state management and error handling.
- **store**: Implemented Vuex for robust state management, organized modularly for scalability.
- **styles**: Extensively used Tailwind CSS for styling, adhering to a consistent design language across the application.
- **App.vue**: Acts as a cohesive and streamlined root component, integrating global components and layouts.
- **main.js**: Set as the entry point of the application, configuring Vue 3, Vuex, Vue Router, Tailwind CSS, and Vite for an integrated development experience.


## Scripts in `package.json`

- **build**
  - `vite build`: Compiles the project for production deployment using Vite.

- **dev**
  - `vite --host`: Starts the development server, accessible over the network.

- **lint**
  - `pnpm run lint:js && pnpm run lint:style`: Checks JavaScript and CSS for syntax and style issues.

- **lint:fix**
  - `pnpm run lint:js -- --fix && pnpm run lint:style -- --fix`: Automatically fixes fixable linting errors in JavaScript and CSS.

- **lint:js**
  - `eslint --ext .js,.vue --ignore-path .gitignore src`: Lints JavaScript and Vue files, ignoring patterns in `.gitignore`.

- **lint:style**
  - `stylelint "**/*.{vue,css}" --ignore-path .gitignore`: Runs Stylelint on Vue and CSS files.

- **serve**
  - `vite preview`: Serves the production build of the project for local testing.

- **prepare**
  - `husky install`: Installs Husky for managing Git hooks.

- **commit**
  - `czg`: Uses Commitizen for standardized commit messages.


## Additional Considerations

- **Performance Optimization**: Emphasized load time optimization through best practices like code splitting and tree-shaking, further enhanced by Vite's efficient bundling.
- **Responsive Design**: Achieved a fully responsive layout using Tailwind CSS, ensuring a smooth user experience across various devices.
- **Code Quality and Standards**: Maintained high coding standards with ESLint, Stylelint, and Prettier, and utilized Husky and Lint-staged for pre-commit quality checks.

## Test Result
### Vue.js Project Tasks

#### Task 1: Component Development
Developed a Vue.js component for a social media feed UI, which includes features like displaying feed items, comments, likes, and shares. This component is showcased at [Ganknow Feed UI](https://ganknow.vercel.app/paddie/feed).

#### Task 2: API Integration
Implemented integration with the JSONPlaceholder API to fetch and display a list of users, including their names and emails. This feature can be seen at [Ganknow Users List](https://ganknow.vercel.app/paddie/users).

#### Task 3: Routing
Set up Vue Router for the application to manage navigation between different views:
- **Feed List View**: Displays the main feed, accessible at [Ganknow Feed List View](https://ganknow.vercel.app/paddie).
- **Feed Post Detail View**: Shows the details of individual feed posts, available at [Ganknow Feed Post Detail View](https://ganknow.vercel.app/post/41da4b3a-df7c-4f6b-919b-aa900f611f69).
