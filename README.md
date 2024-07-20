# Unagi Frontend Test - Naveed


## Technologies Used

- **TypeScript**: Superset of JavaScript that adds static types.
- **React**: JavaScript library for building user interfaces.
- **Styled Components**: CSS-in-JS library for styling React components.
- **Formik**: Library for building forms in React with ease.
- **Yup**: Schema builder for value parsing and validation.
- **Moment**: For Date of birth formating.
- **Axios**: For HTTP Request.

## Folder Structure

- **/src**
  - **/components**: Contains reusable React components (e.g., `Loading`, `Dialog`).
  - **/hooks**: Custom hooks (e.g., `useCreatePlayer`, `useFetchCollections`, `useFormHook`).
  - **/pages**: Page components (e.g., `Collection`, `CreateCard`).
  - **/styles**: Styled Components for styling.
  - **/types**: TypeScript types and interfaces.
  - **/utils**: Utility functions.

## Steps

### 1. Show a Single Static Card

- **File Updated**: `Collection.tsx`
- **Task**: Fill the `Collection` component to display a single card with the static data.
- **Bonus**:
  - Add TypeScript types/interfaces.
  - Fetch player image URL dynamically.
  - Implement lazy loading for the player image.
  - Format player DOB using moment.

### 2. Fetch Collection from a Fake REST API

- **File Updated**: `collection.ts`
- **Task**: Modify `fetchCollection` function to fetch data from `http://localhost:8001/cards`.
- **Bonus**:
  - Add loading state.
  - Handle error state.
  - Implement reusable card component.
  - Use Styled Components instead of plain CSS.
  - Add TypeScript types/interfaces.

### 3. Edit the Popup on `/create-card` Page

- **File Updated**: `CreateCard.tsx`
- **Task**: Implement a form to create a card using `json-server` for persistence.
- **Bonus**:
  - Implement client-side validation.
  - Handle server-side errors.
  - Add TypeScript types/interfaces.

### 4. Show All Cards as a Collection

- **File Updated**: `Collection.tsx`
- **Task**: Display a grid of all cards fetched from the API.
- **Bonus**:
  - Add loading state.
  - Add empty state.
  - Implement client-side sorting by criteria.

## Running the Project

1. **Install Dependencies**: `npm install`
2. **Start API & Dev Server**: `npm start`


## Notes

- The project has been structured to promote reusability and maintainability.
- Components and hooks are organized to ensure clean separation of concerns.
- Styling is handled using Styled Components to maintain a consistent look and feel.
