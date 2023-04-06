# React Notepad Challenge

### Challenge

You will create a React Project from Scratch... this is just an example.

Create a small note pad app that lets a submit a small form with their name, date, and small note to remember.

Once submitted the note should appear in a nicely styled notes, and be added to the list of notes displayed on the screen.

Please see a **very basic** example here: [https://damonspencerroberts.github.io/React-Note-Pad-Exercise/](https://damonspencerroberts.github.io/React-Note-Pad-Exercise/)

### **Components to create**

- Input
- TextArea
- Header
- Button
- Form
    
    Needs to include
    
    - Input type text
    - Input type date
    - TextArea
    - Button for submitting
    - Corner exit button to exit out of form
- Notes component that will handle listing the specific notes.
- Note component that will be the specific note.

### **MVP Requirements**

1. User can type their name, the date and their note inside a form and be able to submit the form.
2. Validation will verify that no fields are empty and only submit the form if all fields are filled.
3. The user should have a button that allows them to add a new note that will display the form.
4. User can close the form by clicking on an exit button.
5. Notes should be displayed with a nice list of note cards.
6. If there are no notes display ‘No notes yet’ message to the user.
7. There should be a way to sort the notes by date associated with the note.
8. There should be a way to update a specific note.
9. There should be a way to delete a specific note.

### Use Hooks

- useState
- useEffect
- Note: *Create you own hooks if you want 🙂*

### Resources

**Create a React app with**

```jsx
npx create-react-app [app-name]
cd [app-name]
npm start
```

**Use Packages**

1. Styled components
    
    [styled-components](https://styled-components.com/)
    
2. Uuid
    [uuid](https://www.npmjs.com/package/uuid)

*Note: use any other packages that you find that might be relavent.*

**Bonus:**

- Colour randomiser for the note background
    - When adding a note have a random background color.
- Different validation schema
    - Only certain letters/numbers etc.
- Using redux for state management
- Using `useContext` for state management
- Awesome designs → More text, headers anything you want be creative
- More fields as inputs
- Add a database to persist the data
- Add Jest and test your components, and hooks.
