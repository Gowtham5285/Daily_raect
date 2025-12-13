import List from './List.jsx'
List.defaultProps = {
    category: "Category",
    items: ["apple","banana","citrus"],
}
function App() {
//   Used in the app.jsx
// const fruits = [{ id: 1, name: "Apple", calories: 69 },
// { id: 2, name: "Banana", calories: 100 },
// { id: 3, name: "Grapes", calories: 50 },
// { id: 4, name: "Kiwi", calories: 33 },
// { id: 5, name: "Mango", calories: 75 }]

// const vegetables = [{ id: 6, name: "Tomato", calories: 100 },
// { id: 7, name: "Potato", calories: 97 },
// { id: 8, name: "Radish", calories: 130 },
// { id: 9, name: "Carrot", calories: 73 },
// { id: 10, name: "Brinjal", calories: 65 }]
return (<>
<List />
  {/* {fruits.length > 0 && <List  category="Fruits" />}
  {vegetables.length > 0  && <List  category="Vegetables" />} */}

</>);
}

export default App
