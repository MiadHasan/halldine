export default function showCardMeal(src: string, itemName : string){
    return(<div className="flex flex-col justify-center items-center m-4 p-4 shadow rounded-lg">
    <img className="w-3/5" src={src} />
    <h3>{itemName}</h3>
  </div>);
}