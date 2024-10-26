   let scaler = 1
      let x = 150; let y = 100; let keeper = 5*scaler;
      let canvas = document.getElementById("canvas"); canvas.style = "width: 100%; height: 200%;"
      const ctx = canvas.getContext("2d");

      function gridSet (){
      for (let i = 0; i < 195*(1/scaler); i++){
      ctx.beginPath();
      ctx.moveTo((5*scaler)*(scaler+i+2.5), 1000);
      ctx.lineTo  ((5*scaler)*(scaler+i+2.5), 5);
      ctx.strokeStyle = "grey";
      ctx.stroke();
      }
      for (let i = 0; i < 850*(1/scaler); i++){
      ctx.beginPath();
      ctx.moveTo(5, (5*scaler)*(scaler+i+2.5));
      ctx.lineTo  (980, (5*scaler)*(scaler+i+2.5));
      ctx.strokeStyle = "grey";
      ctx.stroke();
      }
      initiate()
   }

      function getRandomInt(max) {return Math.floor(Math.random() * max);}
      function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
       ctx.beginPath()
       ctx.arc(x, y, 2*scaler, 0, 2 * Math.PI);
       ctx.strokeStyle = "black";
       ctx.stroke()
       ctx.fill()
        switch(getRandomInt(4)){ 
         case 0: if(x > 20){x -=keeper;};break;
         case 1: if(x < 980){x += keeper;};break;
         case 2: if(y > 20){y -=keeper;}; break;
         case 3: if(y < 980){y +=keeper;}; break;
      }
      console.log(` x= ${x} | y = ${y}`)
      }
   function initiate ()
   {for (let i = 0; i<(100000/scaler); i++){draw();}}
   gridSet()