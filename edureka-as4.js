ratingData = [
  {restaurant: 'KFC', rating:5}
  ,{restaurant: 'Burger King', rating:4}
  , {restaurant: 'KFC', rating:3}
  , {restaurant: 'Domino', rating:2}
  , {restaurant: 'Subway', rating:3}
  , {restaurant: 'Domino', rating:1}
  , {restaurant: 'Subway', rating:4}
  , {restaurant: 'Pizza Hut', rating:5}
  ];
let averageRating=0;
let count=0;
let averageArray=[];
const newarray=(rest)=>{
  const newarr=ratingData.map((value)=>{
  if(value.restaurant===rest){
    averageRating=value.rating+averageRating;
    count++;
  }
  else{

  }
}
)

averageRating=averageRating/count;
averageArray.push(averageRating);
return averageRating;

}
// newarray('KFC');



let finalArray=[];
for(let i=0;i<ratingData.length;i++){
  newarray(ratingData[i].restaurant);
  finalArray.push({restaurant:ratingData[i].restaurant,AverageRating:averageRating});
}

