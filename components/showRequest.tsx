export default function showRequest(hall: string, item: string, quantity: string) {
    return (
        <div className="flex flex-col justify-center items-center w-96 mt-12 p-8 shadow rounded-lg overflow-hidden">
                <h2>From: <b>{hall}</b></h2>
                <h3>Item name: <b>{item}</b></h3>
                <h3>Quantity: <b>{quantity}</b></h3>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Acknowledge
                    </button>
                </div>
        </div>);
}