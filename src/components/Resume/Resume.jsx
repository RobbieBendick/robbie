import { useEffect } from 'react';
import resume from "../../Assets/Robert's_Resume.pdf";
import './Resume.scss';

function Resume() {
  useEffect(() => {
    document.title = "Robert's Resume";
  }, []);

  return (
    <div className='resume-container'>
      <div className='resume'>
        <iframe
          name='resume'
          title='resume'
          type='application/pdf'
          src={resume}
          frameborder='0'
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
