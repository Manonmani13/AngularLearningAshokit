var petName:string="Dog";
function setPetName()
{
    var petName:string="Cat";
    console.log("Inside Function :"+petName);
}

setPetName();
console.log("Outside  Function :"+petName);

var index=0;
for(var index=0;index<=5;index++)
{
    console.log("Inside for Loop :"+index);

}
console.log("Outside for Loop :"+index);
