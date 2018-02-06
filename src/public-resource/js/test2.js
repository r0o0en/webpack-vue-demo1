module.exports = {
	name:'aze',
	say:function(name){
		console.log('i say ' + (name || this.name));
	}
}
