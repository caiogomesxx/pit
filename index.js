var nInscritos = 5
var inscritos=["Kratos","Goku","Kuririn","Saitama","Hulk"]
var poder=[70,80,15,100,90]
var kill=[12,0,0,0,0]
var death=[2,3,4,0,0]
var god = inscritos[0]
var melhorPersonagem=[ inscritos[0] ,poder [0],kill [0],death[0]]
for (var i in inscritos,poder, kill,death) {
   if(poder[i] + kill[i] - death[i] > melhorPersonagem[1] + melhorPersonagem[2] - melhorPersonagem[3] ){
       melhorPersonagem= [ inscritos[i] ,poder [i],kill [i],death[i]]
   }else if(poder[i] + kill[i] - death[i] == melhorPersonagem[1] + melhorPersonagem[2] - melhorPersonagem[3]){
    if(kill[i] > melhorPersonagem[2]){
      melhorPersonagem= [ inscritos[i] ,poder [i],kill [i],death[i]]
    }else if ((kill[i] == melhorPersonagem[2])){
      if(kill[i] < melhorPersonagem[3]){
             melhorPersonagem=[ inscritos[i] ,poder [i],kill [i],death[i]]
      }else if(kill[i] == melhorPersonagem[3]){
       for(var i in inscritos){
           if(inscritos[i].length< god.length){
               melhorPersonagem= [ inscritos[i] ,poder [i],kill [i],death[i]]
           }
       }
   }
}

}
}
console.log(melhorPersonagem[0])
