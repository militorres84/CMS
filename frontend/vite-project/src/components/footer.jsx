import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='#D9D9D9' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Ayuda</h5>
          <ul className='list-unstyled mb-0'>
            <li>
              <a href='#!' className='text-white'>
           ¿Como hacer un blog?
            </a>
            </li>
          </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Comunidad</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                 ¿Quienes somos?
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Desarrolladoras</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Miembros
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#8E9DCC' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://github.com/Ysluna/CMS'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
