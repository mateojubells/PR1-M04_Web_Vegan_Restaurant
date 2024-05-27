document.addEventListener('DOMContentLoaded', function() {
  const querystring = window.location.search; 
  const urlParams = new URLSearchParams(querystring);
  if (urlParams.get('lang')) {
    const lang = urlParams.get('lang');
    changeLanguage(lang);
  }
});

async function changeLanguage(lang) {
  // Guardar el idioma en la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

  const buttons = document.getElementsByClassName('product-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = data['txt_BtnAdd' + (i + 1)];
  }


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
  document.getElementById('txt_BtnAdd').innerHTML = data.txt_BtnAdd;
  document.getElementById('txt_BtnAdd1').innerHTML = data.txt_BtnAdd1;
  document.getElementById('txt_BtnAdd2').innerHTML = data.txt_BtnAdd2;
  document.getElementById('txt_BtnAdd3').innerHTML = data.txt_BtnAdd3;
  document.getElementById('txt_BtnAdd4').innerHTML = data.txt_BtnAdd4;
  document.getElementById('txt_BtnAdd5').innerHTML = data.txt_BtnAdd5;
  document.getElementById('txt_BtnAdd6').innerHTML = data.txt_BtnAdd6;
  document.getElementById('txt_BtnAdd7').innerHTML = data.txt_BtnAdd7;
  document.getElementById('txt_BtnAdd8').innerHTML = data.txt_BtnAdd8;
}
