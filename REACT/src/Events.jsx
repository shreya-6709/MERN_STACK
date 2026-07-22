function Events(){
    function press(event){
        if(event.key === "Enter"){
            alert("You Pressed Enter Key.")
        }
    }
    return (
        <>
        <div>
            <button onMouseOver={
                ()=>alert("Jerry Came.")
            }
            >
                Jerry
            </button>
            <button onMouseOver={
                ()=>alert("Tom Came.")
            }
            >
                Tom
            </button>
        </div>
        <input onKeyDown={press}/>
        <input onFocus={()=>console.log("Focused")} />
        <input onBlur={()=>console.log("Blurred")} />
        </>



    )

}
export default Events;