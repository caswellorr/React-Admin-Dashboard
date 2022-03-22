import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>
      </div>
    </div>
  )
}

export default Home