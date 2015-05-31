
var name = "Rachel Ross";
var role = "Web Ninja";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = { 
    "name" : "Rachel Ross",
    "role" : "Web Artist",
    "contacts" : "Some Contacts",
    "bioPic" : "images/me.jpg",
    "welcomeMsg" : "Thanks for checking out my page.",
    "city" : "Wellington",
    "email" : "racheleross@gmail.com",
    "skills" : [" web design", " technical editing", " training", " document management", " technical editing", " graphic design and editing"]
}

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);
$("#main").append(bio.name);

var work = new Object();
    work.position = "Data Management";
    work.employer = "DataForge";
    work.yearsWorked = "2014 to 2015";
    work.city = "Solon, OH";

var education = new Object();
    education["school"] = "Cedarville University";
    education["years"] = "1993 to 1996";
    education["city"] = "Cedarville, OH";

var education = {
    "schools": [
        {
            "name": "Cedarville University",
            "city": "Cedarville, OH, USA",
            "degree": "BA:",
            "major": "Biology",
            "minor": "Bible",
            "dates": 1993,
            "emphasis": "Technical Writing"
        },
        {
        "name": "Cuyahoga Community College",
        "emphasis": "Additional computer classes and graphics software",
        "dates": 1999
        },
        {
        "name": "Udacity",
        "city": "Online education",
        "degree": "Front End Web Development Nanodegree",
        "dates": 2015
        }
    ]
}


$("#main").append(work["position"]); 
$("#main").append(education.school); 