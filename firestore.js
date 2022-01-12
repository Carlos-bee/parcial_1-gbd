const db = firebase.firestore();
const minium= "minium";
const frozen="frozen";
const entrada=20000;
var valor_entrada=0;


//guardar datos en la base de datos
function comprar(){
    var nombre = document.getElementById('nombres').value;
    var apellido = document.getElementById('apellidos').value;
    var pelicula = document.getElementById('pelicula').value;
    var entradas =document.getElementById('entradas').value;

    if(pelicula == minium){
        for(i=0;i<30;i++){
        
            

             var valor_entrada= entrada*entradas;
            
                    db.collection("sala_1").add({
                        nombre: nombre,
                        apellido: apellido,
                        pelicula: pelicula,
                        entradas: entradas,
                        horario: '04:00 pm',
                        valor_entrada:valor_entrada,
                }).then(
                    function(docRef){
                        console.log("id documento",docRef.id);
                        document.getElementById('nombres').value='';
                        document.getElementById('apellidos').value='';
                        document.getElementById('pelicula').value='';
                        document.getElementById('entradas').value='';
                    }
                ).catch(
                    function(error){
                        console.log(error);
                    }
                );
        
        }
        
    }  
    console.log("sala llena");


        if(pelicula == frozen){
            for(i=0;i<30;i++){
           

            var valor_entrada= entrada*entradas;
            
            db.collection("sala_1").add({
                nombre: nombre,
                apellido: apellido,
                pelicula: pelicula,
                entradas: entradas,
                horario: '05:00 pm',
                valor_entrada:valor_entrada,
          }).then(
              function(docRef){
                  console.log("id documento",docRef.id);
                  document.getElementById('nombres').value='';
                  document.getElementById('apellidos').value='';
                  document.getElementById('pelicula').value='';
                  document.getElementById('entradas').value='';
              }
          ).catch(
              function(error){
                  console.log(error);
              }
          ); 
        }
        
    }
    console.log("sala llena");
    
    if(pelicula == minium){
        for(i=0;i<20;i++){
        
            
            var valor_entrada= entrada*entradas;
            
            db.collection("sala_2").add({
                nombre: nombre,
                apellido: apellido,
                pelicula: pelicula,
                entradas: entradas,
                horario: '08:00 pm',
                valor_entrada:valor_entrada,
          }).then(
              function(docRef){
                  console.log("id documento",docRef.id);
                  document.getElementById('nombres').value='';
                  document.getElementById('apellidos').value='';
                  document.getElementById('pelicula').value='';
                  document.getElementById('entradas').value='';
              }
          ).catch(
              function(error){
                  console.log(error);
              }
          );
        }
       
    }  
    console.log("sala llena"); 

    if(pelicula == frozen){
            for(i=0;i<20;i++){


            var valor_entrada= entrada*entradas;
            
            db.collection("sala_2").add({
                nombre: nombre,
                apellido: apellido,
                pelicula: pelicula,
                entradas: entradas,
                horario: '02:00 pm',
                valor_entrada:valor_entrada,
          }).then(
              function(docRef){
                  console.log("id documento",docRef.id);
                  document.getElementById('nombres').value='';
                  document.getElementById('apellidos').value='';
                  document.getElementById('pelicula').value='';
                  document.getElementById('entradas').value='';
              }
          ).catch(
              function(error){
                  console.log(error);
              }
          ); 
        }
        
    }
   
    console.log("sala llena");
    
}



//cacelar reserva 
function eliminar(id){

    db.collection("sala_1").doc(id).delete().then(() => {
        console.log("reserva de sala 1 cancelada");
    }).catch((error) => {
        console.error("Error no se puede cancelar: ", error);
    });
    db.collection("sala_2").doc(id).delete().then(() => {
        console.log("reserva de sala 2 cancelada");
    }).catch((error) => {
        console.error("Error no se puede cancelar: ", error);
    });
}

//modificar reserva

function modificar(id,pelicula,entradas){
    pelicula = document.getElementById('pelicula').value;
    entradas = document.getElementById('entradas').value;

    var boton= document.getElementById('boton')

    boton.onclick=function(){

        var userRef = db.collection('sala_1').doc(id);

        var pelicula = document.getElementById('pelicula').value;
        var entradas = document.getElementById('entradas').value;

        if(pelicula == minium){
            
        
        return userRef.update(
            {
                pelicula: pelicula,
                entradas: entradas,
                horario: "04:00 pm",
            }
        ).then(
            function(){
                document.getElementById('pelicula').value='';
                document.getElementById('entradas').value='';
                boton.innerHTML="comprar";

            }
        ).catch(function(error){
            console.error("error",error);

        });
             }
        
    }


        var userRef = db.collection('sala_1').doc(id);

        var pelicula = document.getElementById('pelicula').value;
        var entradas = document.getElementById('entradas').value;

        if(pelicula == frozen){
            
        
                return userRef.update(
                    {
                        pelicula: pelicula,
                        entradas: entradas,
                        horario: "05:00 pm",
                    }
                ).then(
                    function(){
                        document.getElementById('pelicula').value='';
                        document.getElementById('entradas').value='';
                        boton.innerHTML="comprar";

                    }
                ).catch(function(error){
                    console.error("error",error);

                });
             
        }

        var userRef = db.collection('sala_2').doc(id);

        var pelicula = document.getElementById('pelicula').value;
        var entradas = document.getElementById('entradas').value;

        if(pelicula == minium){
            
        
                return userRef.update(
                    {
                        pelicula: pelicula,
                        entradas: entradas,
                        horario: "08:00 pm",
                    }
                ).then(
                    function(){
                        document.getElementById('pelicula').value='';
                        document.getElementById('entradas').value='';
                        boton.innerHTML="comprar";

                    }
                ).catch(function(error){
                    console.error("error",error);

                });
             
        }

        var userRef = db.collection('sala_2').doc(id);

        var pelicula = document.getElementById('pelicula').value;
        var entradas = document.getElementById('entradas').value;

        if(pelicula == frozen){
            
        
                return userRef.update(
                    {
                        pelicula: pelicula,
                        entradas: entradas,
                        horario: "02:00 pm",
                    }
                ).then(
                    function(){
                        document.getElementById('pelicula').value='';
                        document.getElementById('entradas').value='';
                        boton.innerHTML="comprar";

                    }
                ).catch(function(error){
                    console.error("error",error);

                });
             
        }
 }

