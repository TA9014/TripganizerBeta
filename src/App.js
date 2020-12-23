import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from '../src/Containers/PrivateRoutes'
import { AuthProvider } from '../src/auth/Auth'


function App() {
  // const userRef = firestore.collection('users');
  // const [data, setData] = useState([]);
  // const allData = [];

  // const getData = () => {
  //   userRef.get().then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       allData.push({ id: doc.id, ...doc.data() })
  //       console.log(doc.data()) //doc.data เรียกข้อมูลทุก field
  //     })
  //     console.log(allData)
  //     setData(allData)
  //   })
  // }

  // useEffect(
  //   getData
  //   , [])


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <PrivateRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
