/*

REST API Explorer > Value - Select a Table > Incident
xml / json (json-t jobban szeretjük, újabb standard)
endpoint - milyen resource-ot próbálok elérni (pl incident tábla) -- Resources

Scripted REST API modul >> New 

*/


var name = request.pathParams.name;

response.setStatus(200);
response.setBody("Hello " + name + ", this is the Reddit API.");

//Query Parameter >> pl. "id"

var postId = request.queryParams.id;
var postGr = new GlideRecord("u_reddit_post");
postGr.get(postId);

response.setBody({post: postGr.getValue("u_description")});

var sys_id = request.queryParams.sys_id
response.setBody({
    called_with_id: sys_id, 
    message: "hello"
})


/post{sys_id}




response.setBody({rowCount: gr.getRowCount(), 
user: gr.name}); // vagy: gr.getValue("name");


//get all users from the table

var gr = new GlideRecord("sys_user");
gr.query(); // kérje le az összeset
gr.next(); // ezzel lépünk bele az első rekordba!!

var arr = [];

while(gr.next()) {
    arr.push(gr.getValue("name"));
response.setBody({userNames: arr});
}


// get all active=false users

var gr = new GlideRecord("sys_user");
gr.addQuery("active", false);
gr.query();

var arr = [];
while(gr.next()) {
    arr.push(gr.getValue("name"));  
    response.setBody({userNames: arr});
}


// insert new 

gr.setValue("user_name", "new_user");
gr.setValue("first_name", "Caroline");
gr.setValue("last_name", "Wozniacki");
gr.update()   // ez menti be

response.setBody({ message: user created});