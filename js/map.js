function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  google.maps.event.addListener(map, 'click', function(event){
      this.setOptions({scrollwheel:true});
    });
  google.maps.event.addListener(map, 'mouseout', function(event){
	 this.setOptions({scrollwheel:false});  
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
