(function($){
  $(document).ready(function() {

    $("#contact-form").submit(function(e){
      e.preventDefault();
      var name  = $('#name').val(),
          phone  = $('#phone').val(),
          service  = $('#service').val(),
          subject = $('#subject').val();


      var proceed = true;

      if(name == "" && phone == "" && service == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-box .modal-content__title").html("Ошибка!");
        $(".modal-box .modal-content__text").html("Поля не заполнены.");
        proceed = false;
      } else if (name == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-box .modal-content__title").html("Ошибка!");
        $(".modal-box .modal-content__text").html("Забыли указать имя.");
        proceed = false;
      } else if (phone == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-box .modal-content__title").html("Ошибка!");
        $(".modal-box .modal-content__text").html("Забыли указать телефон");
        proceed = false;
      } else if (service == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-box .modal-content__title").html("Ошибка!");
        $(".modal-box .modal-content__text").html("Забыли указать интересующую услугу");
        proceed = false;
      }

      if(proceed){
        $.ajax({
          url : "feedback.php",
          type: "POST",
          data: $(this).serialize(),
        }).done(function(res) {
          answer(res);
        });
      }
    });

    function answer(res) {
      if(res == "error"){
        $(".modal-box").removeClass("is-hidden");
        $(".modal-box .modal-content__title").html("Ошибка отправки!");
        $(".modal-box .modal-content__text").html("Попробуйте снова.");
      }
      if(res == "done"){
        $(".modal-box").removeClass("is-hidden");
        $(".modal-box .modal-content__title").html("Отправлено!");
        $(".modal-box .modal-content__text").html("Мы скоро свяжемся с вами!");
      }
    }
  });
})(jQuery);