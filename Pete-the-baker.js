function cakes(recipe, available) {
  
    //Taking keys of each object provided (ingredients)
    const recipeKeys = Object.keys(recipe)
    const availableKeys = Object.keys(available)
    
    //Returns zero if an ingredient is missing that we need for the recipe
    if(!recipeKeys.every(ing => availableKeys.indexOf(ing) > -1)) return 0
    
    //Pull the object into key-value pair arrays
    const availableArr = Object.entries(available)
    const recipeArr = Object.entries(recipe)
    
    //Empty array to store how many of each item required for the recipe can be had 
    const enoughForArr = []
    
    //Loops over recipe to compare with the ingreidents list
    for(var i = 0; i< recipeArr.length; i++){
      for(var j = 0; j < availableArr.length; j++){
        //If the recipe ingredient name and the avaialbe ingredient name match 
        if(recipeArr[i][0] === availableArr[j][0]){
          //See how many we can get out of the available ingredients for the recipe
        enoughForArr.push(Math.floor(availableArr[j][1] / recipeArr[i][1]))      
        continue
        }
      }
    }
    //return the smallest number since this is the most we can make with one of the ingredients
    return Math.min(...enoughForArr)
    
  
  
    }
  
  