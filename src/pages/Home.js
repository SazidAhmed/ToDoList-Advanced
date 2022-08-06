
//components
import UserTable from '../components/crew/UserTable';
import CrewForm from '../components/crew/CrewForm';

function Home() {
  
  return (
    <div className="container-fluid">
      <div className="row">
        <h5 className='mt-5'>Click to copy and paste to the input field : </h5>
        <div className="col col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-3">
          <UserTable />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <CrewForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
