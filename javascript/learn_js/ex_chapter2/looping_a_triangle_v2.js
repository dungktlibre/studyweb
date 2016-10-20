/*

Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/


for (var line = 1; line <= 7; line++) {
	var printShap = "";
	for (var number_of_shap = 0; number_of_shap < line; number_of_shap++)
	{
		printShap += "#";
	}
	console.log(printShap);
}