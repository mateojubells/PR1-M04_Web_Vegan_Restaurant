const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();


  document.getElementById('txt_header_servicios').innerHTML = data.txt_header_servicios;
  document.getElementById('txt_header_compras').innerHTML = data.txt_header_compras;
  document.getElementById('txt_header_sobreNosotros').innerHTML = data.txt_header_sobreNosotros;
  document.getElementById('txt_header_reserva').innerHTML = data.txt_header_reserva;
  document.getElementById('txt_footer_Pedido').innerHTML = data.txt_footer_Pedido;
  document.getElementById('txt_footer_servicios').innerHTML = data.txt_footer_servicios;
  document.getElementById('txt_footer_sobreNosotros').innerHTML = data.txt_footer_sobreNosotros;
  document.getElementById('txt_footer_reserva').innerHTML = data.txt_footer_reserva;


  document.getElementById('txt_servicios').innerHTML = data.txt_servicios;
  document.getElementById('txt_comerAqui').innerHTML = data.txt_comerAqui;
  document.getElementById('descripcion_menu').innerHTML = data.descripcion_menu;
  document.getElementById('txt_descripcion_takeAway').innerHTML = data.txt_descripcion_takeAway;

}  