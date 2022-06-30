 let column1Sum = 0;
 let column2Sum = 0;
 let column3Sum = 0;
 let subtotalSum = 0;
 let finalSum = 0;
 
    function conversion() {
      document.getElementByClassName("cell").value = "food";
      /*if(oneEighth = " "){
        var i;
        while(i < oneEighth.length){
          oneEighth[i].value='cat';
          i++;
        }
      }*/
  
   }
 
    function column1() { //Adds up all of column1 (left antler)
      let MBL = document.getElementById("mainBeamLeft").value;
      let G1L = document.getElementById("G1Left").value;
      let G2L = document.getElementById("G2Left").value;
      let G3L = document.getElementById("G3Left").value;
      let G4L = document.getElementById("G4Left").value;
      let G5L = document.getElementById("G5Left").value;
      let G6L = document.getElementById("G6Left").value;
      let G7L = document.getElementById("G7Left").value;
      let H1L = document.getElementById("H1Left").value;
      let H2L = document.getElementById("H2Left").value;
      let H3L = document.getElementById("H3Left").value;
      let H4L = document.getElementById("H4Left").value;
    column1Sum= (+MBL) + (+G1L) + (+G2L) + (+G3L) + (+G4L) + (+G5L) + (+G6L) + (+G7L) + (+H1L) + (+H2L) + (+H3L) + (+H4L);
    document.getElementById("columnOne").value=column1Sum;
    }
    function column2() { //Adds up all of column2 (right antler)
      let MBR = document.getElementById("mainBeamRight").value;
      let G1R = document.getElementById("G1Right").value;
      let G2R = document.getElementById("G2Right").value;
      let G3R = document.getElementById("G3Right").value;
      let G4R = document.getElementById("G4Right").value;
      let G5R = document.getElementById("G5Right").value;
      let G6R = document.getElementById("G6Right").value;
      let G7R = document.getElementById("G7Right").value;
      let H1R = document.getElementById("H1Right").value;
      let H2R = document.getElementById("H2Right").value;
      let H3R = document.getElementById("H3Right").value;
      let H4R = document.getElementById("H4Right").value;
    column2Sum= (+MBR) + (+G1R) + (+G2R) + (+G3R) + (+G4R) + (+G5R) + (+G6R) + (+G7R) + (+H1R) + (+H2R) + (+H3R) + (+H4R);
      document.getElementById("columnTwo").value=column2Sum;

    }
    function column3() { //Adds up column 3 (difference)
      let MBD = document.getElementById("mainBeamDif").value;
      let G1D = document.getElementById("G1dif").value;
      let G2D = document.getElementById("G2dif").value;
      let G3D = document.getElementById("G3dif").value;
      let G4D = document.getElementById("G4dif").value;
      let G5D = document.getElementById("G5dif").value;
      let G6D = document.getElementById("G6dif").value;
      let G7D = document.getElementById("G7dif").value;
      let H1D = document.getElementById("H1dif").value;
      let H2D = document.getElementById("H2dif").value;
      let H3D = document.getElementById("H3dif").value;
      let H4D = document.getElementById("H4dif").value;
    column3Sum= (+MBD) + (+G1D) + (+G2D) + (+G3D) + (+G4D) + (+G5D) + (+G6D) + (+G7D) + (+H1D) + (+H2D) + (+H3D) + (+H4D);
     document.getElementById("columnThree").value=column3Sum;
    }
    function subtotal() {  //Adds up spreadCredit , column1 , and column2
      let spreadCredit = document.getElementById("spreadCredit").value;
      subtotalSum = (+spreadCredit) +(+column1Sum) + (+column2Sum);
      document.getElementById("subtotal").value= subtotalSum;
    }
    function final() {  //Subtracts column3 from subtotal
      finalSum = subtotalSum - column3Sum;
      document.getElementById("finalScore").value=finalSum;
    }
    function reset() { //Clears all textboxes
      document.getElementById("finalScore").value = " ";
      document.getElementById("subtotal").value = " ";
      document.getElementById("columnThree").value = " ";
      document.getElementById("columnTwo").value = " ";
      document.getElementById("columnOne").value = " ";
      document.getElementById("mainBeamLeft").value = " ";

      document.getElementById("G1Left").value = " ";
      document.getElementById("G2Left").value = " ";
      document.getElementById("G3Left").value = " ";
      document.getElementById("G4Left").value = " ";
      document.getElementById("G5Left").value = " ";
      document.getElementById("G6Left").value = " ";
      document.getElementById("G7Left").value = " ";
      document.getElementById("H1Left").value = " ";
      document.getElementById("H2Left").value = " ";
      document.getElementById("H3Left").value = " ";
      document.getElementById("H4Left").value = " ";

      document.getElementById("mainBeamRight").value = " ";
      document.getElementById("G1Right").value = " ";
      document.getElementById("G2Right").value = " ";
      document.getElementById("G3Right").value = " ";
      document.getElementById("G4Right").value = " ";
      document.getElementById("G5Right").value = " ";
      document.getElementById("G6Right").value = " ";
      document.getElementById("G7Right").value = " ";
      document.getElementById("H1Right").value = " ";
      document.getElementById("H2Right").value = " ";
      document.getElementById("H3Right").value = " ";
      document.getElementById("H4Right").value = " ";

      document.getElementById("mainBeamDif").value = " ";
      document.getElementById("G1dif").value = " ";
      document.getElementById("G2dif").value = " ";
      document.getElementById("G3dif").value = " ";
      document.getElementById("G4dif").value = " ";
      document.getElementById("G5dif").value = " ";
      document.getElementById("G6dif").value = " ";
      document.getElementById("G7dif").value = " ";
      document.getElementById("H1dif").value = " ";
      document.getElementById("H2dif").value = " ";
      document.getElementById("H3dif").value = " ";
      document.getElementById("H4dif").value = " ";
    }