function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["./Files/images/BACKGROUND.jpg","./Files/images/analytics-team-work-with-data-dashboard_107791-12791.jpg","./Files/images/character-illustration-people_53876-66081.jpg","./Files/images/character-illustration-people-with-global-network-concept_53876-66147.jpg","./Files/images/collab-concept-illustration_114360-3995.jpg","./Files/images/illustration-young-people_52683-34426.jpg","./Files/images/nationality-abstract-concept-illustration-country-birth-passport-national-customs-traditions-legal-status-birth-certificate-human-ri.jpg","./Files/images/teamwork-puzzle-concept-illustration_114360-14645.jpg"]);