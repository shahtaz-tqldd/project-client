import { Menu, MenuItem } from '@mui/material';
import { IoLogOut } from 'react-icons/io5';
import { userLoggedOut } from '../../feature/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Profilemenu = ({ openMenu, handleMenuClose, options, onClick }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
  };
  const { user } = useSelector((state) => state?.auth);

  return (
    <div className='relative'>
      {
        openMenu && (
          <div className='h-4 w-4 bg-[#e9f8f8] rotate-45 absolute top-4 lg:right-10 md:right-10 right-2'></div>
        )
      }
      <Menu
        id="basic-menu"
        sx={{ opacity: 0.98 }}
        disableScrollLock={true}
        anchorEl={openMenu}
        open={Boolean(openMenu)}
        onClose={handleMenuClose}
        className='relative'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            borderRadius: '8px',
            backgroundImage: 'linear-gradient(45deg, #ffedf7, #e7faf9)',
          },
        }}
      >
        <div className='px-4 py-2 border-b border-dashed border-gray-300 mb-3'>
          <h2 className='text-gray-700 font-medium'>{user?.fullname}</h2>
          <p className='text-sm text-gray-500 font-normal'>{user?.email}</p>
        </div>
        {options?.map((option, index) => (
          <MenuItem sx={{ fontSize: '15px', minWidth: '200px' }} key={index} onClick={(event) => onClick(event, option)}>
            <div className="flex items-center gap-2 text-md text-gray-800">
              <option.icon className={`text-xl ${option.color ? `text-${option.color}-500` : 'text-gray-500'}`} />
              <span className="px-1">{option?.item}</span>
            </div>
          </MenuItem>
        ))}
        <div className='border-t mt-3 mb-2 border-gray-300 border-dashed'>
          <MenuItem sx={{ fontSize: '15px', minWidth: '200px' }} onClick={handleLogout}>
            <div className="flex items-center gap-2 tex text-md text-gray-800">
              <IoLogOut className={`text-xl text-red-500 rotate-180`} />
              <span className="px-1 text-red-500">Logout</span>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default Profilemenu;
