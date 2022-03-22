import './new.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add New User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img 
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' alt='' 
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }}/>
              </div>
              <div className='formInput'>
                <label>First and Last Name</label>
                <input type='text' placeholder='John DOe' />
              </div>
              <div className='formInput'>
                <label>Username</label>
                <input type='text' placeholder='john_doe' />
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='text' placeholder='john_doe@gmail.com' />
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='text' placeholder='+1 234 456 7890' />
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='text' placeholder='********' />
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='text' placeholder='5890 Loblolly' />
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder='USA' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New