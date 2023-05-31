export default function InOut({i, si, o, so, g, mg}) {
    return (
        <>
            <div className="grid gap-2 sm:grid-cols-3">
                <div>
                    <h3 className="mt-2 -mb-1">Check in time</h3>
                    <input type="text" placeholder="16:00" value={i} onChange={ev => si(ev.target.value)}/>
                </div>
                <div>
                    <h3 className="mt-2 -mb-1">Check out time</h3>
                    <input type="text" placeholder="22:00" value={o} onChange={ev => so(ev.target.value)}/>
                </div>
                <div>
                    <h3 className="mt-2 -mb-1">Max number of guests</h3>
                    <input type="text" value={g} onChange={ev => mg(ev.target.value)}/>
                </div>
            </div>
            <button className="primary my-4">Save</button>
        </>
    );
}