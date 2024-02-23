import React from 'react';
import './style/CustomStyle.css';

// Function that shows an alert.
function AlertButton({ message, children }) {
  // Returns a button. Clicking it shows an alert with a message.
  return <button className="alert-button" onClick={() => alert(message)}>{children}</button>;
}

// Define a function that groups buttons together.
function Toolbar() {
  // Returns a number of AlertButton components.
  return (
    <div>
      <AlertButton message="this is first button">button 1</AlertButton>
      <AlertButton message="this is second button">button 2</AlertButton>
      <AlertButton message="this is third button">button 3</AlertButton>
    </div>
  );
}

// The main App that renders toolbar component
function App() {
  return (
    <div className="App">
      <Toolbar />
    </div>
  );
}

export default App;
