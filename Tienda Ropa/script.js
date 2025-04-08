// Array de productos de ejemplo
const allProducts = [
    // OBJETOS (9 productos)
    { id: 1, category: 'objetos', name: 'Rollo de Cinta de Pelicula', image: 'IMG/Objetos/objeto1.jpg' },
    { id: 2, category: 'objetos', name: 'Claqueta', image: 'IMG/Objetos/objeto2.jpg' },
    { id: 3, category: 'objetos', name: 'Megafono', image: 'IMG/Objetos/objeto3.jpg' },
    { id: 4, category: 'objetos', name: 'Camara de cine', image: 'IMG/Objetos/objeto4.jpg' },
    { id: 5, category: 'objetos', name: 'Gafas de cine 3d', image: 'IMG/Objetos/objeto5.jpg' },
    { id: 6, category: 'objetos', name: 'Poster Vintage', image: 'IMG/Objetos/objeto6.jpg' },
    { id: 7, category: 'objetos', name: 'Televisor aniguo', image: 'IMG/Objetos/objeto7.jpg' },
    { id: 8, category: 'objetos', name: 'Carton de Palomitas', image: 'IMG/Objetos/objeto8.jpg' },
    { id: 9, category: 'objetos', name: 'Silla', image: 'IMG/Objetos/objeto9.jpg' },
    // ROPA (9 productos)
    { id: 10, category: 'ropa', name: 'Camisa Trollface', image: 'IMG/Ropa/Ropa1.jpg' },
    { id: 11, category: 'ropa', name: 'Camisa Sena', image: 'IMG/Ropa/Ropa2.jpg' },
    { id: 12, category: 'ropa', name: 'Camisa ACDC', image: 'IMG/Ropa/Ropa3.jpg' },
    { id: 13, category: 'ropa', name: 'Pantalón Jean', image: 'IMG/Ropa/Ropa4.jpg' },
    { id: 14, category: 'ropa', name: 'Pantalón Jogger', image: 'IMG/Ropa/Ropa5.jpg' },
    { id: 15, category: 'ropa', name: 'Pantalón Pantaloneta', image: 'IMG/Ropa/Ropa6.jpg' },
    { id: 16, category: 'ropa', name: 'Zapatos JOJOs', image: 'IMG/Ropa/Ropa7.png' },
    { id: 17, category: 'ropa', name: 'Tacones Bota Teletubbies', image: 'IMG/Ropa/Ropa8.jpg' },
    { id: 18, category: 'ropa', name: 'Pantuflas FNAF', image: 'IMG/Ropa/Ropa9.jpg' },
    // ACCESORIOS (9 productos)
    { id: 19, category: 'accesorios', name: 'Ojo de Agamotto', image: 'IMG/Accesorios/Accesorio1.jpg' },
    { id: 20, category: 'accesorios', name: 'Flecha Stand', image: 'IMG/Accesorios/Accesorio2.jpg' },
    { id: 21, category: 'accesorios', name: 'Espada Minecraft', image: 'IMG/Accesorios/Accesorio3.jpg' },
    { id: 22, category: 'accesorios', name: 'Anillo Linterna Verde', image: 'IMG/Accesorios/Accesorio4.jpg' },
    { id: 23, category: 'accesorios', name: 'Reloj Ben 10', image: 'IMG/Accesorios/Accesorio5.jpg' },
    { id: 24, category: 'accesorios', name: 'Audifonos Miku', image: 'IMG/Accesorios/Accesorio6.jpg' },
    { id: 25, category: 'accesorios', name: 'Reactor Arc', image: 'IMG/Accesorios/Accesorio7.jpg' },
    { id: 26, category: 'accesorios', name: 'Gorra Jurassic Park', image: 'IMG/Accesorios/Accesorio8.jpg' },
    { id: 27, category: 'accesorios', name: 'Colar Autobots/Decepticons', image: 'IMG/Accesorios/Accesorio9.jpg' },
    // FIGURAS (9 productos)
    { id: 28, category: 'figuras', name: 'Figura de Indiana Jones', image: 'IMG/Figuras/Figura1.jpg' },
    { id: 29, category: 'figuras', name: 'Figura de Hatsune Miku', image: 'IMG/Figuras/Figura2.jpg' },
    { id: 30, category: 'figuras', name: 'Figura de Chubaca', image: 'IMG/Figuras/Figura3.jpg' },
    { id: 31, category: 'figuras', name: 'Figura de Terminator T-850', image: 'IMG/Figuras/Figura4.jpg' },
    { id: 32, category: 'figuras', name: 'Figura de Robocop', image: 'IMG/Figuras/Figura5.jpg' },
    { id: 33, category: 'figuras', name: 'Figura de Iron Man', image: 'IMG/Figuras/Figura6.jpg' },
    { id: 34, category: 'figuras', name: 'Figura de Star Platinum', image: 'IMG/Figuras/Figura7.jpg' },
    { id: 35, category: 'figuras', name: 'Figura de Springtrap', image: 'IMG/Figuras/Figura8.jpg' },
    { id: 36, category: 'figuras', name: 'Figura de Godzilla', image: 'IMG/Figuras/Figura9.jpg' },
  ];
  
 // Carrito (array de objetos)
