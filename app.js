 $(function (){
    
    var currentText = '';
    var operator; 
    var temp ='0';
    var tempOp='+';

    pressNumber();
    CleanNum();
    pressOperator();
    
    
     

    function pressOperator(){
      $('#btnAdd').on('click',function(){      
      operator='+';
      changeToNum(); 
      }); 

      $('#btnMinus').on('click',function(){  
        if(currentText===''){
          currentText=currentText+'-';
          render();
        }else{
          operator='-';
          changeToNum(); 
        }
        
      }); 

      $('#btnPlus').on('click',function(){      
      operator='*';
      changeToNum(); 
      }); 
      $('#btnDivide').on('click',function(){      
      operator='/';
      changeToNum(); 
      }); 
      $('#btnEqeal').on('click',function(){      
      operator='=';
      changeToNum(); 
      initialSetting();
      }); 
      
    };
    
    function changeToNum(){
      number=currentText;
      compute () ;  
      currentText='';
    };


    function CleanNum(){
       $('#btnClear').on('click',function(){

        initialSetting();
        $('#message').text('0');;
        });  
    };

    function initialSetting(){
        var currentText = '';
        var operator; 
        var temp ='0';
        var tempOp='+';
    };
   

    function pressNumber(){
        $('#btn1').on('click',function(){
            currentText = currentText+ '1';
            render();
        });
        $('#btn2').on('click',function(){
            currentText = currentText+ '2';
            render();
        });
        $('#btn3').on('click',function(){
            currentText = currentText+ '3';
            render();
        });
        $('#btn4').on('click',function(){
            currentText = currentText+ '4';
            render();
        });
        $('#btn5').on('click',function(){
            currentText = currentText+ '5';
            render();
        });
        $('#btn6').on('click',function(){
            currentText = currentText+ '6';
            render();
        });
        $('#btn7').on('click',function(){
            currentText = currentText+ '7';
            render();
        });
        $('#btn8').on('click',function(){
            currentText = currentText+ '8';
            render();
        });
        $('#btn9').on('click',function(){
            currentText = currentText+ '9';
            render();
        });
        $('#btn0').on('click',function(){
            currentText = currentText+ '0';
            render();
        });
    };

    function render() {
      $('#message').text(currentText);  
    };

    function compute () {
        if (tempOp==='+'){
            currentText =parseFloat(temp)+parseFloat(currentText);
            changeInCompute();    
        }
        else if (tempOp==='-'){
            currentText =parseFloat(temp)-parseFloat(currentText);
            changeInCompute();
        }
        else if (tempOp==='*'){
            currentText =parseFloat(temp)*parseFloat(currentText);
            changeInCompute();
        }
        else if (tempOp==='/'){
            currentText =parseFloat(temp)/parseFloat(currentText);
            changeInCompute();
        }
    };

    function changeInCompute(){
        tempOp = operator;
        temp =currentText;
        $('#message').text(currentText);
    }
    
});





