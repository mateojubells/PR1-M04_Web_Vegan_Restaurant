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

  document.getElementById('txt_servicios_FOHE').innerHTML = data.txt_servicios_FOHE;
  document.getElementById('txt_header_compras').innerHTML = data.txt_header_compras;
  document.getElementById('txt_sobreNosotros').innerHTML = data.txt_sobreNosotros;
  document.getElementById('txt_reserva').innerHTML = data.txt_reserva;
  document.getElementById('txt_Pedido').innerHTML = data.txt_Pedido;

  document.getElementById('txt_titoloForm').innerHTML = data.txt_titoloForm;
  document.getElementById('txt_contacta_con_nosotros').innerHTML = data.txt_contacta_con_nosotros;
  document.getElementById('txt_firstName').innerHTML = data.txt_firstName;
  document.getElementById('txt_lastName').innerHTML = data.txt_lastName;
  document.getElementById('txt_email').innerHTML = data.txt_email;
  document.getElementById('txt_diaDeReserva').innerHTML = data.txt_diaDeReserva;
  document.getElementById('txt_numPersonas').innerHTML = data.txt_numPersonas;
  document.getElementById('txt_masInfo').innerHTML = data.txt_masInfo;

}  