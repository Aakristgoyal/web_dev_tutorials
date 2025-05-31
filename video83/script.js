let students = ['Aakrist', 'Aditya','commitment', 'Adarsh', 'RaviRanjan', 'Ramshwaroop', 'Subh', 'katy', 'Shivu', 'Shivam','Radharamanshrinivas']
let houses=[]
for (const student of students) {
    if(student.length<6){
        houses.push('Red_house')
    }    
    else if (student.length>=6 && student.length<=8) {
        houses.push('Green_house')
    } else if(student.length>8 && student.length<=12){
        houses.push('Blue_house')
    }
    else{
        houses.push('Yellow_house')
    }
}
console.log(houses)