import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

/* eslint-disable import/prefer-default-export */
export const onInitialClientRender = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
};

