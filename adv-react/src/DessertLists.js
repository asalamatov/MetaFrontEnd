function DessertsList(props) {
    // Implement the component here.
    let listItems = props.data.sort((a,b)=>a.calories-b.calories).filter(a => a.calories<500).map(
            dessert => {
            const itemText = `${dessert.name} - ${dessert.calories} cal`;
            return <li>{itemText}</li>
              }
    )
  
    return (
      <ul>
        <li>
          {listItems}
        </li>
      </ul>
    )
  }
  
  export default DessertsList;
  