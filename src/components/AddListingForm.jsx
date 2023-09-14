import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as notesServices from '../utilities/notes-service';

const AddListingForm = ({ uploadImage, listings, setListings}) => {
       const [newListing, setNewListing] = useState({
        itemName: '',
        description: '',
        condition: '',
        category: '',
        startingBid: '',
        bidEndDate: '',
        image: '',
        error: '',
    });
    
    const navigate = useNavigate();

    // async function addNote(note) {
    //     const newNote = await notesServices.createNote(note);
    //     setNotes([...notes, newNote]);
    // }

    const _handleChange = (e) => {
        setListings({...listings, [e.target.name]: e.target.value});
    }
    
    async function _handleSubmit(e) {
        e.preventDefault();
        const data = await uploadImage();
        newListing.image = data.url;
        //addNote(newNote);
        //console.log(newNote);
        setNewListing({
            itemName: '',
            description: '',
            condition: '',
            category: '',
            startingBid: '',
            bidEndDate: '',
            image: '',
            error: '',
        });
        navigate('/notes')
    }

    return (
      <>
        <div>
          <div className='container-custom fade-in'>
            <div className='add-list-container m-1'>
              <form autoComplete='off' onSubmit={_handleSubmit}>
                <h1 className='h1-header'>Add New Listing</h1>
                <label>Item Name</label>
                <input className="custom-input"
                  type='text'
                  name='itemName'
                  value={newListing.itemName}
                  onChange={_handleChange}
                  required
                />
                <label>Description</label>
                <textarea className="custom-textarea"
                  name='description'
                  value={newListing.description}
                  onChange={_handleChange}
                  required
                />
                <label>Condition</label>
                <select className="custom-select"
                  name='condition'
                  value={newListing.condition}
                  onChange={_handleChange}
                  required>
                  <option value=''>Select Condition</option>
                  <option value='New'>New</option>
                  <option value='Good'>Good</option>
                  <option value='Used'>Used</option>
                  <option value='Worn'>Worn</option>
                </select>
                <label>Category</label>
                <select
                  name='category'
                  value={newListing.category}
                  onChange={_handleChange}
                  required>
                  <option value=''>Select Category</option>
                  <option value='Trading Card'>Trading Card</option>
                  <option value='Memorabilia'>Memorabilia</option>
                  <option value='Collectible'>Collectible</option>
                  <option value='Other'>Other</option>
                </select>
                <label>Starting Bid</label>
                <input
                  placeholder='$'
                  type='number'
                  name='startingBid'
                  value={newListing.startingBid}
                  onChange={_handleChange}
                  required
                />
                <label>Bid End Date</label>
                <input
                  type='datetime-local'
                  name='bidEndDate'
                  value={newListing.bidEndDate}
                  onChange={_handleChange}
                  required
                />
                <label> Upload Image </label>
                <input type="file" onChange={(e) => this.props.setImage(e.target.files[0])} />
                <button className='bg-[#ff9041]' type='submit'>
                  CREATE LISTING
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default AddListingForm;