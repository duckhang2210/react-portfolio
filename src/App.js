import Intro from './components/intro/Intro.component';
import About from './components/about/About.component';
import { ProductList } from './components/productList/ProductList';

function App() {
	return (
		<div className='App'>
			<Intro />
			<About />
			<ProductList />
		</div>
	);
}

export default App;
