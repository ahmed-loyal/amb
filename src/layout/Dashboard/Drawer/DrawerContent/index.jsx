// project import
// import NavCard from './NavCard'; use this when you need to create a nav card
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
        {/* <NavCard /> */}
      </SimpleBar>
    </>
  );
}
