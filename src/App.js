const App = () => (
  <div className='grid place-items-center h-screen'>
    <div className='card'>
      <h3 className='card-title'>Howdy, this is my UI Library!!!</h3>
      <div className='card-body'>
        <p className='card-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
          provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
        <div>
          <button className='btn'>Default</button>
          <button className='btn btn-primary'>Primary</button>
          <button className='btn btn-secondary'>Secondary</button>
          <button className='btn btn-accent'>Accent</button>
          <button className='btn btn-info'>Info</button>
          <button className='btn btn-success'>Success</button>
          <button className='btn btn-warning'>Warning</button>
          <button className='btn btn-error'>Error</button>
        </div>
        <div>
          <button className='btn btn-gradient'>Default</button>
          <button className='btn btn-gradient btn-primary'>Primary</button>
          <button className='btn btn-gradient btn-secondary'>Secondary</button>
          <button className='btn btn-gradient btn-accent'>Accent</button>
          <button className='btn btn-gradient btn-info'>Info</button>
          <button className='btn btn-gradient btn-success'>Success</button>
          <button className='btn btn-gradient btn-warning'>Warning</button>
          <button className='btn btn-gradient btn-error'>Error</button>
        </div>

      </div>
      <span className='card-border border-gradient'></span>
    </div>

    <h1 className='text-gradient-to-r'>Howdy sir!</h1>

    <div className='card'>
      <h3 className='card-title'>Howdy, this is my UI Library!!!</h3>
      <div className='card-body'>
        <p className='card-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
          provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
      </div>
    </div>
  </div>
);

export default App;
