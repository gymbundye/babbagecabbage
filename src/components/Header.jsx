function Header(props){


    return(

        <div class='Header'>
         <div>
        <h1>{props.title}</h1>
        <h2>{props.eventname}</h2>
        <h3>{props.event}</h3>
        </div>
        <img src={props.image}/>
        



        
            

        </div>
    )
}
export default Header;