import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

const App = () => {
	return (
	  <main className="bg-slate-300/20">
		<Router>
		  <Navbar />
		  <Routes>
			<Route path='/' element={<Home />} />
			<Route
			  path='/*'
			  element={
				<>
				  <Routes>
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				  </Routes>
				</>
			  }
			/>
		  </Routes>
		</Router>
	  </main>
	);
  };
  
  export default App;