import Navbar from '../components/navbar';
import Card from '../components/CardComponent';
import MasterPage from '../components/MaterLayout';
// import Loading from '../components/Loading';
const DashBoard=()=>{
    return(
    <MasterPage>

      <header className="App-header">
        <Navbar  name='Cheng Yang' />
      </header>
      
      <body >
      <Card/>
      </body>
      {/* <Loading/> */}
    </MasterPage>
    )
}

export default DashBoard