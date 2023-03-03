import '../styles/Searchbar.css';

export default function Searchbar () { 
    return (
        <div className="searchbarDiv">
            <input className="searchbar" type="text" placeholder="Search for your trips" />
            <button className="searchbutton" type="submit" > Search </button>
            <select className="filterdropdown" name="filter" id="filter" value="Select filter" onChange={() => {}}>
                <option value="Select filter" disabled hidden>Select filter</option>
                <option value="rating">Rating</option>
                <option value="country">Country</option>
                <option value="duration">Duration</option>
                <option value="price">Price</option>
            </select>
        </div>
    )
}