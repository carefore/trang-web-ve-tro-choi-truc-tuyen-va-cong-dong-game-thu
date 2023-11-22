$(document).ready(function() {
  $('#registrationForm').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    
    $.ajax({
      type: 'POST',
      url: 'process.php',
      data: formData,
      success: function(response) {
        alert('Đăng ký thành công!');
        // Có thể thực hiện các hành động khác sau khi đăng ký thành công
      },
      error: function(error) {
        alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
      }
    });
  });
});
