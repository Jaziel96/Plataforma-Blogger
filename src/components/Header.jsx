import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold"> <Link to={'/'}>Plataforma Blogger</Link> </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white font-bold hover:bg-gray-700 px-3 py-2 rounded">Inicio</Link>
            </li>
            <li>
              <Link to="/post" className="text-white font-bold hover:bg-gray-700 px-3 py-2 rounded">Post</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;