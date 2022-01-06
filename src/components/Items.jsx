function Items(props){


    return(
        <div class='Items'>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <img src={props.image}/>
        
            

        </div>
    )
}
export default Items;