

export const CompleteTodo = (props) => {
const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-items">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
