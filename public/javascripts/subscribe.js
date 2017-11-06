$ (document).ready (function () {
  var subscribeForm = $ ('#subscribe-form');
  subscribeForm.submit (function () {
    $.ajax ({
              type:    'POST',
              url:     "/subscribe/full",
              data:    $ (this).serialize (),
              success: function (data) {
                if (data.status === "OK") {
                  var pElement       = document.createElement ('p');
                  pElement.innerHTML = "Subscribed Successfully!";
                  $ ('.success-message')[0].appendChild (pElement);
                }
              }
            });
    return false;
  })
});