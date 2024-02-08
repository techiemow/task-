
let mowriyaa_resume = {

  "personalDetails" :{
    "name": "Mowriyaa BK",
    "age": 22,
    "email": "mowriyaabk@gmail.com",
    "nationality": "Indian",
    "location": {
      "address": "133 1St devar colony,thiruvanaikovil",
      "city": "Trichy",
      "state": "Tamilnadu",
      "postalCode": "620005"
    }
  },
  "Objective":"Seeking an entry-level Full Stack Developer position to leverage academic knowledge and hands-on project experience. Eager to contribute to a dynamic development team, enhance technical skills, and participate in real-world software development projects.",
  "Education":{
      "10th" :{
          "course":"Secondary School Leaving certificate(SSLC)",
          "University":"Sri Akilandeswari Vidyalaya",
          "gpa":10,
          "YearOfPassing":"2017"},
          
      "12th" :{
          "course":"Higher Secondary School Certificate (HSC)",
          "University":"Aurobindo International School",
          "gpa": 8.2,
          "YearOfPassing":"2019"},
    
      "underGraduate" :{
      "course":"B.E-Electrical and Electronics Engineering",
      "University":"Anna university - Trichy (BIT Campus)",
      "gpa":8,
      "YearOfPassing":"2023"}
    },
  "Skills":{
            "BackEndTechs":["Node.js","Python","Java","c++"],
            "FrontEndTechs":["Javascript"],
            "DevelopmentTools":["VSCode","IntelliJ","Audrino","MATLAB"],
            "other Skills":["Git","Github"]
          },
  
  "Interest": "I am quite keen into European football and Cinemas generally.Maybe books to read when I find time",

  "Certifications":
      {
          "course":"FullStackDevelopment Course",
          "Platform":"GUVI'S Zen class",
          "Year":"April 2024",
          "Location":"India"
      },
  
  "projects":[
      {
          "Project_Name = ": "Mini Project - Railway Station Platform Train Accident Prevention",
          "description =": "Used as a decoy to project passengers when boarding a train or while waiting for their train ",
          "technologies =" : "Audrino , C++"
      },
      {
          "Project_Name = ": "Project - IOT based Tariff Estimator System",
          "description =": "Used to calculate the energy and cost of the energy utilized by both residential and commercial loads",
          "technologies =" : "Audrino , C++"
      }],

  "languages":["Tamil","English"]
  
} 

console.log()

console.log("--------TO GET PERSONAL DETAILS USING FOR IN LOOP-----------------");
for (let key in  mowriyaa_resume.personalDetails){  
console.log(key," :", mowriyaa_resume.personalDetails[key] );
}

console.log()
console.log()

console.log("---------TO GET SKILLS USING FOR LOOP--------")

let skillsacquired = Object.entries(mowriyaa_resume.Skills);
for (let index = 0;index <=skillsacquired.length ; index++){
console.log(skillsacquired[index])
}

console.log()
console.log()

console.log("---------TO GET PROJECTS USING FOR OF LOOP--------")
let projectsdone = Object.entries(mowriyaa_resume.projects);
for(let entry of projectsdone){
 console.log(entry[0],':',entry[1])
} 

console.log()
console.log()

console.log('----------TO GET LANGUAGES USING FOR EACH LOOP----------');
let lanKnown = Object.entries(mowriyaa_resume.languages);
lanKnown.forEach(entry =>{
  console.log(entry[0],':',entry[1]);
})



  