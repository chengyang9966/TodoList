import Navbar from '../components/navbar';
import Card from '../components/CardComponent';
import MasterPage from '../components/MaterLayout'
const DashBoard=()=>{
    return(
    <MasterPage>

      <header className="App-header">
        <Navbar  name='Cheng Yang' />
      </header>
      
      <body >
      <Card/>
      </body>
    </MasterPage>
    )
}

export default DashBoard