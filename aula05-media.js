(function(){
    function media(){
        var x = 0;
        var total = 0;
        var qty = arguments.length;

        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++
        }
        return console.log(total / qty) ; 
         

    }
    var media1 = media(2,3);
    var media2 = media(2,3,10,6);  
})()
    
/*calcular imc = peso / altura 2
 16 a 16.9 (muito baixo)
 17 a 18.4 (abaixo do peso)
 18.5 a 24.9 (normal)
 25 a 29.9 (acima do peso)
 30 a 34.9 (obsidade grau 1)
 35 a 40 (obsedidade grau 2)
 > 40 (obsedidade grau 3)
 */


function imcCalc(weight, height){
        let imc = weight / (height * height)
        return imc
    }
let result = imcCalc(62, 1.66)
console.log(result)
function imcTab(result){
    const imc = function(){
        if (result <= 16.9){
            return 'muito baixo'
        }else if(result <= 18.4){
            return 'abaixo'
        } else if(result <= 24.9){
            return 'normal'
        }  else {return'obeso'}
    }
    return imc
    
} 
const total = imcTab(result)
console.log(total())               
        

 
