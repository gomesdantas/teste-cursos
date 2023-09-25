import '../components/welcome.scss';
import { Link } from 'react-router-dom';

const Welcome = () => {

  return (
    <div className='wel' id="Welcome">


      <Link to={'/'}>
<h2 id='title'>ISNSF</h2>
</Link>
<div>
<p className='titulo'>FEIRA DAS PROFISSÕES</p>

</div>

<img className="logoisnsf" src="/ASSETS/IMAGES/logo.png" alt="" />
     

    </div>
  );

}

export default Welcome