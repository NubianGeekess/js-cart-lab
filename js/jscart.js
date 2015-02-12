$(document).ready(function(){

   window.Cart = {
     nametxt :  $('input#nametxt'),
     pricetxt : $('input#pricetxt'),
     qtytxt : $('input#qtytxt'),
     addButton : $('input#addbtn'),
     prototypeItem : $('#prototype-item'),
     item: null,
 
     init: function(){
      var self = this;

       this.prototypeItem.detach();
       this.cartList = $('#inventory');
       this.addButton.off().on('click', function (event) {
         event.preventDefault();

         var nameText = Cart.nametxt.val();
         var priceText = Cart.pricetxt.val();
         var qtyText = Cart.qtytxt.val();

         Cart.item = Cart.prototypeItem.clone();
         Cart.item.find('h3').text( nameText );
         Cart.item.find('.price').text( priceText );
         Cart.item.find('.qty').text( qtyText );
         self.cartList.append(Cart.item);

        // Delete item from the list
         var deleteBtn = Cart.item.find('a.delete');
         deleteBtn.on('click', function( event){
         event.preventDefault();
         console.log("removing...");

         // Delete item from the list
         var listItem = this.parentNode;
         var ul = listItem.parentNode;
         var thisItem = ul.parentNode;
         thisItem.remove();
         });

         // Update item in the list
         var editBtn = Cart.item.find('a.edit');
         editBtn.on('click', function(){
           event.preventDefault();
           console.log("editing...");

           var listItem = $(this).parent();
           var ul = listItem.parent();
           var priceBlock = ul.find('span.price');
           var qtyBlock = ul.find('span.qty');
           var qty_text = qtyBlock.text();
           var text = priceBlock.text();
          
           //Swap the values with a textbox of the values
           qtyBlock.empty();
           priceBlock.empty();
           priceBlock.append("<input type='text' size='5' class='priceval' value='" + text + "'></input>");
           qtyBlock.append("<input type='text' size='5' class='qtyval' value='" + qty_text + "'></input>");

           // When the Enter button is pressed, update the values of the text field
           $('.priceval').keypress( function( event ) {
             var keycode = (event.keyCode ? event.keyCode : event.which);
             if( keycode == 13){
               priceBlock.empty().append( $(this).val() );
             }
           });
           $('.qtyval').keypress( function( event ) {
             var keycode = (event.keyCode ? event.keyCode : event.which);
             if( keycode == 13){
               qtyBlock.empty().append( $(this).val() );
             }
           });
         });


         Cart.nametxt.val('').focus();
       });

      
     }
   };

   Cart.init();

});
