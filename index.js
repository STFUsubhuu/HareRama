$(".start").on("click", function(){
  $("img").addClass("hidden");
  $("h1").addClass("hidden");
  $("button").addClass("hidden");
  $("body").addClass("changeCover");

   setTimeout(function(){
        $("body").removeClass("changeCover");
        $("img").removeClass("hidden");
        $("h1").removeClass("hidden");
        $("h1").text("Your processing have been finished.")
        document.getElementById("c").classList.remove("hidden");
        $("#c").on("click", function(){
          $("img").addClass("hidden");
          $("body").addClass("lastcover");
          $("h1").text("Hare Krishna.")
          document.getElementById("c").classList.add("hidden");
        })
   }, 6000);
});
