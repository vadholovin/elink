(function($){
  $(document).ready(function() {

    $("#modal-contact-form").submit(function(e){
      e.preventDefault();
      var name  = $('#user-name').val(),
          phone  = $('#user-phone').val(),
          subject = $('#subject').val();


      var proceed = true;

      if(name == "" && phone == "") {
        $('#user-name').attr("placeholder", "Поле не заполнено.");
        $('#user-phone').attr("placeholder", "Поле не заполнено.");
        proceed = false;
      } else if (name == "") {
        $('#user-name').attr("placeholder", "Поле не заполнено.");
        proceed = false;
      } else if (phone == "") {
        $('#user-phone').attr("placeholder", "Поле не заполнено.");
        proceed = false;
      }

      if(proceed){
        $(".modal-form").addClass('is-hidden');

        $.ajax({
          url : "feedback-call.php",
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