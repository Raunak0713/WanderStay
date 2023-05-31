import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import InOut from "../InOut";
import Photos from "../Photos";

export default function PlacesPage() {
    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [photoLink,setPhotoLink] = useState('');
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

    function addPhotoByLink(){
        
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
                        <Photos pic={photoLink} setpic={setPhotoLink} />

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