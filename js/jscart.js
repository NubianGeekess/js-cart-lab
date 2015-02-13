$(function () {

  window.Cart = {

    nametxt: null,

    pricetxt: null,

    qtytxt: null,

    addBtn: null,

    inventory: null,

    init: function(){
      Cart.nametxt = $('#name-text');
      Cart.pricetxt = $('#price-text');
      Cart.qtytxt = $('#qty-text');
      Cart.addBtn = $('#add-item');
    
      Cart.inventory = $('#inventory');
      var self = this;
      Cart.addBtn.on("click", function( event ){
          event.preventDefault();
          self.addToCart();

      });

    },

    addToCart: function(){

      var name = Cart.nametxt.val();
      var price = Cart.pricetxt.val();
      var qty = Cart.qtytxt.val();
      var h3 = $('<h3></h3>');
      var firstli = $('<li class="name"></li>');
      var secondli = $('<li class="price"></li>');
      var thirdli = $('<li class="qty"></li>');
      var fourthli = $('<li></li>');
      var fifthli = $('<li></li>');
      var ul = $('<ul></li>');
      var item = $('<div class="item"></div>');
      var editButton = $('<a href="#" class="edit">Edit Item</a>');
      var deleteButton = $('<a href="#" class="delete">Delete Item</a>');

      deleteButton.on("click", function(){
        var CartItem = $(this).parents(".item");
        CartItem.remove();
      });

      editButton.on("click", function(){
         var CartItem = $(this).parents(".item");
         var nameHolder = CartItem.find(".name");
         var priceHolder = CartItem.find(".price");
         var qtyHolder = CartItem.find(".qty");
         console.log( nameHolder, priceHolder, qtyHolder );

         var currentName = nameHolder.text();
         var currentPrice = priceHolder.text();
         var currentQty =qtyHolder.text();

         var priceeditTextBox = $('<input id="" />');
         var qtyeditTextBox = $('<input id=""/>');

         priceeditTextBox.val( currentPrice);
         qtyeditTextBox.val( currentQty );

         priceHolder.html( priceeditTextBox );
         qtyHolder.html( qtyeditTextBox );

         CartItem.keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
              priceHolder.text( priceeditTextBox.val() ); 
              qtyHolder.text( qtyeditTextBox.val() ); 
            }
          });
      });

      h3.text( name );
      firstli.append('Name: ' + name);
      secondli.append('Price: ' + price);
      thirdli.append('Quantity: ' + qty);
      fourthli.append( editButton );
      fifthli.append( deleteButton );
      ul.append(firstli);
      ul.append(secondli);
      ul.append(thirdli);
      ul.append( fourthli );
      ul.append( fifthli );
      item.append( h3 );
      item.append( ul );

      Cart.inventory.append( item );
      //console.log( Cart.inventory );
    }

  };

  Cart.init();

});