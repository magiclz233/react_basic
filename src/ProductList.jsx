const products = [
  {title: '张三', isFruit: false, id: 1},
  {title: '李四', isFruit: false, id: 2},
  {title: '王武', isFruit: true, id: 3}
]

export default function ShoppingList() {
  const listItem = products.map(
    p => 
      <li
        key={p.id}
        style={{color: p.isFruit ? 'red' : 'blue'}}
        >
        {p.title}
      </li>
    
  );

  return (
    <ul>{listItem}</ul>
  )
}