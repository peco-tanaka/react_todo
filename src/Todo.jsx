import { useState } from "react"
import "./styles.css"

const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1", "TODOです2"])
  const [completeTodos, setCompleteTodos] = useState(["TODOでした", "TODOでした"])

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-items">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div>
          <ul>
            {completeTodos.map((todo) => (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-items">{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todo
