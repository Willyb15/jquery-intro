# jQuery-intro
##Application showcasing common methods in jQuery
##Bread and Butter right here...
```js
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
				thing.html('<table border="2"<tr><td>Look me, I\'m a row</td><td></td></tr><td>Here is another cell.</td><td><tr>here is another row</tr></td>');
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
			}else if(theTrick==='text'){
				thing.text('Just some new text baby')
			}else if (theTrick =='each'){
				$('button').each(function(){
					console.log($(this).text());
				})
			// same as var buttons = document.getElementsByTagName('button');
			// 		for(i=0; i<buttons.length;i++)
			// 			something got deleted
			}
			
		});
	});
```

