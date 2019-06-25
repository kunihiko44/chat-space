$(function(){

  function buildHTML(message){
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                     ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                     ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                     ${message.content}
                    </p>
                  </div>
                </div>`
    return html;
  }

  function scroll() {
    $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');
      $('.form__submit').prop('disabled', false);
      scroll()
    })
    .fail(function(){
      alert('エラー');
      $('.form__submit').prop('disabled', false);
    })
  })
})