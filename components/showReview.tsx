export default function showReview(id: string,name: string, title: string, review: string){
    return(<div className="flex flex-col justify-center items-center max-w-screen-md my-4 p-4 shadow rounded-lg overflow-hidden">
        {/* <div className="flex flex-row justify-evenly max-w-fit p-4">
            <h2>Id:{id}</h2>
            <h2>{name}</h2>
        </div> */}
        <h2>Id:{id}</h2>
        <h2>{name}</h2>
        <h3><b>{title}</b></h3>
        <p>{review}</p>
  </div>);
}