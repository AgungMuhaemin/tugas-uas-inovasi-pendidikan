$(document).ready(function(){

  //Function MembuatRandom Angka

  function randomangka(){

    number1 = 1+Math.floor(Math.random() * (max-min));

    number2 = 1+Math.floor(Math.random() * (max-min));

    $(".number-1").html(number1);

    $(".number-2").html(number2);

    op = '*/+-';

    op2 = op.charAt(Math.floor(Math.random() * op.length));

    $("#operation").html(op2);

    $(".additional").html('= ?');

  }



  $("#level").change(function(){ //Pilih Level

    val = $("#level").val();

    if (val === '1') {

      max = '10';

      min = '1';

      time = '30';

    }

    else if (val === '2') {

      max = '100';

      min = '10';

      time = '60';

    }

    else if (val === '3') {

      max = '1000';

      min = '100';

      time = '90';

    }

  });



  $("#form").submit(function(){ //Siap Main

    // Waktu Dan Skor

    setInterval(function(){

      $("#score-time").load('score-time.html');

      if (time <= 0) {

        alert('Game Over!');

        window.location='./';

      }

    },1000);



    //Point awal

    point = 0;

    $("#point").html(point);



    //Mematikan Input Username Dan Level

    $("#username, #level").attr("disabled","1");



    //Mengubah tombol play menjadi disable dan berubah menjadi kata Enjoy the game!

    $("#play").attr('disabled','1').val('Enjoy the game!');



    //Print username

    $("#usernamectn").html($("#username").val());



    //Menampilkan yang di-hidden

    $(".body-game,.history,.score-time").removeAttr('hidden');



    // Membuat Soal

    randomangka();



    // Cek Jawaban

    $("#submitanswer").submit(function(){

      if (op2 === '*') {

        jawaban = number1*number2;

      }

      else if (op2 === '+') {

        jawaban = number1+number2;

      }

      else if (op2 === '/') {

        jawaban = number1/number2;

      }

      else if (op2 === '-') {

        jawaban = number1-number2;

      }



      answersaya = $(".answer").val();



      if (answersaya == jawaban) { //Jika Benar

        maka = 'Correct';

        dasuc = 'success';

        point = point+1;

      }

      else{ // Jika Salah

        maka = 'Wrong';

        dasuc = 'danger';

        point = point-1;

      }

      $('#point').html(point);

      $(".history-math").append(''+number1+' '+op2+' '+number2+' = '+answersaya+' | '+maka+' answer : '+jawaban+'');

      $(".answer").val('');



      //Membuat Soal Kembali

      randomangka();

    });

  });

});
