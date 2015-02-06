'use strict';

describe(' Cart :', function(){

  describe(' Adding to cart', function(){

    beforeEach( function(){
      this.Cart = Cart;
      this.Cart.init();
    });

    afterEach( function(){
      this.Cart = undefined;
    });

    it("should be Empty", function(){
      expect( this.Cart.cartList.children('.item').length).toBe(0);
    });

    it("should add an Item", function(){
      this.Cart.nametxt.val("Prosper");
      this.Cart.pricetxt.val(45);
      this.Cart.qtytxt.val(33);
      this.Cart.addButton.trigger("click");
      expect( this.Cart.cartList.children('.item').length).toBe(1);
    });

    it("should have the text values in the item match text in the input", function(){
      this.Cart.nametxt.val("Goodness");
      this.Cart.pricetxt.val(55);
      this.Cart.qtytxt.val(21);
      this.Cart.addButton.trigger("click");
      expect( this.Cart.cartList.children('.item').last().find('h3').text()).toBe("Goodness");
      expect( this.Cart.cartList.children('.item').last().find('.price').text()).toBe(55..toString());
      expect( this.Cart.cartList.children('.item').last().find('.qty').text()).toBe(21..toString());
    });

  });

  describe('Updating the Cart', function(){

  });


  describe('Removing from Cart', function(){

    beforeEach( function(){
      this.Cart = Cart;
      this.Cart.init();
    });

    afterEach( function(){
      this.Cart = undefined;
    });

    it("should not be empty", function(){
      expect( this.Cart.cartList.children('.item').length).toBeGreaterThan(0);
    });

    it("should remove all items", function(){
      this.Cart.cartList.children('.item').remove();
      expect( this.Cart.cartList.children('.item').length).toBe(0);
    });
    
  });

});