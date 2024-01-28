const querystring = window.location.search; 
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar el idioma en la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();


  document.getElementById('txt_header_menu').innerHTML = data.txt_header_menu;
  document.getElementById('txt_header_productoEspecial').innerHTML = data.txt_header_productoEspecial;
  document.getElementById('txt_header_pedido').innerHTML = data.txt_header_pedido;

  document.getElementById('txt_footer_Pedido').innerHTML = data.txt_footer_Pedido;
  document.getElementById('txt_footer_servicios').innerHTML = data.txt_footer_servicios;
  document.getElementById('txt_footer_sobreNosotros').innerHTML = data.txt_footer_sobreNosotros;
  document.getElementById('txt_footer_reserva').innerHTML = data.txt_footer_reserva;

  // Nuevos cambios
  document.getElementById('txt_bebidaRefrescante').innerHTML = data.txt_bebidaRefrescante;
  document.getElementById('txt_bebidaRefrescanteDesc').innerHTML = data.txt_bebidaRefrescanteDesc;
  document.getElementById('txt_puddingChia').innerHTML = data.txt_puddingChia;
  document.getElementById('txt_puddingChiaDesc').innerHTML = data.txt_puddingChiaDesc;
  document.getElementById('txt_hamburguesaVegana').innerHTML = data.txt_hamburguesaVegana;
  document.getElementById('txt_hamburguesaVeganaDesc').innerHTML = data.txt_hamburguesaVeganaDesc;
  document.getElementById('txt_ensaladaFresca').innerHTML = data.txt_ensaladaFresca;
  document.getElementById('txt_ensaladaFrescaDesc').innerHTML = data.txt_ensaladaFrescaDesc;
  document.getElementById('txt_smoothie').innerHTML = data.txt_smoothie;
  document.getElementById('txt_smoothieDesc').innerHTML = data.txt_smoothieDesc;
  document.getElementById('txt_pizza').innerHTML = data.txt_pizza;
  document.getElementById('txt_pizzaDesc').innerHTML = data.txt_pizzaDesc;
  document.getElementById('txt_tacos').innerHTML = data.txt_tacos;
  document.getElementById('txt_tacosDesc').innerHTML = data.txt_tacosDesc;
  document.getElementById('txt_pastelChoco').innerHTML = data.txt_pastelChoco;
  document.getElementById('txt_pastelChocoDesc').innerHTML = data.txt_pastelChocoDesc;
  document.getElementById('txt_ofertaEspecial').innerHTML = data.txt_ofertaEspecial;
  document.getElementById('txt_ofertaEspecialDesc').innerHTML = data.txt_ofertaEspecialDesc;
}
