
//Bio Goes Here
var bio = { 
    "name" : "Rachel Ross",
    "role" : "Web Artisan",
    "contacts" : {
           "phone" : "440-66#-524#",
           "email" : "<a href='mailto:racheleross@gmail.com'>racheleross@gmail.com</a>",
           "github" : "<a href='http://github.com/glimmerville'>glimmerville</a>",
           "twitter" : "<a href='http://twitter.com/glimmerville'>@glimmerville</a>",           
           "location" : "Wellington, OH",
           "blog" : "<a href='http://glimmerville.com'>glimmerville</a>"
    },
    "bioPic" : "images/me.jpg",
    "welcomeMsg" : "My skills are flexible; contact me - let's chat!",
    "city" : "Wellington",
    "email" : "racheleross@gmail.com",
    "skills" : [" web design", " technical editing", " training", " DTP", " SOP development", " graphic design"]
};
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
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
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog + formattedEmail + formattedGitHub + formattedTwitter);

//Education Goes Here
var education = {
    "schools": [{      
            "name": "Cedarville University",
            "city": "Cedarville, OH, USA",
            "location": "Cedarville, OHIO",
            "degree": "Bachelor of Arts",
            "major": "Biology",
            "dates": "1992 to 1996",
            "emphasis": "Technical Writing"
        },
        {
            "name": "Cuyahoga Community College",
            "city": "Cleveland, OH, USA",
            "location": "Cleveland, OHIO",
            "degree": "Continuing Education",
            "major": "Not applicable",
            "description": "Additional computer classes including: Adobe Photoshop, Adobe Illustrator, Adobe DreamWeaver, Adobe Flash, and Intro to Scientific Photography",
            "dates": "1999 to 2002"
        }
    ],
    "onlineClasses": [{
            "name": "Codecademy",
            "title": "HTML and CSS, JavaScript",
            "dates": "2014 to current",
            "url": "http://www.codecademy.com"
        },
        {
            "name": "Udacity",
            "title": "Front End Web Development Nanodegree",
            "dates": "2015 to current",
            "url" : "Http://www.udacity.com "
        },
        {
            "name": "Udemy",
            "title": "Rapid Prototyping: From Wireframes to HTML",
            "dates": "2015 to 2015",
            "url" : "http://www.udemy.com "
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
            //var formattedEmphasis = HTMLschoolEmphasis.replace("%data%", education.schools[learn].emphasis);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedCity);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
            //$(".education-entry:last").append(formattedSchoolEmphasis);
         }
  if (education.onlineClasses.length > 0) {          
      $("#education").append(HTMLonlineClasses);
      for (var ed in education.onlineClasses) { 
      $("#education").append(HTMLschoolStart);            
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[ed].title);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[ed].name);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[ed].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[ed].url);
            
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineSchool);
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
            "description": "A responsive portfolio, designed to be viewed on any screen size. This was my first project for Udacity",
            "image": "images/wb_screen1_small.png" 
        },
        {
            "title": "JavaScript Resume",
            "dates": "Spring 2015",
            "description": "This was my second project on Udacity, it incorporates JavaScript to allow for easy updating and formatting.",
            "image": "images/resume_project_2.jpg" 
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

//Internationalizer
 
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
$("#mapDiv").append(googleMap);
$("#footerContacts").append(formattedEmail + formattedGitHub + formattedTwitter + formattedBlog);

//Click Functionator

$(document).click (function (loc) {
    console.log(loc.pageX, loc.pageY);
}); 


