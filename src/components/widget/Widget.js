import './widget.scss';

// ICONS 
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget( { type } ) {

  let data;

  switch(type){
    case 'user':
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlinedIcon className='icon' />,
      };
      break;

    case 'order':
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className='icon' />,
      };
      break;

    case 'earning':
      data = {
        title: "ERNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className='icon' />,
      };
      break;

    case 'balance':
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className='icon' />,
      };
      break;

    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>USERS</span>
        <span className='counter'>2345</span>
        <span className='link'>See all users</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon className='icon' />
          20%
        </div>
        <PersonOutlinedIcon className='icon' />
      </div>
    </div>
  )
}

export default Widget