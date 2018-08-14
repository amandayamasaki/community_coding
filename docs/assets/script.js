const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

function formHandler(){
	var organization = document.getElementById('form-organizationType').selectedIndex === -1 ? null : document.getElementById('form-organizationType').options[document.getElementById('form-organizationType').selectedIndex].text;
	var location = document.getElementById('form-location').value === "" ? null : document.getElementById('form-location').value;
	var description = document.getElementById('form-description').value === "" ? null : document.getElementById('form-description').value
	if (organization === null || location === null || description === null) {
		console.log("fill out the form again")
	} else {
		db.collection("test").add({
		    organizationType: organization,
		    location: location,
		    description: description,
		    approved:false
		})
		.then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	}
}

function loadResources(){
	db.collection("test").get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
	    	var returnedData = JSON.stringify(doc.data())
	    	if (JSON.parse(returnedData).approved === true){
	    		var newOrganization = JSON.parse(returnedData).organizationType
	    		var newLocation = JSON.parse(returnedData).location
	    		var newDescription = JSON.parse(returnedData).description
	    		$("#resources").append("<br><br><h4>"+newLocation+"</h4><p><b>Type of Organization : </b>"+newOrganization+"</p><p>"+newDescription+"</p>")
	    	}
	    });
	});
}

