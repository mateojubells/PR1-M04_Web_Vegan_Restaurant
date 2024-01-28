// Obtener el idioma de la URL si existe y ejecutar la función "changeLanguage"
const querystring = window.location.search; // Si la URL es: https://miweb.es?lang=es, retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar el idioma en la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtener el archivo json correspondiente
  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

  // Cambiar los textos
  document.getElementById('txt_header_servicios').innerHTML = data.txt_header_servicios;
  document.getElementById('txt_header_compras').innerHTML = data.txt_header_compras;
  document.getElementById('txt_header_sobreNosotros').innerHTML = data.txt_header_sobreNosotros;
  document.getElementById('txt_header_reserva').innerHTML = data.txt_header_reserva;
  document.getElementById('txt_footer_Pedido').innerHTML = data.txt_footer_Pedido;
  document.getElementById('txt_footer_servicios').innerHTML = data.txt_footer_servicios;
  document.getElementById('txt_footer_sobreNosotros').innerHTML = data.txt_footer_sobreNosotros;
  document.getElementById('txt_footer_reserva').innerHTML = data.txt_footer_reserva;


  document.getElementById('txt_section1').innerHTML = data.txt_section1;
  document.getElementById('txt_section2').innerHTML = data.txt_section2;
  document.getElementById('txt_comerAquiIndex').innerHTML = data.txt_comerAquiIndex;
  document.getElementById('txt_descripcioComerAqui').innerHTML = data.txt_descripcioComerAqui;
  document.getElementById('txt_takeAwayIndex').innerHTML = data.txt_takeAwayIndex;
  document.getElementById('txt_disfrutaCasa').innerHTML = data.txt_disfrutaCasa;
  document.getElementById('txt_verMas').innerHTML = data.txt_verMas;
}
