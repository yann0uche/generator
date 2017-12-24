/**
 * Created by Yannouche on 24/12/2017.
 */

app.directive('collapsible', function(){
	return {
		restrict: 'A',
		priority: 1,
		link: function(event, element, attr) {
			var handler = element.find('.collapser');
			var opened = true;

			handler.on('click', function(event){
				opened = !opened;

				if(opened === true){
					handler.removeClass('fa-arrow-right');
					handler.addClass('fa-arrow-down');
				}
				else{
					handler.addClass('fa-arrow-right');
					handler.removeClass('fa-arrow-down');
				}

				event.preventDefault();
				$(this).parents('.classe').find('.content').toggle();
			});
		}
	}
});