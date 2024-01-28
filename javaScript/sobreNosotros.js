// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtenir el fitxer json corresponent
  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

  // Canviar els texts (Aquesta és la part que heu de modificar)

  document.getElementById('txt_header_servicios').innerHTML = data.txt_header_servicios;
  document.getElementById('txt_header_compras').innerHTML = data.txt_header_compras;
  document.getElementById('txt_header_sobreNosotros').innerHTML = data.txt_header_sobreNosotros;
  document.getElementById('txt_header_reserva').innerHTML = data.txt_header_reserva;
  document.getElementById('txt_footer_Pedido').innerHTML = data.txt_footer_Pedido;
  document.getElementById('txt_footer_servicios').innerHTML = data.txt_footer_servicios;
  document.getElementById('txt_footer_sobreNosotros').innerHTML = data.txt_footer_sobreNosotros;
  document.getElementById('txt_footer_reserva').innerHTML = data.txt_footer_reserva;

  //cambiar

  document.getElementById('txt_nuestraHistoria').innerHTML = data.txt_nuestraHistoria;
  document.getElementById('txt_textIntroduccio').innerHTML = data.txt_textIntroduccio;
  document.getElementById('txt_nuestraFilosofia').innerHTML = data.txt_nuestraFilosofia;
  document.getElementById('txt_textIntroduccio2').innerHTML = data.txt_textIntroduccio2;

}  