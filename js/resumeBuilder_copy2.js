
var name = "Rachel Ross";
var role = "Web Artisan";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//Bio Goes Here
var bio = { 
    "name" : "Rachel Ross",
    "role" : "Web Artist",
    "contacts" : {
           "phone" : "440-66#-524#",
           "email" : "racheleross@gmail.com",
           "github" : "glimmerville",
           "twitter" : "@glimmerville",
           "location" : "Wellington, OH"
    },
    "bioPic" : "images/me.jpg",
    "welcomeMsg" : "I'm interested in freelance opportunities. Please contact me.",
    "city" : "Wellington",
    "email" : "racheleross@gmail.com",
    "skills" : [" web design", " technical editing", " training", " DTP", " SOP development", " graphic design"]
};

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
bio.display = function(){
    if (bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
    }
};

var email = "Glimmer@glimmerville.com";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#header").append(formattedEmail);
var github = "Glimmerville";
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#header").append(formattedGithub);
var twitter = "Glimmerville";
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#header").append(formattedTwitter);
var blog = "http://glimmerville.com";
var formattedBlog = HTMLblog.replace("%data%", blog);
$("#header").append(formattedBlog);

//Education Goes Here
var education = {
    "schools": [{      
            "name": "Cedarville University",
            "city": "Cedarville, OH, USA",
            "degree": "BA",
            "major": "Biology",
            "dates": "1992 to 1996",
            "emphasis": "Technical Writing"
        },
        {
            "name": "Cuyahoga Community College",
            "city": "Cleveland, OH, USA",
            "emphasis": "Additional computer classes including: Adobe Photoshop, Adobe Illustrator, Adobe DreamWeaver, Adobe Flash, and Intro to Scientific Photography",
            "dates": "1999"
        }
    ],
    "onlineClasses": [{
            "name": "Codecademy",
            "title": "HTML and CSS",
            "dates": "2014",
            "url": "http://www.url"
        },
        {
            "name": "Udacity",
            "title": "Front End Web Development Nanodegree",
            "dates": "2015",
            "url" : "Http://www.url"
        },
        {
            "name": "Udemy",
            "title": "Rapid Prototyping: From Wireframes to HTML",
            "dates": "2015",
            "url" : "http://www.url"
        }
    ]
};

education.display = function(){
        for (var learn in education.schools) {
          $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[learn].name);
            var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[learn].city);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[learn].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[learn].major);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[learn].dates);
            var formattedEmphasis = HTMLschoolEmphasis.replace("%data%", education.schools[learn].emphasis);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedCity);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolEmphasis);
         }
  if (education.onlineClasses.length > 0) {          
      $("#education").append(HTMLonlineClasses);
      for (var learned in education.onlineClasses) {
            $("#education").append(HTMLonlineClasses); 
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[learned].name);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[learned].title);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[learned].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", projects.onlineClasses[learned].url);

            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
            
        }
    }
};
//Project Section

var projects = {
    "projectBits": [
        { 
            "title": "Responsive Web Portfolio",
            "dates": "Spring 2015",
            "description": "A responsive portfolio, designed to be viewed on any screen size.",
            "image": "http://bootstrap.glimmerville.com/Project1/wb_screen1.png" 
        },
        {
            "title": "Glimmerville Blog",
            "dates": "Spring 2015",
            "description": "A blog where I take you through my journey as a Udacian.",
            "image": "http://www.glimmerville.com/" 
        }
    ] 
}

projects.display = function(){
        for (var proj in projects.projectBits) {
          $("#projects").append(HTMLprojectStart);
            var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projectBits[proj].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projectBits[proj].dates);
            var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projectBits[proj].description);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projectBits[proj].image);
            $(".project-entry:last").append(formattedProjTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedProjDescription);
            $(".project-entry:last").append(formattedImage);
        }
    };


//Work Section

var work = {
    "jobs" : [
        {
        "title": "Data Management",
        "employer": "DataForge",
        "datesWorked": "2014 - current",
        "location": "Solon, OH",
        "description": "International and domestic part verification & data organization"
    }, 
    {   
        "title": "Project Manager",
        "employer": "PPI Technical Communications",
        "datesWorked": "2011 - 2014",
        "location": "Solon, OH",
        "description": "Documentation planning and design. SOP creation, proofreading, software training."
    }, 
    {   
        "title": "Production Department",
        "employer": "PPI Technical Communications",
        "datesWorked": "1998 - 2011",
        "location": "Solon, OH",
        "description": "Proofreading, editing, archiving. CD, print, and electronic manual creation"
    }
]};
work.display = function(){
        for (var task in work.jobs) {
          $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[task].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[task].title);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[task].datesWorked);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[task].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[task].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
}
};

//Ridiculous Internationalizer
 
/*function inName(name) {
   nameArray = name.trim().split(" ");
   var Last = nameArray[1].toUpperCase();
   return nameArray[0] + " " + Last;
};

$("#main").append(internationalizeButton);
*/
//Call out the thing
work.display();
bio.display();
projects.display();
education.display();

/*
$(document).click(functoni(loc) {
    console.log(loc.pageX, loc.pageY);
}); */
