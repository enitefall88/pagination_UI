import React from "react"
function App() {
  let query = (new URL(document.location)).searchParams
  let c = Number(query.get("c")) || 3

  console.log(c)
  let pages = ['1', '2', '3', '4']
  return (
    <div className="App">
    <DisplayLi
    c={c}
    pages={pages}
    />
    </div>
  );
}

function DisplayLi({c, pages}) {
 return <ul>
   {pages.map((page, index) => {
     return <li key={index}>
       <a>{page}</a>
     </li>
   })}
 </ul>
}

export default App;
