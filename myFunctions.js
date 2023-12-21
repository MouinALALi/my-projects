let captcha;
function generate() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	let uniquechar = "";

	const randomchar =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 5; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}

	// Store generated input
	captcha.innerHTML = uniquechar;
}

function printmsg() {
	const usr_input = document
		.getElementById("submit").value;

	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha.innerHTML) {
		let s = document.getElementById("key")
			.innerHTML = "Matched";
		generate();
	}
	else {
		let s = document.getElementById("key")
			.innerHTML = "not Matched";
		generate();
	}
}

var givenName = document.getElementById('#name')
   var btnClass = document.getElementById('#addNameButton')
   var listOfName = document.getElementById('#listOfName')
   btnClass.addEventListener('click', () => {
      var actualName = givenName.value
      if (actualName.length != 0) {
         var createAnHTMLList = `<li class=""><div>${actualName}</div><button
         onclick="removeNameFromTheList(this)">Remove Name</button>`
         listOfName.innerHTML += createAnHTMLList
         givenName.value = ''
         givenName.classList.remove('red')
      } else{
         givenName.classList.add('red')
      }
   })
   function removeNameFromTheList(e) {
      e.parentElement.remove()
   }
   $(document).ready(function() {
      $('#contact_form').bootstrapValidator({
          
          feedbackIcons: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
          },
          fields: {
              first_name: {
                  validators: {
                          stringLength: {
                          min: 2,
                      },
                          notEmpty: {
                          message: 'Please supply your first name'
                      }
                  }
              },
               last_name: {
                  validators: {
                       stringLength: {
                          min: 2,
                      },
                      notEmpty: {
                          message: 'Please supply your last name'
                      }
                  }
              },
              email: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply your email address'
                      },
                      emailAddress: {
                          message: 'Please supply a valid email address'
                      }
                  }
              },
              phone: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply your phone number'
                      },
                      phone: {
                          country: 'US',
                          message: 'Please supply a vaild phone number with area code'
                      }
                  }
              },
              address: {
                  validators: {
                       stringLength: {
                          min: 8,
                      },
                      notEmpty: {
                          message: 'Please supply your street address'
                      }
                  }
              },
              city: {
                  validators: {
                       stringLength: {
                          min: 4,
                      },
                      notEmpty: {
                          message: 'Please supply your city'
                      }
                  }
              },
              state: {
                  validators: {
                      notEmpty: {
                          message: 'Please select your state'
                      }
                  }
              },
              zip: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply your zip code'
                      },
                      zipCode: {
                          country: 'US',
                          message: 'Please supply a vaild zip code'
                      }
                  }
              },
              comment: {
                  validators: {
                        stringLength: {
                          min: 10,
                          max: 200,
                          message:'Please enter at least 10 characters and no more than 200'
                      },
                      notEmpty: {
                          message: 'Please supply a description of your project'
                      }
                      }
                  }
              }
          })
          .on('success.form.bv', function(e) {
              $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                  $('#contact_form').data('bootstrapValidator').resetForm();
  
              // Prevent form submission
              e.preventDefault();
  
              // Get the form instance
              var $form = $(e.target);
  
              // Get the BootstrapValidator instance
              var bv = $form.data('bootstrapValidator');
  
              // Use Ajax to submit form data
              $.post($form.attr('action'), $form.serialize(), function(result) {
                  console.log(result);
              }, 'json');
          });
  });
  
