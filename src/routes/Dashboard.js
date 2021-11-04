import Navbar from '../components/navbar';
import Card from '../components/CardComponent';
import MasterPage from '../components/MaterLayout';
import Category from '../components/Category';
import AddBtn from '../components/AddBtn';
// import Loading from '../components/Loading';
const DashBoard=()=>{
  const CategoryList=[
    {
      name:'Test',
      color:'red',
      completedTask:2,
      totalTasks:3
    }
  ]
    return(
    <MasterPage>

        <div className='App-header'>

        <Navbar  name='Cheng Yang' />
        </div>
      <Card/>
      {/* <div className='AddCategoryContainer'>
        <h3 >Categories</h3>
        <div className="addBtnContainer">
        <AddBtn/>
            <h3>New Category</h3>
        </div>
      </div>
      <div className='catergoryContainer'>
        {CategoryList.map(w=>

<Category color={w.color} name={w.name} completedTask={w.completedTask} TotalTasks={w.totalTasks}/>
        )
        }
      </div> */}
      {/* <Loading/> */}
    </MasterPage>
    )
}

export default DashBoard