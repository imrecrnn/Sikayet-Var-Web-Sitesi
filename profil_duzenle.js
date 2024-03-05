$(document).ready(function () {
    $("#duzenle").click(function () {
        $(".input").removeAttr("disabled");
        $(".input").attr("id", "inputRemain");
        $("#kaydet").attr("class", "kaydetVar")

    });
});

$(document).ready(function () {
    $("#kaydet").click(function () {
        /*var input = document.querySelector(".input");
        $(".input").each(function () {
            if (!isNaN(this.value) && this.value.length != 0)
                input += this.value;

        })
        $(".input").val(input);*/

        $(".input").attr("disabled");
        $(".input").removeAttr("id", "inputRemain");
        $("#kaydet").removeAttr("class", "kaydetVar");
        $(alert("Kaydedildi!"));

    });
});