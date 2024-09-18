(function () {
  $(document).ready(function () {
    $("#infoModal").toggleClass("hidden");

    $(".infobutton").click(function () {
      let __that = $(this);
      let __parent_wrapper = __that.parent().parent();
      let __id = __parent_wrapper.attr("id");

      let __coin_symbol = __id.split("m_").join("");
      let __modal_dialog = $(".modal-dialog");
      $("#infoModal").toggleClass("hidden");

      __modal_dialog.find(".modal-header h5").text(`${-__coin_symbol}`);
    });

    $("[data-action=close_info]").click(function () {
      $("#infoModal").toggleClass("hidden");
    });
  });
})(jQuery);
