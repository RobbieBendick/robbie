import './Home.scss';

function Home() {

  return (
    <div className='pad'>
        <section className='home'>
            <div>
                <h1 className="light-blue-color" style={{"fontSize": 'clamp(14px,5vw,16px)'}}>Hi, my name is</h1>
            </div>
            <div>
                <h1 className='big-heading light-slate-color'>Robert Bendick.</h1>
            </div>
            <div>
                <h3 className='big-heading'>I build things for the web.</h3>
            </div>
            <div>
                <p className='about-me-header'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products</p>
            </div>
            <div>
                <button className='button-header'>Check out my work! <i class="fa-solid fa-arrow-down" style={{"paddingLeft": "7px"}}></i></button>
            </div>
        </section>
    </div>
  );
}

export default Home;
