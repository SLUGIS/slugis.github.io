jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/orgs/'+username+'/members?callback=?',callback)
}
 
jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
     
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        //sortByName(repos);    
     
        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            list.append('<div class = "col-sm-2"> ' +
                        '<div class= "team-member">' +
                        '<img src="'+ this.avatar_url+ '" class="img-responsive img-circle" alt="">' + 
                        '<h4> <a href =" ' + this.html_url + ' " >'+ this.login + '</a></h4>' +
                        '</div> </div>'); 
        });      
      });
};
