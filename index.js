var nInscritos = 5
var inscritos=[{
nome:"Kratos",
poder: 70,
kill:12,
death:2
},
{
  nome: "Goku",
  poder: 80,
  kill: 0,
  death:3
},
{
  nome: "Kuririn",
  poder: 15,
  kill: 0,
  death:4
},
{
  nome: "Saitama",
  poder: 100,
  kill: 0,
  death:0
},
{
   nome:"Hulk",
   poder: 90,
   kill:0,
   death:0
}]
var melhorPersonagem= inscritos[0]
for (const i in inscritos) {
   if(inscritos[i].poder + inscritos[i].kill - inscritos[i].death > melhorPersonagem.poder + melhorPersonagem.kill - melhorPersonagem.death ){
       melhorPersonagem= inscritos[i]
       
   }else if(inscritos[i].poder + inscritos[i].kill - inscritos[i].death === melhorPersonagem.poder + melhorPersonagem.kill - melhorPersonagem.death){
    if(inscritos[i].kill > melhorPersonagem.kill){
      melhorPersonagem=inscritos[i]
    }else if (inscritos[i].kill === melhorPersonagem.kill){
      if(inscritos[i].death< melhorPersonagem.death ){
             melhorPersonagem=inscritos[i]
      }else if(inscritos[i].death === melhorPersonagem.death){
       melhorPersonagem="Godofor"
   }
    }
}
console.log(melhorPersonagem )
}

