export default function showNotice(title: string, description: string, src: string){
    return(<div className="flex flex-col justify-center items-center m-4 p-4 shadow rounded-lg max-w-screen-sm overflow-hidden">
    <h1 className=" text-2xl">{title}</h1>
    <img className=" min-w-full" src={src} />
    <p>{description}</p>
  </div>);
}