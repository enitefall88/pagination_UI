import React from "react"
function App() {
  let query = (new URL(document.location)).searchParams
  let c = Number(query.get("c")) || 3

  console.log(c)
  let pages = 10
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
  let prev = c - 1 >= 1 ? c - 1 : null
  let next = c + 1 <= pages ? c + 1 : null
return (
    <ul>
      {prev && (
        <li>
          <a href={"?p=" + prev}>Previous</a>
        </li>
      )}
      {range(pages).map((page, index) => {
        return (
          <li key={index}>
            <a href={"?p=" + page}> </a>
          </li>
        );
      })}
      {next && (
        <li>
          <a href={"?p=" + prev}>Next</a>
        </li>
      )}
    </ul>
  );
}




  function range(n) {
    return [...Array(n).keys()]
  }


export default App;
