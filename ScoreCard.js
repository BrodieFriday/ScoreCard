 let column1Sum = 0;
    let column2Sum = 0;
    function column1(){
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
    column1Sum= (+G1L) + (+G2L) + (+G3L) + (+G4L) + (+G5L) + (+G6L) + (+G7L) + (+H1L) + (+H2L) + (+H3L) + (+H4L);
    document.getElementById("columnOne").value=column1Sum;
    }
    function column2(){
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
    column2Sum= (+G1R) + (+G2R) + (+G3R) + (+G4R) + (+G5R) + (+G6R) + (+G7R) + (+H1R) + (+H2R) + (+H3R) + (+H4R);
      document.getElementById("columnTwo").value=column2Sum;

    }
    function column3(){

      document.getElementById("columnThree").value="hello";
    }
    function subtotal(){
        document.getElementById("subtotal").value="hello";
    }
    function final(){
      document.getElementById("finalScore").value="hello";
    }
 



   /* $(document).ready(function(){
      $(":Button").click(function(){
       // $("div").css("background-color","green");
       // $("p").css({"font-size":"+40px"});
        var G1L = document.getElementById('G1Left').value;
        var G1R = document.getElementById('G1Right').value;
        var product = parseInt(G1L) + parseInt(G1R); 
        document.getElementById("add").value=product;
  })
}*/