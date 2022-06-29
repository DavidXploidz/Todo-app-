import cross from '../images/icon-cross.svg'
import iconCheck from '../images/icon-check.svg'


const Listado = ({ items, removeItem, checked, active, completed, all}) => {

  return (
    <>
      {items.map((item) => {
        const { id, title, estado } = item;
        return (
        <>
        {active && (
          estado === false && (
            <article className=' flex justify-between items-center p-5   ' key={id}>
            <div className='flex justify-start items-center gap-x-10'>
                {estado ? (
                    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full p-3' onClick={() => checked(id)}>
                        <img src={iconCheck} alt="icon check" className='h-5 w-5'   />
                    </div>
                ) : (
                    <input 
                        type="radio" 
                        className='h-10 w-10 cursor-pointer'  
                        onClick={() => checked(id)}
                    />
                )}
                <p className={`text-VeryDarkGrayishBlue ${estado && 'line-through text-LightGrayishBlue'}`}>{title}</p>
            </div>
            <img 
                src={cross} alt="Icon cross" 
                onClick={() => removeItem(id)}
                className="cursor-pointer"
            />
        </article>
          )
        )} {/**Fin active */}

        {completed && (
          estado && (
            <article className=' flex justify-between items-center p-5   ' key={id}>
              <div className='flex justify-start items-center gap-x-10'>
                  {estado ? (
                      <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full p-3' onClick={() => checked(id)}>
                          <img src={iconCheck} alt="icon check" className='h-5 w-5'   />
                      </div>
                  ) : (
                      <input 
                          type="radio" 
                          className='h-10 w-10 cursor-pointer'  
                          onClick={() => checked(id)}
                      />
                  )}
                  <p className={`text-VeryDarkGrayishBlue ${estado && 'line-through text-LightGrayishBlue'}`}>{title}</p>
              </div>
              <img 
                  src={cross} alt="Icon cross" 
                  onClick={() => removeItem(id)}
                  className="cursor-pointer"
              />
          </article>
          )
        )} {/**Fin comletesd */}

        {all && (
            <article className=' flex justify-between items-center p-5   ' key={id}>
            <div className='flex justify-start items-center gap-x-10'>
                {estado ? (
                    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full p-3' onClick={() => checked(id)}>
                        <img src={iconCheck} alt="icon check" className='h-5 w-5'   />
                    </div>
                ) : (
                    <input 
                        type="radio" 
                        className='h-10 w-10 cursor-pointer'  
                        onClick={() => checked(id)}
                    />
                )}
                <p className={`text-VeryDarkGrayishBlue ${estado && 'line-through text-LightGrayishBlue'}`}>{title}</p>
            </div>
            <img 
                src={cross} alt="Icon cross" 
                onClick={() => removeItem(id)}
                className="cursor-pointer"
            />
        </article>
        )} {/**Fin completed */}
        </>
        );
      })}
    </>
  )
}

export default Listado