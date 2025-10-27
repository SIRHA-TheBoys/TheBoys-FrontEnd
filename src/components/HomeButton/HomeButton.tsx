import "./HomeButton.css"

interface Props{
    name: String;
}

export default function HomeButton({name}: Props){
    return(
        <div className = "mainContainer">
            <button className=" buttonS"> {name} </button>
        </div>
    )

}