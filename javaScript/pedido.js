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

  document.getElementById('txt_header_menu').innerHTML = data.txt_header_menu;
  document.getElementById('txt_header_productoEspecial').innerHTML = data.txt_header_productoEspecial;
  document.getElementById('txt_header_pedido').innerHTML = data.txt_header_pedido;
  document.getElementById('txt_header_menu1').innerHTML = data.txt_header_menu1;
  document.getElementById('txt_header_productoEspecial1').innerHTML = data.txt_header_productoEspecial1;
  document.getElementById('txt_header_pedido1').innerHTML = data.txt_header_pedido1;

  document.getElementById('txt_footer_Pedido').innerHTML = data.txt_footer_Pedido;
  document.getElementById('txt_footer_servicios').innerHTML = data.txt_footer_servicios;
  document.getElementById('txt_footer_sobreNosotros').innerHTML = data.txt_footer_sobreNosotros;
  document.getElementById('txt_footer_reserva').innerHTML = data.txt_footer_reserva;

  // Nuevos cambios
  document.getElementById('txt_tuPedido').innerHTML = data.txt_tuPedido;
  document.getElementById('txt_bebidaRefrescantePedido').innerHTML = data.txt_bebidaRefrescantePedido;
  document.getElementById('txt_snackSaludable').innerHTML = data.txt_snackSaludable;
  document.getElementById('txt_ensaladaFrescaPedido').innerHTML = data.txt_ensaladaFrescaPedido;
  document.getElementById('txt_sopaNutritiva').innerHTML = data.txt_sopaNutritiva;
  document.getElementById('txt_batidoEnergizante').innerHTML = data.txt_batidoEnergizante;
  document.getElementById('txt_platoVeganoVariado').innerHTML = data.txt_platoVeganoVariado;
  document.getElementById('txt_total').innerHTML = data.txt_total;
  document.getElementById('payButton').innerHTML = data.payButton;
}
