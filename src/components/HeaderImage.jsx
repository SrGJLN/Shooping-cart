import Imagen from '../assets/imgs/imagen.png'
const HeaderImage = () => {
  return (
    <div className="Imagen">
      <div className="thumbnail text-center">
      <img src={Imagen} alt="imagen-back" className='imagen-back'/>
      <div className="caption">
      <h1 className='text-banner_1'>Pizzeria Mama Mia</h1>
      <h3 className='text-banner_2'>!Tenemos las mejores pizzas que podras encontrar¡</h3>
      </div>
      </div>
    </div>
  );
};

export default HeaderImage;