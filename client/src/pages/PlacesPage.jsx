import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const {action} = useParams();
    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className=" inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
               <div>
                    <from>
                        <h2 className="text-xl mt-4">Title</h2>
                        <p className="text-gray-500 text-sm">Title for your place, should be short and catchy </p>
                        <input type="text" placeholder="Title"/>
                        <h2 className="text-xl mt-4">Address</h2>
                        <p className="text-gray-500 text-sm">Address to the place</p>
                        <input type="text" placeholder="Address"/>
                        <h2 className="text-xl mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">The more , the better</p>
                        <div className="flex gap-2">
                            <input type="text" placeholder={'Add using a link ...jpg'}/>
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
                        <h2 className="text-xl mt-4">Description</h2>
                        <p className="text-gray-500 text-sm">Describe your place</p>
                        <textarea />
                        <h2 className="text-xl mt-4">Perks</h2>
                        <p className="text-gray-500 text-sm">Describe your place</p>
                        <div>
                            <label>
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                </svg>
                                <span>Wifi</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>  
                                <span>Free parking spot</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>TV</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>Pets</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>Private Entrance</span>
                            </label>
                        </div>
                    </from>
               </div>
            )}
        </div>
    );
}