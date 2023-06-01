import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import InOut from "../InOut";
import axios from 'axios';


export default function PlacesPage() {
    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    // const [photoLink,setPhotoLink] = useState('');
    const [Description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);

    function inputHeader(text){
        return(
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputDescription(text){
        return(
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }

    function preInput(header, description){
        return(
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    // async function addPhotoByLink(ev){
    //     ev.preventDefault();
    //     await axios.post('/upload-by-link', {link: photoLink})
    // }

    function uploadPhoto(ev){
        const files = ev.target.files;
        const data = new FormData();
        for(let i=0; i<files.length; i++){
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: {'Content-Type':'multipart/form-data'}
        }).then(response => {
            const {data:filenames} = response;
            setAddedPhotos(prev => {
                return [...prev, ...filenames];
            });
        })
    }

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
                    <form>
                        {preInput('Title','Title for your place, should be short and catchy')}
                        <input type="text" placeholder="Title" value={title} onChange={ev => setTitle(ev.target.value)}/>


                        {preInput('Address','Address of you place')}
                        <input type="text" placeholder="Address" value={address} onChange={ev => setAddress(ev.target.value)}/>


                        {preInput('Photos','The more , the better')}
                        <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            {addedPhotos.length > 0 && addedPhotos.map((photo, index) => (
                                <div key={index}>
                                    <img className="rounded-2xl" src={`/uploads/${photo}`} alt="" />    
                                </div>
                            ))}
                            <label className="flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
                                <input type="file" className="hidden" onChange={uploadPhoto}/>    
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>  
                                Upload
                            </label>
                        </div>

                        {preInput('Description','Describe your place')}
                        <textarea value={Description} onChange={ev => (setDescription(ev.target.value))}/>

                        {preInput('Perks','Different ammenities of your place')}
                        <Perks selected={perks} onChange={setPerks}/>

                        {preInput('Extra Info','House Rules')}
                        <textarea value={extraInfo} onChange={ev => (setExtraInfo(ev.target.value))}/>

                        {preInput('Check in&out times','Add check-in and check-out times and remember to keep a time buffer for cleaning and maintainance of the house')}
                        <InOut i={checkIn} si={setCheckIn} o={checkOut} so={setCheckOut} g={maxGuests} mg={setMaxGuests} />
                    </form>
               </div>
            )}
        </div>
    );
}