let cart = [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const stored = localStorage.getItem('cart');
  cart = stored ? JSON.parse(stored) : [];
}

function updateCartCount() {
  loadCart();
  $('#cart-count').text(cart.length);
}

function goToCategory(category) {
  window.location.href = `category.html?cat=${category}`;
}

function loadCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat');
  $('#categoryTitle').text(category.toUpperCase());

  const products = allProducts.filter(p => p.category === category);
  const $productGrid = $('#productGrid');
  $productGrid.empty();

  $.each(products, function(index, product) {
    const productHTML = `
      <div class="product-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <p>$${product.price || '10.000'}</p>
        <h3>${product.name}</h3>
        <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
      </div>
    `;
    $productGrid.append(productHTML);
  });
}

function filterProducts() {
  const searchText = $('#searchInputCategory').val().toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat');
  const products = allProducts.filter(p => p.category === category && p.name.toLowerCase().includes(searchText));
  const $productGrid = $('#productGrid');
  $productGrid.empty();

  $.each(products, function(index, product) {
    const productHTML = `
      <div class="product-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <p>$${product.price || '10.000'}</p>
        <h3>${product.name}</h3>
        <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
      </div>
    `;
    $productGrid.append(productHTML);
  });
}

function addToCart(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  cart.push(product);
  saveCart();
  updateCartCount();
  alert(`Agregaste: ${product.name} al carrito.`);
}

function loadCartPage() {
    loadCart();
    const $cartItems = $('#cartItems');
    $cartItems.empty();
  
    if (cart.length === 0) {
      $cartItems.html('<p>No hay productos en el carrito.</p>');
      return;
    }
  
    $.each(cart, function(index, product) {
      const itemHTML = `
        <div class="cart-card">
          <img src="${product.image}" alt="${product.name}" class="cart-image" />
          <div class="cart-info">
            <h3>${product.name}</h3>
            <p>$${product.price || '10.000'}</p>
            <button class="remove-btn" data-index="${index}">Eliminar</button>
          </div>
        </div>
      `;
      $cartItems.append(itemHTML);
    });
  }
  

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  loadCartPage();
}

function completePurchase() {
  cart = [];
  saveCart();
  updateCartCount();
  window.location.href = 'success.html';
}

function handleGlobalSearch(inputId) {
  $(`#${inputId}`).on('keypress', function(e) {
    if (e.which === 13) {
      const query = $(this).val().trim();
      if (query !== '') {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });
}

function loadSearchResults() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q');
  if (!query) return;

  $('#searchQueryText').text(query);

  const results = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const $searchResults = $('#searchResults');
  $searchResults.empty();

  if (results.length === 0) {
    $searchResults.html('<p>No se encontraron productos.</p>');
    return;
  }

  $.each(results, function(index, product) {
    const productHTML = `
      <div class="product-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <p>$${product.price || '10.000'}</p>
        <h3>${product.name}</h3>
        <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
      </div>
    `;
    $searchResults.append(productHTML);
  });
}

// 🧠 Mostrar modal al hacer clic en un producto
function showProductModal(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  $('#modalProductImage').attr('src', product.image);
  $('#modalProductName').text(product.name);
  $('#modalProductPrice').text(`$${product.price || 'N/A'}`);
  $('#modalProductDesc').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat.');

  $('#productModal').fadeIn();
}

function hideProductModal() {
  $('#productModal').fadeOut();
}

// INIT
$(document).ready(function() {
  updateCartCount();

  $('.card').on('click', function() {
    const category = $(this).data('category');
    goToCategory(category);
  });

  $('#searchInputCategory').on('keyup', filterProducts);

  $('#productGrid, #searchResults').on('click', '.add-to-cart-btn', function(e) {
    e.stopPropagation();
    const productId = parseInt($(this).data('id'));
    addToCart(productId);
  });

  // ✅ Mostrar modal desde categoría o búsqueda
  $('#productGrid, #searchResults').on('click', '.product-item', function(e) {
    const productId = parseInt($(this).data('id'));
    showProductModal(productId);
  });

  $('#cartItems').on('click', '.remove-btn', function() {
    const index = $(this).data('index');
    removeFromCart(index);
  });

  $('#checkoutBtn').on('click', function() {
    window.location.href = 'checkout.html';
  });

  $('#completePurchaseBtn').on('click', completePurchase);

  $('#modalCloseBtn').on('click', hideProductModal);

  if (window.location.pathname.includes('category.html')) {
    loadCategoryPage();
  }

  if (window.location.pathname.includes('cart.html')) {
    loadCartPage();
  }

  if (window.location.pathname.includes('search.html')) {
    loadSearchResults();
  }

  if (window.location.pathname.includes('checkout.html')) {
    $('#checkoutForm').on('submit', function(e) {
      e.preventDefault();
      completePurchase(); // Vacía carrito y redirige a success.html
    });
  }


  handleGlobalSearch('searchInputIndex');
  handleGlobalSearch('searchInputHeader');
});
