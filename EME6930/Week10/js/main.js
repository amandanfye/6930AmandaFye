//Hamburger Menu for Nav Bar
function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




//Search Bar
function SearchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("accordian");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




//Search Buttons
(function (document, window, undefined) {
  'use strict';
  
  // Buttons
  var buttons = document.querySelectorAll('.js-button');   
  
  var displayContent = function (button, content) {
    if (content.classList.contains('active')) {
        // Content is hidden
        content.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      } else {
        // Show the content
        content.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
  };
  
  [].forEach.call(buttons, function(button, index) {
    // Content var
    var content = button.nextElementSibling;
    
    // Set button attributes
    button.setAttribute('id', 'button-' + index);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'content-' + index);
    
    // Set content attributes
    content.setAttribute('id', 'content-' + index);
    content.setAttribute('aria-hidden', 'true');    
    content.setAttribute('aria-labelledby', 'button-' + index);
  
    button.addEventListener('click', function () {
      displayContent(this, content);
      return false;
    }, false);
    
    button.addEventListener('keydown', function (event) {
      // Handle 'space' key
      if (event.which === 32) {
        event.preventDefault();
        displayContent(this, content);
      }
    }, false);
    
  });  
  
})(document, window);



//Contact Form
(function ($) {
    "use strict";

    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            

var name = $('.validate-input input[name="name"]'); //Name input
var phone = $('.validate-input input[name="phone"]'); //Phone input
var email = $('.validate-input input[name="email"]'); //Email input
var message = $('.validate-input textarea[name="message"]'); //Message input


    $('.validateform').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }
        if($(phone).val().trim() == ''){
            showValidate(phone);
            check=false;
        }
        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validateform .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);