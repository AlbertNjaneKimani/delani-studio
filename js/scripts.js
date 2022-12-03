$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function () {
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function () {
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

$(document).ready(function () {
  $("#work1").mouseover(function () {
    $("#port").show();
  }).mouseout(function () {
    $("#port").hide();
  });
});
$(document).ready(function () {
  $("#work2").mouseover(function () {
    $("#port2").show();
  }).mouseout(function () {
    $("#port2").hide();
  });
});
$(document).ready(function () {
  $("#work3").mouseover(function () {
    $("#port3").show();
  }).mouseout(function () {
    $("#port3").hide();
  });
});
$(document).ready(function () {
  $("#work4").mouseover(function () {
    $("#port4").show();
  }).mouseout(function () {
    $("#port4").hide();
  });
});

$(document).ready(function () {
  $("#work5").mouseover(function () {
    $("#port5").show();
  }).mouseout(function () {
    $("#port5").hide();
  });
  $("#work6").mouseover(function () {
    $("#port6").show();
  }).mouseout(function () {
    $("#port6").hide();
  });
  $("#work7").mouseover(function () {
    $("#port7").show();
  }).mouseout(function () {
    $("#port7").hide();
  });
  $("#work8").mouseover(function () {
    $("#port8").show();
  }).mouseout(function () {
    $("#port8").hide();
  });
});

$(document).ready(function () {
  $("contact-form").submit(function (event) {
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#contact").val();
    if ($("input#name").val() && $("input#email").val()) {
      alert(name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });

});