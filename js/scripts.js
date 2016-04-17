// / /	$('#hide').click(function(){
	// 		// this is an event handler or listener
	// 		// console.log('Test');
	// 		$('.thing').hide();
	// 		// same as document.getElementsByClassName('thing').style.display = "none";
	// 	});
	// 	$('#show').click(function(){
	// 		$('.thing').show();
	// 	});
	// });

	// document.getElementById("wrapper")
	// $("#wrapper");
	
	// document.getElementsByClassName("row");
	// $(".row");
	
	// document.getElementsByTagName('button');
	// $('button');
	// console.log($('button'));

	
	// $(document).ready()

	// $(document).ready(function(){
	// // this function can only be run inside of the document.ready method. This is called a callback
	// 	$('button').click(function(){
	// 		// console.log($(this));
	// 		var theTrick = $(this).attr('todo');
	// 		console.log(theTrick);
	// 		if(theTrick === 'hide'){
	// 			$('.thing').hide();
	// 		}else if(theTrick === 'show'){
	// 			$('.thing').show();
	// 		}else if(theTrick === 'toggle'){
	// 			$('.thing').toggle();
	// 		}else if(theTrick ==='html'){
	// 			$('.thing').html('<table border="2"<tr><td>Look me, I\'m a row</td><td></td></tr>Here is another cell.</td><td><tr>here is another row</tr></td>');
	// 		}else if(theTrick ==='css'){
	// 			$('.thing').css(
	// 			//	this is JSON Mode - open brackets means object
	// 			{
	// 				'background-color': 'orange',
	// 				'color': 'red',
	// 				'font-size': '30px'
	// 			}
	// 			);
	// 		};
	// 	});
	// });

//Instead of having to type of $('.thing') all the time we can....

	$(document).ready(function(){
		var thing = $('.thing');
	// this function can only be run inside of the document.ready method. This is called a callback
		$('button').click(function(){
			// console.log($(this));
			var theTrick = $(this).attr('todo');
			console.log(theTrick);
			if(theTrick === 'hide'){
				thing.hide();
			}else if(theTrick === 'show'){
				thing.show();
			}else if(theTrick === 'toggle'){
				thing.toggle();
			}else if(theTrick ==='html'){
				thing.html('<table border="2"<tr><td>Look me, I\'m a row</tr></td><td></td></tr><td>Here is another cell.</td><td><tr>here is another row</tr></td>');
			}else if(theTrick === 'append'){
				thing.append('<div class="green">I have friends now.</div>');
			}else if(theTrick ==='css'){
				thing.css(
				//	this is JSON Mode - open brackets means object
				{
					'background-color': 'orange',
					'color': 'red',
					'font-size': '30px'
				});
				thing.text('CSS is Awesome!!')
			}else if(theTrick==='text'){
				thing.text('Just some new text baby');
			}else if (theTrick ==='each'){
				$('button').each(function(){
					($(this).css('background-color','red'));
					console.log($(this).text());
				})
			// same as var buttons = document.getElementsByTagName('button');
			// 		for(i=0; i<buttons.length;i++)
			// 			something got deleted
			}else if (theTrick === 'addClass'){
				thing.addClass('btn btn-danger');
				thing.text('Added Danger Class');
			}else if (theTrick === 'removeClass'){
				thing.removeClass('btn btn-danger');
				thing.text('Removed btn btn-danger');
			}else if (theTrick === 'animate'){
				thing.animate({
				left: '500px', 
				height:'150px', 
				width: '150px'
			},
				1500, function(){thing.removeAttr('style')
			})
				thing.text('Im Animated!!');
				// thing.animate({right: '500px', height:'150px', width: '150px'});
			}else if(theTrick=== 'delay'){
				thing.slideUp(1000).delay('slow');
				thing.text('I\m sliding up').delay('slow');
				thing.slideDown(2000).delay('slow');
				thing.delay(5000).text('I\m sliding down');
    			thing.delay(800).fadeOut();
    			thing.delay(1500).fadeIn();
    		}else if(theTrick==='slice'){
    			thing.slice('thing').css("background-color", "yellow");
    		}else if (theTrick==='fadeOut'){
    			thing.fadeOut('slow');
    		}else if (theTrick==='fadeIn'){
    			thing.fadeIn('slow');
    		}else if (theTrick==='val'){
    			// var password = ($('.value').val();
    			// 	console.log(password)
    			($('.value').val('I\'m learning jQuery'));
    		}else if(theTrick==='remove-attr'){
    			$('button').removeAttr('todo');
    			thing.text('Removed "todo" class. No Buttons Work');
    		// }else if(theTrick==='add-attr'){
    		// 	($".att").add
    		}

			

			
		});
	});