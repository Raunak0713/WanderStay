export default function Photos({pic, setpic}){
    return (
        <>
            <div className="flex gap-2">
                <input type="text" placeholder={'Add using a link ...jpg'} value={pic} onChange={ev => setPic(ev.target.value)}/>
                <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <button className="flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>  
                Upload
                </button>
            </div>
        </>
    );
}