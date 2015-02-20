'use strict';

describe("Application Skeleton: ", function(){

    describe("Add To Cart Form: ", function(){

        it("should have an element with id 'addToCart' ", function(){
            var form = $('#addToCart');
            expect( form[0].id ).not.toBe("");
        });
        it("the element with id 'addToCart' should be a form", function(){
            var form = $('#addToCart');
            expect( form[0].nodeName ).toBe("FORM");
        });
        it("the form should not be inside the Inventory container", function(){
            var form = $('#addToCart');
            expect( form.parent("div#cart")).not.toBe("inventory");
        });

        // check for Name Field inputs
        it("should have a text field with an id of 'name-text' ", function(){
            var nameField = $('#name-text');
            expect( nameField[0].id).toBe("name-text");
        });
        it("text field of id 'name-text' should be an input element", function(){
           var nameField = $('#name-text');
           expect( nameField[0].nodeName).toBe("INPUT");
        });
        it("text field of id 'name-text' should be an input element of type = 'text' ", function(){
           var nameField = $('#name-text');
           expect( nameField[0].type).toBe("text");
        });
        it("text field of id 'name-text' should be inside the form", function(){
           var nameField = $('#name-text');
           expect( nameField.parents("form").attr("id")).toBe("addToCart");
        });
        //  check for corresponding Labels
        it("should have a label called 'Name' before the 'name-text' input field", function(){
           var namelabel = $('#name-text').prev();
           expect( namelabel[0].innerHTML).toBe("Name: ");
        });

        // check for Price Field inputs
        it("should have a text field with an id of 'price-text' ", function(){
            var priceField = $('#price-text');
            expect( priceField[0].id).toBe("price-text");
        });
        it("text field of id 'price-text' should be an input element", function(){
           var priceField = $('#price-text');
           expect( priceField[0].nodeName).toBe("INPUT");
        });
        it("text field of id 'price-text' should be an input element of type = 'text' ", function(){
           var priceField = $('#price-text');
           expect( priceField[0].type).toBe("text");
        });
        it("text field of id 'price-text' should be inside the form", function(){
           var priceField = $('#price-text');
           expect( priceField.parents("form").attr("id")).toBe("addToCart");
        });
        //  check for corresponding Labels
        it("should have a label called 'Price' before the 'price-text' input field", function(){
           var pricelabel = $('#price-text').prev();
           expect( pricelabel[0].innerHTML).toBe("Price: ");
        });

        // check for Quantity Field inputs
        it("should have a text field with an id of 'qty-text' ", function(){
            var qtyField = $('#qty-text');
            expect( qtyField[0].id).toBe("qty-text");
        });
        it("text field of id 'qty-text' should be an input element", function(){
           var qtyField = $('#qty-text');
           expect( qtyField[0].nodeName).toBe("INPUT");
        });
        it("text field of id 'qty-text' should be an input element of type = 'text' ", function(){
           var qtyField = $('#qty-text');
           expect( qtyField[0].type).toBe("text");
        });
        it("text field of id 'qty-text' should be inside the form", function(){
           var qtyField = $('#qty-text');
           expect( qtyField.parents("form").attr("id")).toBe("addToCart");
        });
        //  check for corresponding Labels
        it("should have a label called 'Qty' before the 'qty-text' input field", function(){
           var qtylabel = $('#qty-text').prev();
           expect( qtylabel[0].innerHTML).toBe("Qty: ");
        });

        // check for Button Field inputs
        it("should have a button field with an id of 'add-item' ", function(){
            var btnField = $('#add-item');
            expect( btnField[0].id).toBe("add-item");
        });
        it("button field of id 'add-item' should be an input element", function(){
           var btnField = $('#add-item');
           expect( btnField[0].nodeName).toBe("INPUT");
        });
        it("button field of id 'btn-text' should be an input element of type = 'submit' ", function(){
           var btnField = $('#add-item');
           expect( btnField[0].type).toBe("submit");
        });
        it("button field of id 'add-item' should be inside the form", function(){
           var btnField = $('#add-item');
           expect( btnField.parents("form").attr("id")).toBe("addToCart");
        });
        it("button field of id 'add-item' should have a value named 'Add To Cart", function(){
           var btnField = $('#add-item');
           expect( btnField.val()).toBe("Add To Cart");
        });


        it("should have an element with id 'inventory' ", function(){
          var container = $('#inventory');
          expect( container[0].id ).not.toBe("");
        });
        it("element with id 'inventory' should be a DIV", function(){
          var container = $('#inventory');
          expect( container[0].nodeName ).toBe("DIV");
        });
        it("inventory div should not be inside the form", function(){
          var container = $('#inventory');
          expect( container.parents("form").attr("id")).not.toBe("addToCart");
        });
    });


    describe("Adding New Items to Cart: ", function(){

        it("Inventory should be empty", function(){
          var inventory = $('#inventory');
          expect( inventory.children(".item").length ).toEqual( 0 );
        });

        it("should add an item with class 'item' as container", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item');  
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
           expect( inventory.children(".item").last().hasClass("item") ).toBe( true );
        });

        it("should be able to add Multiple Items", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item');  
          var name = ["Burger","Spoon","Modem"];
          var price = [ 240, 457, 77];
          var qty = [ 24, 14, 10];
          for( var i = 0; i < 3; i++){
            nametext.val( name[i] );
            pricetext.val( price[i]);
            qtytext.val( qty[i]);
            addButton.trigger("click");
          }
          expect( inventory.children(".item").length ).toBe( 3 );
        });

        it("should have the Name value present inside an element in the item", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item');  
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(":not(.item)").filter(
            function(){
              return this.innerText === "StoneCold";
            }).length).not.toBe(0);
        });
        it("should have the Price value present inside an element in the item", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item');  
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(":not(.item)").filter(
            function(){
              return this.innerText.indexOf("245") >= 0;
            }).length).not.toBe(0);
        });
        it("should have Quantity value present inside an element in the item", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item');  
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(":not(.item)").filter(
            function(){
              return this.innerText.indexOf("33") >= 0;
            }).length).not.toBe(0);
        });
    });

    describe("Updating Items in a Cart: ", function(){
        it("should have an edit button named with class '.edit' ", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".edit").length ).not.toBe( 0 );
        });
        it("the edit button should be of an Input type", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".edit")[0].nodeName ).toBe( "INPUT" );
        });
        it("the edit button should be of an Input type submit", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".edit")[0].type ).toBe( "submit" );
        });

        it("should have an edit button named 'Edit Item' with class '.edit' ", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".edit")[0].value ).toBe( "Edit Item" );
        });
        it("should create textboxes when Edit button is clicked", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          var item = inventory.children('.item').last();
          var editButton = item.find('.edit');
          editButton.trigger("click");
          expect( item.find("input").filter(
            function(){
              return this.value.indexOf("245") > -1 ;
            }).length).toBeGreaterThan( 0 );
        });
        it("should be able to update the price of the item", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          var item = inventory.children('.item').last();
          var editButton = item.find('.edit');
          editButton.trigger("click");
          var priceInputBox = $(item.find("input").filter(
            function(){
              return $(this).val().indexOf("245") > -1;
            })[0]);
          priceInputBox.val('240');
          item.trigger(
            jQuery.Event("keypress", { keycode: 13, which: 13 })
          );
          expect( inventory.children(".item").last().find(":not(.item)").filter(
            function(){
              return this.innerText.indexOf("240") >= 0;
          }).length).not.toBe(0);
        });


        it("should be able to update the quantity of the item", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          var item = inventory.children('.item').last();
          var editButton = item.find('.edit');
          editButton.trigger("click");
          var qtyInputBox = $(item.find("input").filter(
            function(){
              return $(this).val().indexOf("33") > -1;
            })[0]);
          qtyInputBox.val('35');
          item.trigger(
            jQuery.Event("keypress", { keycode: 13, which: 13 })
          );
           expect( inventory.children(".item").last().find(":not(.item)").filter(
            function(){
              return this.innerText.indexOf("35") >= 0;
          }).length).not.toBe(0);
       });
    });


    describe("Deleting from Cart: ", function(){

        it("should have a delete button with class '.delete' ", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".delete").length ).not.toBe( 0 );
        });
        it("the delete button should be of an Input type", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".delete")[0].nodeName ).toBe( "INPUT" );
        });
        it("the delete button should be of an Input type submit", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".delete")[0].type ).toBe( "submit" );
        });

        it("should have a delete button named 'Delete Item' with class '.delete' ", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          expect( inventory.children(".item").last().find(".delete")[0].value ).toBe( "Delete Item" );
        });

        it("Inventory should be empty if there is just one item present after an item  has been deleted ", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item'); 
          nametext.val('StoneCold');
          pricetext.val('245');
          qtytext.val('33');
          addButton.trigger("click");
          var item = inventory.children('.item').last();
          var deleteButton = item.find('.delete');
          deleteButton.trigger("click");
          expect( inventory.children(".item").last().find(".item").length).toBe( 0);
        });

        it("Number Of Items should be one less after an item has been deleted if Multiple items are added", function(){
          var inventory = $('#inventory');
          inventory.empty();
          var nametext = $('#name-text');
          var pricetext = $('#price-text');
          var qtytext = $('#qty-text');
          var addButton = $('#add-item');  
          var name = ["Burger","Spoon","Modem"];
          var price = [ 240, 457, 77];
          var qty = [ 24, 14, 10];
          for( var i = 0; i < 3; i++){
            nametext.val( name[i] );
            pricetext.val( price[i]);
            qtytext.val( qty[i]);
            addButton.trigger("click");
          }
          var item = inventory.children('.item').last();
          var deleteButton = item.find('.delete');
          deleteButton.trigger("click");
          expect( inventory.children(".item").length).toBe( 2 );
        });
    });
});